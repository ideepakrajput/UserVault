import { useState } from "react";
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { statusActions } from "../store/slices/status";

function BottomAction() {
    const status = useSelector(store => store.status);
    const dispatch = useDispatch();

    return (
        <ScrollView horizontal={true}>
            <View style={styles.container}>
                <TouchableOpacity style={[styles.imageButton, [status.bottomTab === 'TOP' && styles.active]]} onPress={() => dispatch(statusActions.setBottomTab('TOP'))}>
                    <Image style={styles.image} source={require("../assets/images/image2.png")}>
                    </Image>
                    <Text style={[styles.text, styles.activeText]}>Top</Text>
                </TouchableOpacity>
                {/* <View style={styles.overlay}><Text style={styles.overlayText}>Uploading</Text></View> */}
                <TouchableOpacity style={[styles.imageButton, [status.bottomTab === 'LEFT' && styles.active]]} onPress={() => dispatch(statusActions.setBottomTab('LEFT'))}>
                    <Image style={styles.image} source={require("../assets/images/image3.png")}>
                    </Image>
                    <Text style={styles.text}>Left</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.imageButton, [status.bottomTab === 'FRONTAL' && styles.active]]} onPress={() => dispatch(statusActions.setBottomTab('FRONTAL'))}>
                    <Image style={styles.image} source={require("../assets/images/image1.png")}>
                    </Image>
                    <Text style={styles.text}>Frontal</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.imageButton, [status.bottomTab === 'RIGHT' && styles.active]]} onPress={() => dispatch(statusActions.setBottomTab('RIGHT'))}>
                    <Image style={styles.image} source={require("../assets/images/image4.png")}>
                    </Image>
                    <Text style={styles.text}>Right</Text>
                </TouchableOpacity>
            </View>
        </ScrollView >
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
    },
    imageButton: {
        padding: 16,
        backgroundColor: "#1A3033",
        position: "relative"
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
        fontSize: 20,
        fontWeight: "bold",
        alignSelf: "center",
        color: "#B7E5E4",
    },
    overlay: {
        position: "absolute",
        height: "100%",
        width: "100%",
        backgroundColor: "rgba(58, 73, 212, 0.8)",
        width: "100 %",
        opacity: 0.5,
        textAlign: "center",
    }
})

export default BottomAction;