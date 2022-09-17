import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import SearchBar from "../components/SearchBar";
import Ionicons from 'react-native-vector-icons/Ionicons';
import theme from "../theme";

const InventarioSistemaPage = () => {
  const nameScreen = 'SistemaPage'
  return (
    <View style={ styles.container }>
      <SearchBar nameScreen={ nameScreen } />
      
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    justifyContent: "center",
    alignContent: "center",
    marginHorizontal: "auto",
    marginTop: 15,
    flexDirection: "row",
    alignItems: "center"
  }
})

export default InventarioSistemaPage