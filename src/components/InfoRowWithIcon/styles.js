import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
        infoRow: {
            flexDirection: "row",
            marginTop: 12,
            alignItems: "center",
        },
        infoIcon: {
            padding: 8,
            backgroundColor: "rgba(192, 192, 192, 0.33)",
            borderRadius: 100,
            marginRight: 16,
        },
        infoText: {
            flexWrap: "wrap",
            fontWeight: "bold",
            flexShrink: 1,
        }
})

export default styles;