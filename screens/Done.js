import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const Done = ({ navigation }) => {
    return (
        <SafeAreaView style={{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#3E6975" }}>
            <View style={{ backgroundColor: "#B7E5E4", width: 317, justifyContent: "center", alignItems: "center", borderRadius: 8, paddingVertical: 16, gap: 8 }}>
                <Image style={{ width: 100, height: 100, resizeMode: "contain" }} source={require("../assets/images/done.png")}></Image>
                <Text style={[styles.text, { color: "#3E6975", fontSize: 20 }]}>Successful</Text>
                <Text style={[styles.text, { textAlign: "center" }]}>Your { } global images is successfully uploaded.</Text>
                <TouchableOpacity style={styles.button}><Text style={[styles.text, { color: "#FFFFFF" }]} onPress={() => navigation.navigate("Home")}>Go back to home</Text></TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: "#515151",
        paddingHorizontal: 20,
        paddingVertical: 8,
        borderRadius: 8,
    },
    text: {
        fontSize: 16,
        color: "#7698A1"
    },
});

export default Done