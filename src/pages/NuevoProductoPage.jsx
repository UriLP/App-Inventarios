import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Button, Dimensions } from "react-native";
import Input from "../components/TextInput";
import theme from "../theme";
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from "@react-navigation/native";
import ButtonForm from "../components/Button";
import AsyncStorage from '@react-native-async-storage/async-storage';

const NuevoProductoPage = () => {

  const [textInputValue, setTextInputValue] = useState('');
  const [value, setValue] = useState('');
  const [user, setUser] = useState('');

  const saveValue = () => {
    if (textInputValue && user) {
      AsyncStorage.setItem('key1', textInputValue)
      AsyncStorage.setItem('key2', user)
      setTextInputValue('');
      setUser('');
      alert('Data saved')
    } else {
      alert('Please fill data')
    }
  }

  const getValue = () => {
    AsyncStorage.getItem('key1', 'key2')
      .then((value) => {
        setValue(value)
      })
  }
  
  return (
    <View style={ styles.container }>
     
     {/* <View style={ styles.containerInput } >
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
      </View> */}

      {/* <ButtonForm /> */}

      <TextInput
        style={ styles.input }
        value={ textInputValue }
        onChangeText={ (data) => setTextInputValue(data) }
      />
       <TextInput
        style={ styles.input }
        value={ user }
        onChangeText={ (data) => setUser(data) }
      />

      <TouchableOpacity 
        onPress={ saveValue }
        style={ styles.buttonGuardar }
      >
        <Text style={ styles.nombreButton}>Save Value</Text>
      </TouchableOpacity>

      <TouchableOpacity 
        onPress={ getValue }
        style={ styles.buttonGuardar }
      >
        <Text style={ styles.nombreButton}>Get Value</Text>
      </TouchableOpacity>
    
      <Text style={ styles.nombreButton }>
        { value }
      </Text>
    
    </View>
  )
}


const width = Dimensions.get('window').width - 50;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    justifyContent: "center",
    alignContent: "center",
    marginHorizontal: "auto",
    marginTop: 15,
    // flexDirection: "row",
    alignItems: "center",
    height: "100%"
  },
  titulo: {
    fontSize: theme.fontSizes.subHeadingSize,
    textAlign: "center",
    marginTop: "20%",
    color: theme.colors.textColor
  },
  containerInput: {
    marginVertical: 2
  },
  input: {
    borderColor: theme.colors.active,
    borderWidth: 1,
    padding: 10,
    margin: 15,
    width,
    color: theme.colors.active,
    borderRadius: 5
    
  },
  nombreInput: {
    fontSize: theme.fontSizes.formSize,
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