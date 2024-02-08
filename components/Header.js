import React from 'react';

import { View, Text, StyleSheet, TouchableOpacity, BackHandler } from 'react-native';
import customFont from '../utils/customFont';
const Header = ({ navigation }) => {

  return (
    <View style={styles.headerContainer}>
      <Text style={[styles.text, customFont.Onest, { color: "#ffffff", fontSize: 20, fontWeight: "400" }]}>Wade Warren</Text>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Images")}>
        <Text style={[styles.text, { fontWeight: "600" }]}>End</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: 16,
  },
  button: {
    backgroundColor: "#515151",
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderRadius: 20,
  },
  text: {
    fontSize: 16,
    fontFamily: "Onest"
  },
});

export default Header;
