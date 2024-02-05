import Home from './screens/Home';
import { Provider } from 'react-redux';
import store from './store';
import Images from './screens/Images';
import Done from './screens/Done';
import ProgressBar from './screens/ProgressBar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const App = () => {

  const Stack = createNativeStackNavigator();
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Home">
          <Stack.Screen name='Home' component={Home} />
          <Stack.Screen name='Images' component={Images} />
          <Stack.Screen name='ProgressBar' component={ProgressBar} />
          <Stack.Screen name='Done' component={Done} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
