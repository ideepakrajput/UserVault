import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { imagesActions } from '../store/slices/images';
import { useDispatch, useSelector } from 'react-redux';
import Feather from 'react-native-vector-icons/Feather';
import { statusActions } from '../store/slices/status';

const Done = ({ navigation }) => {
    const images = useSelector(store => store.images);
    const dispatch = useDispatch();
    const goToHome = () => {
        navigation.navigate("Home");
        dispatch(imagesActions.reset());
        dispatch(statusActions.reset());
    }
    return (
        <SafeAreaView style={{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#3E6975" }}>
            <View style={{ backgroundColor: "#B7E5E4", width: 317, justifyContent: "center", alignItems: "center", borderRadius: 8, paddingVertical: 16, paddingHorizontal: 28 }}>
                <Feather name="check-circle" size={60} color="rgba(40, 171, 114, 1)" style={{ marginTop: 20 }} />
                <Text style={[styles.text, { color: "#3E6975", fontSize: 20, marginTop: 11 }]}>Successful</Text>
                <Text style={[styles.text, { textAlign: "center", marginTop: 8 }]}>{`Your ${images.globalCount} global images and ${images.closeUpCount} close up images are successfully uploaded.`}</Text>
                <TouchableOpacity style={styles.button}><Text style={[styles.text, { color: "#FFFFFF" }]} onPress={() => goToHome()}>Go back to home</Text></TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: "#515151",
        paddingHorizontal: 30,
        marginTop: 20,
        paddingVertical: 6,
        borderRadius: 10,
    },
    text: {
        fontSize: 16,
        color: "#7698A1"
    },
});

export default Done