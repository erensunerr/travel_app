import React, {useState} from "react";
import {ImageBackground, SafeAreaView, View, Text, TouchableOpacity, Image, ScrollView, Share} from 'react-native';
import styles from './styles';
import { StatusBar } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import Title from "../../components/Title";
import InfoRowWithIcon from "../../components/InfoRowWithIcon";
import MapView, { PROVIDER_GOOGLE, Marker } from "react-native-maps";
import * as Linking from "expo-linking";

const AttractionDetails = ({ route, navigation }) => {
    const { item } = route.params;

    const [mainImageSrc, setMainImageSrc] = useState(item.images[0]);
    const coords = {
        latitude: item.coordinates["lat"],
        longitude: item.coordinates["lon"],
    };

    const handleShare = (item) => {

        // const url = Linking.createURL(
        //     'wannago',
        //     {
        //         queryParams: {
        //                 id
        //         }
        //     }
        // )
        const url = new URL("https://www.google.com/");
        url.searchParams.append("q", item.name)


        console.log(url)
        Share.share({
            url: url.href
        })
        .then((res) => {
            console.log(res);
        })
        .catch((err) => {
            err && console.log(err);
        });

    }



    return (
        <ScrollView
            style={styles.container}
            showsVerticalScrollIndicator={false}
        >
            <StatusBar
                hidden={true}
            />
            <ImageBackground
                source={{ uri: mainImageSrc }}
                style={styles.mainImage}
                imageProps={{
                    resizeMode: 'center'
                }}
            >
                <SafeAreaView style={styles.header}>
                    <Ionicons
                        style={styles.icon}
                        name="ios-arrow-back-circle-outline"
                        size={36}
                        color="white"
                        onPress={() => navigation.goBack()}
                    />

                    <Ionicons
                        name="md-share-outline"
                        style={styles.icon}
                        size={32}
                        color="white"
                        onPress={() => handleShare(item)}
                    />

                </SafeAreaView>
                <View style={styles.imagePickerContainer}>
                    <View style={styles.imagePicker}>
                        {
                            item.images.slice(0, 3).map(
                                (imageUri) => (
                                    <TouchableOpacity
                                        onPress={() => setMainImageSrc(imageUri)}
                                        key={imageUri}
                                    >
                                        <Image
                                            source={{uri: imageUri}}
                                            style={styles.miniImage}
                                        />
                                    </TouchableOpacity>

                                )
                            )
                        }
                        {
                            item.images.length > 3 ?
                            <TouchableOpacity
                                onPress={() => navigation.navigate('Gallery', {item})}
                            >

                                <Image
                                    key={item.images[3]}
                                    source={{uri: item.images[3]}}
                                    style={styles.miniImage}
                                />
                                <View style={styles.moreImagesContainer}>
                                    <Text style={styles.moreImages}>+{item.images.length - 3}</Text>
                                </View>

                            </TouchableOpacity>
                                : null
                        }
                    </View>
                </View>
            </ImageBackground>

            <View style={styles.infoSection}>
                <View style={[styles.infoRow, {
                    justifyContent: "space-between",
                }]}>
                    <Title text={item.name} style={{color: "black"}}/>
                    <Title text={item.entry_price} style={{color: "black"}}/>
                </View>
                <View style={styles.infoRow}>
                    <Title text={item.city} style={{
                        color: "black",
                        fontWeight: "normal",
                        fontSize: 24,
                    }}/>
                </View>
                <InfoRowWithIcon
                    iconName={"ios-location-outline"}
                    text={
                        item.address
                    }
                    style={{marginTop: 32}}
                />

                <InfoRowWithIcon
                    iconName={"time-outline"}
                    text={
                        `${item.opening_time} - ${item.closing_time}`
                    }
                />
            </View>
            <MapView
                provider={PROVIDER_GOOGLE}
                style={{
                    height: 250,
                    width: "100%",
                    marginBottom: 64,
                }}
                initialRegion={{
                    ...coords,
                    latitudeDelta: 0.04,
                    longitudeDelta: 0.02,
                }}
            >
                <Marker
                    title={item.name}
                    coordinate={coords}
                    isPreselected={true}
                />
            </MapView>
        </ScrollView>
    )
}

export default React.memo(AttractionDetails);