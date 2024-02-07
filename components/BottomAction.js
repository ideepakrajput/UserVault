import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { statusActions } from "../store/slices/status";
import Icon from "react-native-vector-icons/Ionicons";
import Svg, { Path } from "react-native-svg"
import { useEffect } from "react";

function UploadingIcon(props) {
    return (
        <Svg
            width={27}
            height={28}
            viewBox="0 0 27 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Path
                d="M13.807 0c.688.3.909.83.893 1.563-.035 1.567-.006 3.137-.014 4.706-.003.839-.444 1.34-1.155 1.349-.756.01-1.214-.487-1.218-1.352-.007-1.569.024-3.138-.014-4.706-.017-.736.202-1.266.895-1.56h.613zM13.195 27.596c-.676-.303-.915-.818-.895-1.559.041-1.567.008-3.137.014-4.706.004-.862.463-1.365 1.213-1.353.718.012 1.157.51 1.16 1.35.008 1.568-.026 3.138.017 4.705.02.744-.227 1.254-.896 1.563h-.613zM6.062 2.252c.413.28.793.428 1.006.705a163.297 163.297 0 013.016 4.074c.475.657.376 1.368-.202 1.779-.555.393-1.329.256-1.777-.351-.991-1.343-1.968-2.697-2.945-4.051-.31-.428-.44-.925-.108-1.362.234-.309.624-.5 1.01-.794zM20.963 25.359c-.442-.3-.862-.463-1.096-.767-1.006-1.307-1.962-2.653-2.925-3.993-.498-.695-.409-1.402.198-1.824.59-.411 1.26-.268 1.748.392.981 1.326 1.954 2.66 2.931 3.989.316.428.458.919.154 1.363-.217.316-.607.516-1.01.84zM20.843 2.339c.983.108 1.587 1.098 1.057 1.884-1.013 1.505-2.096 2.963-3.187 4.414-.39.521-1.068.552-1.588.178-.508-.366-.701-1.049-.337-1.57a138.979 138.979 0 013.205-4.402c.185-.243.561-.34.85-.504zM1.606 8.71c.138.036.358.083.57.151 1.492.481 2.985.966 4.477 1.452.81.264 1.209.893.994 1.56-.22.684-.902.993-1.698.739a280.608 280.608 0 01-4.765-1.556c-.647-.22-.98-.815-.85-1.38.13-.562.637-.974 1.272-.967zM7.68 16.305c-.016.323-.27.708-.757.872-1.699.572-3.403 1.13-5.113 1.67-.592.186-1.188-.173-1.413-.775-.216-.576.023-1.264.626-1.471 1.735-.596 3.48-1.164 5.239-1.683.738-.218 1.435.42 1.419 1.387zM9.237 18.41c.353.274.748.472.98.788.322.44.185.935-.13 1.363-.83 1.134-1.665 2.265-2.498 3.397-.181.247-.352.5-.545.737-.442.539-1.097.636-1.628.253-.521-.375-.69-1.074-.303-1.625 1.03-1.467 2.084-2.92 3.167-4.347.186-.246.57-.344.957-.565zM19.324 11.316c.028-.36.287-.74.775-.902 1.68-.559 3.364-1.111 5.057-1.632.66-.204 1.287.181 1.488.828a1.143 1.143 0 01-.75 1.42c-1.679.564-3.363 1.114-5.058 1.629-.814.246-1.54-.355-1.512-1.343zM20.58 14.92c.102.022.304.053.496.116 1.552.496 3.102.997 4.65 1.502.738.24 1.112.856.917 1.482-.213.683-.874 1.024-1.612.794a319.366 319.366 0 01-4.828-1.545c-.664-.218-.97-.73-.875-1.361.086-.57.563-.978 1.253-.989z"
                fill="#5D6CFB"
            />
        </Svg>
    )
}


function BottomAction() {
    const status = useSelector(store => store.status);
    const images = useSelector(store => store.images);
    const dispatch = useDispatch();
    const globalCloseUp = status.isGlobal ? "global" : "closeUp";
    const bottomTab = status[globalCloseUp].bottomTab;

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            dispatch(statusActions.setUploading(false));
        }, 1000);

        return () => {
            clearTimeout(timeoutId);
        };
    }, [dispatch, status.uploading]);

    return (
        <ScrollView horizontal={true} >
            <View style={styles.container}>
                {images[globalCloseUp].top ?
                    <View>
                        <Image style={[styles.images, [bottomTab === 'LEFT' && { borderTopRightRadius: 30 }]]} source={{ uri: `file://${images[globalCloseUp].top}` }}></Image>
                        <View style={[styles.overlay, [status.uploading && { backgroundColor: "rgba(58, 73, 212, 0.8)" }], [bottomTab === 'LEFT' && { borderTopRightRadius: 30 }]]}>
                            {status.uploading ?
                                <>
                                    <UploadingIcon />
                                    <Text style={styles.overlayText}>Uploading</Text>
                                </>
                                :
                                <Icon name="checkbox-outline" size={40} color={"rgba(48, 251, 93, 1)"} style={{ fontWeight: "bold" }} />
                            }
                            <Text style={styles.overlayText}>Top</Text>
                        </View>
                    </View>
                    :
                    <TouchableOpacity style={[styles.imageButton, [bottomTab === 'TOP' && styles.active], [bottomTab === 'LEFT' && { borderTopRightRadius: 30 }]]} onPress={() => dispatch(statusActions.setBottomTab('TOP'))}>
                        <View>
                            <Image style={styles.image} source={require("../assets/images/image2.png")}>
                            </Image>
                            <Text style={[bottomTab === 'TOP' ? styles.activeText : styles.text]}>Top</Text>
                        </View>
                    </TouchableOpacity>
                }

                {images[globalCloseUp].left ?
                    <View>
                        <Image style={[styles.images, [bottomTab === 'TOP' && { borderTopLeftRadius: 30 }, [bottomTab === 'FRONTAL' && { borderTopRightRadius: 30 }]]]} source={{ uri: `file://${images[globalCloseUp].left}` }}></Image>
                        <View style={[styles.overlay, [status.uploading && { backgroundColor: "rgba(58, 73, 212, 0.8)" }], [bottomTab === 'TOP' && { borderTopLeftRadius: 30 }, [bottomTab === 'FRONTAL' && { borderTopRightRadius: 30 }]]]}>
                            {status.uploading ?
                                <>
                                    <UploadingIcon />
                                    <Text style={styles.overlayText}>Uploading</Text>
                                </>
                                :
                                <Icon name="checkbox-outline" size={40} color={"rgba(48, 251, 93, 1)"} style={{ fontWeight: "bold" }} />
                            }
                            <Text style={styles.overlayText}>Left</Text>
                        </View>
                    </View>
                    :
                    <TouchableOpacity style={[styles.imageButton, [bottomTab === 'LEFT' && styles.active], [bottomTab === 'TOP' && { borderTopLeftRadius: 30 }, [bottomTab === 'FRONTAL' && { borderTopRightRadius: 30 }]]]} onPress={() => dispatch(statusActions.setBottomTab('LEFT'))}>
                        <View>
                            <Image style={styles.image} source={require("../assets/images/image3.png")}>
                            </Image>
                            <Text style={[bottomTab === 'LEFT' ? styles.activeText : styles.text]}>Left</Text>
                        </View>
                    </TouchableOpacity>
                }

                {images[globalCloseUp].frontal ?
                    <View>
                        <Image style={[styles.images, [bottomTab === 'LEFT' && { borderTopLeftRadius: 30 }], [bottomTab === 'RIGHT' && { borderTopRightRadius: 30 }]]} source={{ uri: `file://${images[globalCloseUp].frontal}` }}></Image>
                        <View style={[styles.overlay, [status.uploading && { backgroundColor: "rgba(58, 73, 212, 0.8)" }], [bottomTab === 'LEFT' && { borderTopLeftRadius: 30 }], [bottomTab === 'RIGHT' && { borderTopRightRadius: 30 }]]}>
                            {status.uploading ?
                                <>
                                    <UploadingIcon />
                                    <Text style={styles.overlayText}>Uploading</Text>
                                </>
                                :
                                <Icon name="checkbox-outline" size={40} color={"rgba(48, 251, 93, 1)"} style={{ fontWeight: "bold" }} />
                            }
                            <Text style={styles.overlayText}>Frontal</Text>
                        </View>
                    </View>
                    :
                    <TouchableOpacity style={[styles.imageButton, [bottomTab === 'FRONTAL' && styles.active], [bottomTab === 'LEFT' && { borderTopLeftRadius: 30 }], [bottomTab === 'RIGHT' && { borderTopRightRadius: 30 }]]} onPress={() => dispatch(statusActions.setBottomTab('FRONTAL'))}>
                        <View>
                            <Image style={styles.image} source={require("../assets/images/image1.png")}>
                            </Image>
                            <Text style={[bottomTab === 'FRONTAL' ? styles.activeText : styles.text]}>Frontal</Text>
                        </View>
                    </TouchableOpacity>
                }

                {images[globalCloseUp].right ?
                    <View>
                        <Image style={[styles.images, [bottomTab === 'FRONTAL' && { borderTopLeftRadius: 30 }]]} source={{ uri: `file://${images[globalCloseUp].right}` }}></Image>
                        <View style={[styles.overlay, [status.uploading && { backgroundColor: "rgba(58, 73, 212, 0.8)" }], [bottomTab === 'FRONTAL' && { borderTopLeftRadius: 30 }]]}>
                            {status.uploading ?
                                <>
                                    <UploadingIcon />
                                    <Text style={styles.overlayText}>Uploading</Text>
                                </>
                                :
                                <Icon name="checkbox-outline" size={40} color={"rgba(48, 251, 93, 1)"} style={{ fontWeight: "bold" }} />
                            }
                            <Text style={styles.overlayText}>RIGHT</Text>
                        </View>
                    </View>
                    :
                    <TouchableOpacity style={[styles.imageButton, [bottomTab === 'RIGHT' && styles.active], [bottomTab === 'FRONTAL' && { borderTopLeftRadius: 30 }]]} onPress={() => dispatch(statusActions.setBottomTab('RIGHT'))}>
                        <View>
                            <Image style={styles.image} source={require("../assets/images/image4.png")}>
                            </Image>
                            <Text style={[bottomTab === 'RIGHT' ? styles.activeText : styles.text]}>Right</Text>
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
        height: 150,
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
    },
    borderRadius: {

    }
})

export default BottomAction;