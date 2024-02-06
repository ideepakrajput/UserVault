import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { imagesActions } from '../store/slices/images';
import { useDispatch } from 'react-redux';
import Feather from 'react-native-vector-icons/Feather';

const Done = ({ navigation }) => {
    const dispatch = useDispatch();
    const goToHome = () => {
        navigation.navigate("Home");
        dispatch(imagesActions.reset());
    }
    return (
        <SafeAreaView style={{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#3E6975" }}>
            <View style={{ backgroundColor: "#B7E5E4", width: 317, justifyContent: "center", alignItems: "center", borderRadius: 8, paddingVertical: 16, gap: 8 }}>
                <Feather name="check-circle" size={56} color="rgba(40, 171, 114, 1)" />
                <Text style={[styles.text, { color: "#3E6975", fontSize: 20 }]}>Successful</Text>
                <Text style={[styles.text, { textAlign: "center" }]}>Your { } global images is successfully uploaded.</Text>
                <TouchableOpacity style={styles.button}><Text style={[styles.text, { color: "#FFFFFF" }]} onPress={() => goToHome()}>Go back to home</Text></TouchableOpacity>
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