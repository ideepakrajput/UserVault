import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import GlobalClosedButton from "../components/GlobalClosedButton"
import { useSelector } from "react-redux"

function Images({ navigation }) {
    const images = useSelector(store => store.images)
    const status = useSelector(store => store.status)
    const uploadImages = async () => {
        navigation.navigate("Done")
    }
    return (
        <SafeAreaView style={{ flex: 1, justifyContent: "space-between", backgroundColor: "#3E6975" }}>
            {status.isGlobal ?
                <>
                    <View>
                        <Text style={[styles.text, { color: "rgba(183, 229, 228, 0.9)", marginTop: 32 }]}>{images.globalCount} Global Images</Text>
                    </View>
                    <View style={styles.imagesContainer}>
                        <View>
                            <Image style={styles.images} source={{ uri: `file://${images.global.top}` }}></Image>
                        </View>
                        <View>
                            <Image style={styles.images} source={{ uri: `file://${images.global.frontal}` }}></Image>
                        </View>
                        <View>
                            <Image style={styles.images} source={{ uri: `file://${images.global.left}` }}></Image>
                        </View>
                        <View>
                            <Image style={styles.images} source={{ uri: `file://${images.global.right}` }}></Image>
                        </View>
                    </View>
                </>
                :
                <>
                    <View>
                        <Text style={[styles.text, { color: "rgba(183, 229, 228, 0.9)", marginTop: 32 }]}>{images.closeUpCount} Close Up Images</Text>
                    </View>
                    <View style={styles.imagesContainer}>
                        <View>
                            <Image style={styles.images} source={{ uri: `file://${images.closeUp.right}` }}></Image>
                        </View>
                        <View>
                            <Image style={styles.images} source={{ uri: `file://${images.closeUp.right}` }}></Image>
                        </View>
                        <View>
                            <Image style={styles.images} source={{ uri: `file://${images.closeUp.right}` }}></Image>
                        </View>
                        <View>
                            <Image style={styles.images} source={{ uri: `file://${images.closeUp.right}` }}></Image>
                        </View>
                    </View>
                </>
            }


            <View>
                <GlobalClosedButton globalCount={images.globalCount} closeUpCount={images.closeUpCount} />
            </View>
            <View>
                <TouchableOpacity style={styles.button}><Text style={styles.text} onPress={uploadImages}>Upload</Text></TouchableOpacity>
            </View>

            {/* <SafeAreaView style={{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#3E6975" }}>
                <View>
                    <Text style={styles.text}>{`45%`} in progress</Text>
                </View>
            </SafeAreaView> */}
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    button: {
        paddingVertical: 16,
        borderRadius: 8,
        margin: 28,
        backgroundColor: "#F3AF8E",
    },
    text: {
        fontSize: 16,
        textAlign: "center",
        fontWeight: "bold",
        color: "#3E6975"
    },
    images: {
        width: 150,
        height: 180,
    },
    imagesContainer: {
        flexDirection: "row",
        flexWrap: "wrap",
        gap: 16,
        justifyContent: "center",
    }
})
export default Images