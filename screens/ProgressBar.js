import { StyleSheet, Text, View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"

function ProgressBar() {
    return (
        <SafeAreaView style={{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#3E6975" }}>
            <View>
                <Text style={styles.text}>{`45%`} in progress</Text>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    text: {
        fontSize: 16,
        fontWeight: "600",
        color: "#B7E5E4E5"
    },
});

export default ProgressBar
