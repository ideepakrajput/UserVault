import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";

function BottomAction() {
    return (
        <ScrollView horizontal={true}>
            <View style={styles.container}>
                <TouchableOpacity style={[styles.imageButton, styles.active]}>
                    <Image style={styles.image} source={require("../assets/images/image2.png")}>
                    </Image>
                    <Text style={[styles.text, styles.activeText]}>Top</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.imageButton}>
                    <Image style={styles.image} source={require("../assets/images/image3.png")}>
                    </Image>
                    <Text style={styles.text}>Left</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.imageButton}>
                    <Image style={styles.image} source={require("../assets/images/image1.png")}>
                    </Image>
                    <Text style={styles.text}>Frontal</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.imageButton}>
                    <Image style={styles.image} source={require("../assets/images/image4.png")}>
                    </Image>
                    <Text style={styles.text}>Right</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
    },
    imageButton: {
        padding: 16,
        backgroundColor: "#1A3033",
    },
    image: {
        height: 100,
        width: 100,
    },
    active: {
        backgroundColor: "#3E6975",
    },
    activeText: {
        color: "#ffffff",
    },
    text: {
        fontSize: 24,
        fontWeight: "bold",
        alignSelf: "center",
        color: "#B7E5E4",
    },
})

export default BottomAction;