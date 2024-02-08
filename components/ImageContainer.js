import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'
import Icon from "react-native-vector-icons/Ionicons"
import { useSelector } from 'react-redux'

const ImageContainer = ({ globalCloseUp }) => {
    const images = useSelector(store => store.images)
    return (
        <>
            {images[globalCloseUp].frontal &&
                <View>
                    <Image style={styles.images} source={{ uri: `file://${images[globalCloseUp].frontal}` }}></Image>
                    <View style={styles.overlay}>
                        <Icon name="checkbox-outline" size={40} color={"rgba(255, 255, 255, 1)"} style={{ fontWeight: "bold" }} />
                        <Text style={styles.overlayText}>FRONTAL</Text>
                    </View>
                </View>
            }
            {images[globalCloseUp].top &&
                <View>
                    <Image style={styles.images} source={{ uri: `file://${images[globalCloseUp].top}` }}></Image>
                    <View style={styles.overlay}>
                        <Icon name="checkbox-outline" size={40} color={"rgba(255, 255, 255, 1)"} style={{ fontWeight: "bold" }} />
                        <Text style={styles.overlayText}>TOP</Text>
                    </View>
                </View>
            }

            {images[globalCloseUp].right &&
                <View>
                    <Image style={styles.images} source={{ uri: `file://${images[globalCloseUp].right}` }}></Image>
                    <View style={styles.overlay}>
                        <Icon name="checkbox-outline" size={40} color={"rgba(255, 255, 255, 1)"} style={{ fontWeight: "bold" }} />
                        <Text style={styles.overlayText}>RIGHT</Text>
                    </View>
                </View>
            }

            {images[globalCloseUp].left &&
                <View>
                    <Image style={styles.images} source={{ uri: `file://${images[globalCloseUp].left}` }}></Image>
                    <View style={styles.overlay}>
                        <Icon name="checkbox-outline" size={40} color={"rgba(255, 255, 255, 1)"} style={{ fontWeight: "bold" }} />
                        <Text style={styles.overlayText}>LEFT</Text>
                    </View>
                </View>
            }
        </>
    )
}

const styles = StyleSheet.create({
    images: {
        width: 167,
        height: 180,
        borderRadius: 8,
    },
    overlay: {
        position: "absolute",
        height: "100%",
        width: "100%",
        backgroundColor: "rgba(27, 214, 113, 1)",
        opacity: 0.5,
        textAlign: "center",
        justifyContent: "space-evenly",
        alignItems: "center",
        borderRadius: 8,
    },
    overlayText: {
        color: "rgba(255, 255, 255, 1)",
        fontFamily: "Onest",
        fontWeight: "800",
        fontSize: 16,
    }
})
export default ImageContainer