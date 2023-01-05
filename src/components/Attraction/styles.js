import {StyleSheet, Dimensions} from "react-native";

const { width } = Dimensions.get("window");

const styles = StyleSheet.create({
    card: {
        borderColor: '#e2e2e2',
        borderRadius: 15,
        borderWidth: 1,
        marginRight: 16,
        marginTop: 8,
        padding: 4,
    },
    icon: {
        height: 10,
        marginRight: 4,
        width: 10,
    },
    image: {
        borderRadius: 15,
        height: 120,
        width: (width - 100) / 2,
    },
    row: {
        alignItems: "center",
        flexDirection: "row",
        marginBottom: 12,
        marginLeft: 6,
        marginTop: 4,
    },
    subtitle: {
        color: 'rgba(0, 0, 0, 0.5)',
        fontSize: 10,
        fontWeight: "300",
    },
    title: {
        fontSize: 12,
        fontWeight: "500",
        marginLeft: 6,
        marginTop: 12,
    }

    
})

export default styles;