import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    icon: {
        margin: 32,
        shadowOffset: {
            width: 1,
            height: 1
        },
        shadowOpacity: 100,
        shadowRadius: 8,
    },
})

export default styles;