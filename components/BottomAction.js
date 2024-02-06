import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { statusActions } from "../store/slices/status";
import Icon from "react-native-vector-icons/Ionicons"

function BottomAction() {
    const status = useSelector(store => store.status);
    const images = useSelector(store => store.images);
    const dispatch = useDispatch();
    const globalCloseUp = status.isGlobal ? "global" : "closeUp";

    return (
        <ScrollView horizontal={true}>
            <View style={styles.container}>
                {images[globalCloseUp].top ?
                    <View onPress={() => dispatch(statusActions.setBottomTab('TOP'))}>
                        <Image style={[styles.images, [status.bottomTab === 'LEFT' && { borderTopRightRadius: 30 }]]} source={{ uri: `file://${images[globalCloseUp].top}` }}></Image>
                        <View style={[styles.overlay, [status.bottomTab === 'LEFT' && { borderTopRightRadius: 30 }]]}>
                            <Icon name="checkbox-outline" size={40} color={"rgba(48, 251, 93, 1)"} style={{ fontWeight: "bold" }} />
                            <Text style={styles.overlayText}>Top</Text>
                        </View>
                    </View>
                    :
                    <TouchableOpacity style={[styles.imageButton, [status.bottomTab === 'TOP' && styles.active], [status.bottomTab === 'LEFT' && { borderTopRightRadius: 30 }]]} onPress={() => dispatch(statusActions.setBottomTab('TOP'))}>
                        <View>
                            <Image style={styles.image} source={require("../assets/images/image2.png")}>
                            </Image>
                            <Text style={[status.bottomTab === 'TOP' ? styles.activeText : styles.text]}>Top</Text>
                        </View>
                    </TouchableOpacity>
                }

                {images[globalCloseUp].left ?
                    <View onPress={() => dispatch(statusActions.setBottomTab('LEFT'))}>
                        <Image style={[styles.images, [status.bottomTab === 'TOP' && { borderTopLeftRadius: 30 }, [status.bottomTab === 'FRONTAL' && { borderTopRightRadius: 30 }]]]} source={{ uri: `file://${images[globalCloseUp].left}` }}></Image>
                        <View style={[styles.overlay, [status.bottomTab === 'TOP' && { borderTopLeftRadius: 30 }, [status.bottomTab === 'FRONTAL' && { borderTopRightRadius: 30 }]]]}>
                            <Icon name="checkbox-outline" size={40} color={"rgba(48, 251, 93, 1)"} style={{ fontWeight: "bold" }} />
                            <Text style={styles.overlayText}>Left</Text>
                        </View>
                    </View>
                    :
                    <TouchableOpacity style={[styles.imageButton, [status.bottomTab === 'LEFT' && styles.active], [status.bottomTab === 'TOP' && { borderTopLeftRadius: 30 }, [status.bottomTab === 'FRONTAL' && { borderTopRightRadius: 30 }]]]} onPress={() => dispatch(statusActions.setBottomTab('LEFT'))}>
                        <View>
                            <Image style={styles.image} source={require("../assets/images/image3.png")}>
                            </Image>
                            <Text style={[status.bottomTab === 'LEFT' ? styles.activeText : styles.text]}>Left</Text>
                        </View>
                    </TouchableOpacity>
                }

                {images[globalCloseUp].frontal ?
                    <View onPress={() => dispatch(statusActions.setBottomTab('FRONTAL'))}>
                        <Image style={[styles.images, [status.bottomTab === 'LEFT' && { borderTopLeftRadius: 30 }], [status.bottomTab === 'RIGHT' && { borderTopRightRadius: 30 }]]} source={{ uri: `file://${images[globalCloseUp].frontal}` }}></Image>
                        <View style={[styles.overlay, [status.bottomTab === 'LEFT' && { borderTopLeftRadius: 30 }], [status.bottomTab === 'RIGHT' && { borderTopRightRadius: 30 }]]}>
                            <Icon name="checkbox-outline" size={40} color={"rgba(48, 251, 93, 1)"} style={{ fontWeight: "bold" }} />
                            <Text style={styles.overlayText}>Frontal</Text>
                        </View>
                    </View>
                    :
                    <TouchableOpacity style={[styles.imageButton, [status.bottomTab === 'FRONTAL' && styles.active], [status.bottomTab === 'LEFT' && { borderTopLeftRadius: 30 }], [status.bottomTab === 'RIGHT' && { borderTopRightRadius: 30 }]]} onPress={() => dispatch(statusActions.setBottomTab('FRONTAL'))}>
                        <View>
                            <Image style={styles.image} source={require("../assets/images/image1.png")}>
                            </Image>
                            <Text style={[status.bottomTab === 'FRONTAL' ? styles.activeText : styles.text]}>Frontal</Text>
                        </View>
                    </TouchableOpacity>
                }

                {images[globalCloseUp].right ?
                    <View onPress={() => dispatch(statusActions.setBottomTab('RIGHT'))}>
                        <Image style={[styles.images, [status.bottomTab === 'FRONTAL' && { borderTopLeftRadius: 30 }]]} source={{ uri: `file://${images[globalCloseUp].right}` }}></Image>
                        <View style={[styles.overlay, [status.bottomTab === 'FRONTAL' && { borderTopLeftRadius: 30 }]]}>
                            <Icon name="checkbox-outline" size={40} color={"rgba(48, 251, 93, 1)"} style={{ fontWeight: "bold" }} />
                            <Text style={styles.overlayText}>RIGHT</Text>
                        </View>
                    </View>
                    :
                    <TouchableOpacity style={[styles.imageButton, [status.bottomTab === 'RIGHT' && styles.active], [status.bottomTab === 'FRONTAL' && { borderTopLeftRadius: 30 }]]} onPress={() => dispatch(statusActions.setBottomTab('RIGHT'))}>
                        <View>
                            <Image style={styles.image} source={require("../assets/images/image4.png")}>
                            </Image>
                            <Text style={[status.bottomTab === 'RIGHT' ? styles.activeText : styles.text]}>Right</Text>
                        </View>
                    </TouchableOpacity>
                }
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
        position: "relative",
        gap: 8
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
        fontFamily: "Onest",
        alignSelf: "center",
        fontWeight: "700"
    },
    text: {
        fontSize: 14,
        fontWeight: "400",
        alignSelf: "center",
        color: "#B7E5E4",
    },
    images: {
        width: 132,
        height: 150,
        resizeMode: "cover",
    },
    overlay: {
        position: "absolute",
        height: "100%",
        width: "100%",
        backgroundColor: "rgba(27, 214, 113, 1)",
        opacity: 0.5,
        flexDirection: "column",
        gap: 16,
        alignItems: "center",
        height: 150,
        justifyContent: "space-evenly"
    },
    overlayText: {
        color: "rgba(255, 255, 255, 1)",
        fontFamily: "Onest",
        fontWeight: "800",
        fontSize: 16,
    }
})

export default BottomAction;