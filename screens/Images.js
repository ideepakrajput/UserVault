import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import GlobalClosedButton from "../components/GlobalClosedButton"
import { useSelector } from "react-redux"
import ImageContainer from "../components/ImageContainer"

function Images({ navigation }) {
    const images = useSelector(store => store.images)
    const status = useSelector(store => store.status)
    const uploadImages = () => {
        navigation.navigate("ProgressBar")
    }
    return (
        <SafeAreaView style={{ flex: 1, justifyContent: "space-between", backgroundColor: "#3E6975", paddingHorizontal: 30 }}>
            <View style={{ gap: 32 }}>
                {status.isGlobal ?
                    <>
                        <View>
                            <Text style={[styles.text, { color: "rgba(183, 229, 228, 0.9)", marginTop: 32 }]}>{images.globalCount} Global Images</Text>
                        </View>
                        <View style={{ height: 375 }}>
                            <View style={styles.imagesContainer}>
                                <ImageContainer globalCloseUp="global" />
                            </View>
                        </View>
                    </>
                    :
                    <>
                        <View>
                            <Text style={[styles.text, { color: "rgba(183, 229, 228, 0.9)", marginTop: 32 }]}>{images.closeUpCount} Close Up Images</Text>
                        </View>
                        <View style={{ height: 375 }}>
                            <View style={styles.imagesContainer}>
                                <ImageContainer globalCloseUp="closeUp" />
                            </View>
                        </View>
                    </>
                }

                <View>
                    <GlobalClosedButton globalCount={images.globalCount} closeUpCount={images.closeUpCount} />
                </View>
            </View>
            <View>
                <TouchableOpacity onPress={uploadImages} style={styles.button}><Text style={styles.text} >Upload</Text></TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    button: {
        paddingVertical: 16,
        borderRadius: 8,
        marginVertical: 30,
        backgroundColor: "#F3AF8E",
    },
    text: {
        fontSize: 16,
        textAlign: "center",
        fontWeight: "bold",
        color: "#3E6975"
    },
    imagesContainer: {
        flexDirection: "row",
        flexWrap: "wrap",
        gap: 16,
    },
})
export default Images