import React from 'react';

import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const Header = () => {
  return (
    <View style={styles.headerContainer}>
      <Text style={[styles.text, { color: "#ffffff", fontSize: 20 }]}>Wade Warren</Text>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.text}>End</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  button: {
    backgroundColor: "#515151",
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderRadius: 50,
  },
  text: {
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default Header;
