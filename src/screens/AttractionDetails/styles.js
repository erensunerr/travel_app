import { StyleSheet, Dimensions } from "react-native";

const {height, width} = Dimensions.get('screen');

const styles = StyleSheet.create({
    container: {

    },
    mainImage: {
        width: '100%',
        height: height / 2,
        justifyContent: "space-between",
        alignItems: "stretch",
    },
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
    imagePickerContainer: {
        alignItems: "center",
    },
    imagePicker: {
        flexDirection: "row",
        justifyContent: "center",
        backgroundColor: "rgba(256, 256, 256, 0.45)",
        padding: 8,
        borderRadius: 16,
        margin: 16
    },
    miniImage: {
        width: 48,
        height: 48,
        marginHorizontal: 8,
        borderRadius: 8,
    },
    moreImagesContainer: {
        position: "absolute",
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        justifyContent: "center",
        alignItems: "center",

    },
    moreImages: {
        fontSize: 24,
        fontWeight: "bold",
        color: "white",
        textShadowOffset: {
            width: 1,
            height: 1
        },
        textShadowOpacity: 100,
        textShadowRadius: 8,
    },
    infoSection: {
        margin: 32,
    },
    infoRow: {
        flexDirection: "row",
        marginTop: 12,
    },
    bold: {
        fontWeight: "bold",
    }

})

export default styles;