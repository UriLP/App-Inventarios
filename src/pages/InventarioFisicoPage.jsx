import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const InventarioFisicoPage = () => {
  return (
    <View>
      <Text style={ styles.titulo }>Inventario Fisico</Text>
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

export default InventarioFisicoPage