import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from "react-native";
import Input from "../components/TextInput";
import theme from "../theme";
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from "@react-navigation/native";

const CaducidadesPage = () => {
  return (
    <View style={ styles.container }>

      <Input style={ styles.input } >
        <Text>Buscar...</Text>
      </Input>

      <TouchableOpacity onPress={ () => navigation.navigate("NuevoProducto") }>

        <Ionicons name="add-outline" color={ theme.colors.active } size={32} />
      </TouchableOpacity>
    
      
      
      
    

      {/* <TouchableOpacity onPress={ () => navigation.navigate("NuevoProducto") }>

        <Ionicons name="add-outline" color={ theme.colors.active } size={32} />
      </TouchableOpacity> */}

    
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
  },
  titulo: {
    fontSize: 20,
    textAlign: "center",
    marginTop: "20%",
    color: theme.colors.textColor
  },
  containerInput: {
    marginVertical: 10
  },
  input: {
    borderColor: theme.colors.active,
    borderWidth: 1,
    padding: 10,
    marginLeft: 15,
    width: 300,
    color: theme.colors.active,
  },
  nombreInput: {
    fontSize: 16,
    color: theme.colors.textColor,
    marginLeft: 15
  }
})
export default CaducidadesPage