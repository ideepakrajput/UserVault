import { useEffect, useRef, useState } from "react";
import { ActivityIndicator, Image, StyleSheet, TouchableOpacity, View, useWindowDimensions } from "react-native";
import { Camera, useCameraDevice, useCameraPermission } from "react-native-vision-camera";
import { useDispatch, useSelector } from "react-redux";
import { imagesActions } from "../store/slices/images";
import { statusActions } from "../store/slices/status";

function CameraContainer() {
    const { hasPermission, requestPermission } = useCameraPermission();
    const [imageData, setImageData] = useState();

    const camera = useRef(null);
    const device = useCameraDevice('front');

    const status = useSelector(store => store.status);

    const dispatch = useDispatch();

    const { height, width } = useWindowDimensions();

    const globalCloseUp = status.isGlobal ? "global" : "closeUp";
    const bottomTab = status[globalCloseUp].bottomTab;

    useEffect(() => {
        setImageData('');
    }, [bottomTab, status.isGlobal])

    useEffect(() => {
        if (!hasPermission)
            requestPermission();
    }, [hasPermission])

    if (device == null) return <ActivityIndicator />

    const takePhoto = async () => {
        const file = await camera.current.takePhoto();
        setImageData(file.path);

        if (status.isGlobal) {
            if (bottomTab === 'TOP') {
                dispatch(imagesActions.uploadGlobalTop(file.path));
                dispatch(statusActions.setBottomTab('LEFT'));
                dispatch(statusActions.setUploading(true));
            } else if (bottomTab === 'FRONTAL') {
                dispatch(imagesActions.uploadGlobalFrontal(file.path));
                dispatch(statusActions.setBottomTab('RIGHT'));
                dispatch(statusActions.setUploading(true));
            } else if (bottomTab === 'LEFT') {
                dispatch(imagesActions.uploadGlobalLeft(file.path));
                dispatch(statusActions.setBottomTab('FRONTAL'));
                dispatch(statusActions.setUploading(true));
            } else if (bottomTab === 'RIGHT') {
                dispatch(imagesActions.uploadGlobalRight(file.path));
                dispatch(statusActions.setBottomTab('NONE'));
                dispatch(statusActions.setUploading(true));
            }
        } else {
            if (bottomTab === 'TOP') {
                dispatch(imagesActions.uploadCloseUpTop(file.path));
                dispatch(statusActions.setBottomTab('LEFT'));
                dispatch(statusActions.setUploading(true));
            } else if (bottomTab === 'FRONTAL') {
                dispatch(imagesActions.uploadCloseUpFrontal(file.path));
                dispatch(statusActions.setBottomTab('RIGHT'));
                dispatch(statusActions.setUploading(true));
            } else if (bottomTab === 'LEFT') {
                dispatch(imagesActions.uploadCloseUpLeft(file.path));
                dispatch(statusActions.setBottomTab('FRONTAL'));
                dispatch(statusActions.setUploading(true));
            } else if (bottomTab === 'RIGHT') {
                dispatch(imagesActions.uploadCloseUpRight(file.path));
                dispatch(statusActions.setBottomTab('NONE'));
                dispatch(statusActions.setUploading(true));
            }
        }
    }

    return (
        <View style={[styles.container, { height: height * 0.5 }]}>
            {
                !imageData ? (
                    <>
                        {hasPermission && <Camera
                            style={[StyleSheet.absoluteFill, styles.cameraContainer]}
                            device={device}
                            isActive={true}
                            ref={camera}
                            photo={true}
                        />}
                        <View>

                        </View>
                        <View>
                            <TouchableOpacity style={styles.captureButton} onPress={takePhoto}></TouchableOpacity>
                        </View>
                    </>
                ) :
                    (
                        <Image source={{ uri: "file://" + imageData }} style={styles.image} />
                    )
            }
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginVertical: 30,
        backgroundColor: "#B7E5E4",
        borderRadius: 20,
        justifyContent: "space-between",
        alignItems: "center",
        gap: 30,
    },
    cameraContainer: {
        margin: 30,
        height: "65%",
    },
    image: {
        width: "100%",
        height: "100%",
    },
    captureButton: {
        width: 56,
        height: 56,
        borderRadius: 50,
        borderWidth: 6,
        borderColor: "rgba(243, 175, 142, 0.5)",
        backgroundColor: "#F3AF8E",
    }
})

export default CameraContainer;
