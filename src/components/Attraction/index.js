import React from 'react';
import {FlatList, Text, View, TouchableOpacity, Image} from "react-native";
import styles from "./styles";
import Title from "../Title";

const Attraction = ({ title, subtitle,  source, style }) => {
    // The card component
    return (
        <View style={[styles.card, style]}>

            <Image
                source={{uri: source}}
                style={styles.image}
            />
            <Text style={styles.title}>{title}</Text>
            <View style={styles.row}>
                <Image
                    source={require('../../assets/icons/attraction.png')}
                    style={styles.icon}
                />
                <Text style={styles.subtitle}>
                    {subtitle}
                </Text>
            </View>
        </View>
    )
}

export default React.memo(Attraction);