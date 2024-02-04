import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../components/Header';
import CameraContainer from '../components/CameraContainer';
import GlobalClosedButton from '../components/GlobalClosedButton';
import BottomAction from '../components/BottomAction';
import { StyleSheet, View } from 'react-native';

const Home = () => {
    return (
        <View style={{ justifyContent: "space-between" }}>
            <View style={styles.container}>
                <Header />
                <CameraContainer />
                <GlobalClosedButton />
            </View>
            <View style={{ justifyContent: "flex-end" }}>
                <BottomAction />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 32,
        backgroundColor: "#3E6975",
    },
});

export default Home;
