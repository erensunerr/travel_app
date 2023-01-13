import React from 'react';
import {Text, View, TouchableOpacity, Image} from "react-native";
import styles from "./styles";

const Attraction = ({ title, subtitle,  source, style, onPress }) => {
    // The card component
    return (
        <TouchableOpacity style={[styles.card, style]} onPress={onPress}>
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
        </TouchableOpacity>
    )
}

export default React.memo(Attraction);