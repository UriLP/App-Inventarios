import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Button } from "react-native";
import Input from "../components/TextInput";
import theme from "../theme";
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from "@react-navigation/native";

const NuevoProductoPage = () => {

  const navigation = useNavigation()
  
  return (
    <View style={ styles.container }>
     
     <View style={ styles.containerInput } >
        <Text style={ styles.nombreInput } >Categoría</Text>
        <Input style={ styles.input } >
          <Text>Bebidas, Botanas...</Text>
        </Input>
      </View>

      <View style={ styles.containerInput } >
        <Text style={ styles.nombreInput } >Familia</Text>
        <Input style={ styles.input } >
          <Text>Bonafont, Electrolit...</Text>
        </Input>
      </View>

      <View style={ styles.containerInput } >
        <Text style={ styles.nombreInput } >Nombre / Sabor</Text>
        <Input style={ styles.input } >
          <Text>Uva, Coco, Queso</Text>
        </Input>
      </View>

      <View style={ styles.containerInput } >
        <Text style={ styles.nombreInput } >Contenido Neto</Text>
        <Input style={ styles.input } >
          <Text>630ml, 2L, 50gr</Text>
        </Input>
      </View>

      <View style={ styles.containerInput } >
        <Text style={ styles.nombreInput } >Código de Barras</Text>
        <Input style={ styles.input } >
          <Text>0123456789</Text>
        </Input>
      </View>

      <View style={ styles.containerButton }>
        <View style={ styles.buttonCancelar }>
          <Text style={ styles.nombreButton }>Cancelar</Text>
        </View>
        <View style={ styles.buttonGuardar }>
          <Text style={ styles.nombreButton }>Guardar</Text>
        </View>
      </View>
      

    
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
    // flexDirection: "row",
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
  },
  buttonCancelar: {
    borderColor: theme.colors.active,
    width: 120,
    height: 30,
    // backgroundColor: theme.colors.bgSecondary,
    borderWidth: 1,
    borderRadius: 5,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 15
  },
  buttonGuardar: {
    borderColor: theme.colors.active,
    width: 120,
    height: 30,
    backgroundColor: theme.colors.bgSecondary,
    borderWidth: 1,
    borderRadius: 5,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 15
  },
  nombreButton: {
    color: theme.colors.textColor,
  },
  containerButton: {
    display: "flex",
    justifyContent: "center",
    alignContent: "center",
    flexDirection: "row",
    marginVertical: 20
  }
  
})

export default NuevoProductoPage