import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const SettingsPage = () => {
  return (
    <View>
      <Text style={ styles.titulo }>Settings Page</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  titulo: {
    fontSize: 20,
    textAlign: "center",
    marginTop: "20%"
  }
})

export default SettingsPage