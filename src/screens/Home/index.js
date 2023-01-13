import React, {useEffect, useState} from 'react';
import {SafeAreaView, View, FlatList, ScrollView, Text} from 'react-native';
import * as Linking from "expo-linking";

import Title from "../../components/Title";

import styles from "./styles";
import Categories from "../../components/Categories";
import Attraction from "../../components/Attraction";

import JSON_DATA from '../../data/attractions.json';
import CATEGORIES from '../../data/categories.json';

const ALL = 'All';

const Home = ({ navigation }) => {
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [data, setData] = useState(JSON_DATA);


    useEffect(
        () => {
            if (selectedCategory === ALL) {
                setData(JSON_DATA);
            } else {
                // Filter the json data to match categories
                const filtered = JSON_DATA.filter(
                    (d) => d.categories.includes(selectedCategory)
                );
                setData(
                    filtered
                );
            }
        },
        [selectedCategory]
    )



    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                style={{flexGrow: 1}}
                ListEmptyComponent={
                    <>
                        <Text style={styles.emptyText}>No items found.</Text>
                    </>
                }
                ListHeaderComponent={(
                    <>
                        <Title text={"Where do"} style={{fontWeight: "normal", }} />
                        <Title text={"you want to go?"} />

                        <Title text={"Explore Attractions"} style={styles.subtitle} />
                        <Categories
                            selectedCategory={selectedCategory}
                            categories={[ALL, ...CATEGORIES]}
                            setSelectedCategory={setSelectedCategory}
                        />
                    </>
                )}
                numColumns={2}
                showsVerticalScrollIndicator={false}
                data={data}
                renderItem={
                    ({item, index}) =>
                        <Attraction
                            key={item.id}
                            title={item.name}
                            subtitle={item.city}
                            source={item.images?.length ? item.images[0] : null}
                            style={index % 2 === 0 ? {marginRight: 12} : {}}
                            onPress={() => navigation.navigate('AttractionDetails', { item })}
                        />
                }
                keyExtractor={
                    (item) => String(item?.id)
                }
            />
        </SafeAreaView>
    );
};


export default React.memo(Home);