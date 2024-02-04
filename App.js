import React from 'react';

import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Home from './screens/Home';

const App = () => {
  return (
    <SafeAreaView>
      <Home />
    </SafeAreaView>
  );
};


export default App;
