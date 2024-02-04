import { View, Text, TouchableOpacity, StyleSheet } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"

function GlobalClosedButton() {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={[styles.button, styles.active]}>
                <Text style={styles.text}>
                    Global
                </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.text}>
                    Close Up
                </Text>

            </TouchableOpacity>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: "#B7E5E4",
        marginHorizontal: 20,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        borderRadius: 50,
    },
    button: {
        paddingVertical: 8,
        borderRadius: 50,
        width: "50%",
    },
    active: {
        backgroundColor: "#F3AF8E",
        margin: 4,
    },
    text: {
        fontSize: 16,
        textAlign: "center",
        fontWeight: "bold",
        color: "#3E6975"
    },
})
export default GlobalClosedButton;