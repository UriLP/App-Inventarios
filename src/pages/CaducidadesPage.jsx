import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const CaducidadesPage = () => {
  return (
    <View>
      <Text style={ styles.titulo }>Próximos a Caducar</Text>
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

export default CaducidadesPage