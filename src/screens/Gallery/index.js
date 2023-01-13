import React from "react";
import {FlatList, SafeAreaView, Text, Image, View, ImageBackground} from 'react-native';
import styles from './styles';
import {Ionicons} from "@expo/vector-icons";

const Gallery = ({ route, navigation }) => {
    const { item } = route.params;
    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                showsVerticalScrollIndicator={false}
                data={item.images}
                renderItem={
                    ({item: imageUri}) => (
                        <Image
                            source={{
                                uri: imageUri
                            }}
                            style={{
                                margin: 16,
                                marginVertical: 8,
                                height: 250,
                                borderRadius: 8,
                            }}
                        />
                    )
                }
                ListHeaderComponent={
                    <View style={{
                        position: 'absolute',
                    }}>
                        <Ionicons
                            style={styles.icon}
                            name="ios-arrow-back-circle-outline"
                            size={36}
                            color="white"
                            onPress={() => navigation.goBack()}
                        />
                    </View>
                }
                stickyHeaderIndices={[0]}
            />
        </SafeAreaView>
    )
}

export default React.memo(Gallery);