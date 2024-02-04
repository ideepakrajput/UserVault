import { useEffect, useRef, useState } from "react";
import { ActivityIndicator, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Camera, useCameraDevice, useCameraPermission } from "react-native-vision-camera";

function CameraContainer() {
    const { hasPermission, requestPermission } = useCameraPermission();
    const [imageData, setImageData] = useState();
    const camera = useRef(null);

    const device = useCameraDevice('front');

    useEffect(() => {
        if (!hasPermission)
            requestPermission();
    }, [])

    if (device == null) return <ActivityIndicator />


    const takePhoto = async () => {
        const file = await camera.current.takePhoto();
        setImageData(file.path);
        console.log(file.path);
    }

    return (
        <View style={styles.cameraContainer}>
            <Camera
                style={[StyleSheet.absoluteFill, styles.cameraContainer1]}
                device={device}
                isActive={true}
                ref={camera}
                photo={true}
            />
            <View>
                {/* <Image source={{ uri: "file://" + imageData }} style={{ width: "90%", height: 200 }} /> */}
            </View>
            <View>
                <TouchableOpacity style={styles.captureButton} onPress={takePhoto}></TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    cameraContainer: {
        marginVertical: 32,
        height: 500,
        backgroundColor: "#B7E5E4",
        borderRadius: 20,
        padding: 16,
        justifyContent: "space-between",
        alignItems: "center",
    },
    cameraContainer1: {
        margin: 20,
        height: 390,
    },
    captureButton: {
        width: 60,
        height: 60,
        borderRadius: 50,
        borderWidth: 5,
        borderColor: "rgba(243, 175, 142, 0.5)",
        backgroundColor: "#F3AF8E",
    }
})

export default CameraContainer;
