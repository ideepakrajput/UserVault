import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../components/Header';
import CameraContainer from '../components/CameraContainer';
import GlobalClosedButton from '../components/GlobalClosedButton';
import BottomAction from '../components/BottomAction';
import { StyleSheet, View } from 'react-native';

const Home = ({ navigation }) => {
    return (
        <View style={{ flex: 1, justifyContent: "space-between", alignItems: "center", backgroundColor: "#3E6975", gap: 32 }}>
            <View style={styles.container}>
                <Header navigation={navigation} />
                <CameraContainer />
                <GlobalClosedButton />
            </View>
            <View>
                <BottomAction />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 32,
        paddingTop: 32,
    },
});

export default Home;
