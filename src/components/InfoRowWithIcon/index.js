import styles from './styles'
import {View, Text} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import React from "react";



const InfoRowWithIcon = ({iconName, text, style}) => {
    return (
        <View style={[styles.infoRow, style]}>
            <View style={styles.infoIcon} >
                <Ionicons name={iconName} size={24} color="black" />
            </View>
            <Text style={styles.infoText}>
                {text}
            </Text>
        </View>
    );
}

export default React.memo(InfoRowWithIcon);