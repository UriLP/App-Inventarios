import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, TextInput, TouchableWithoutFeedback, Keyboard, FlatList, Dimensions } from "react-native";
import Input from "../components/TextInput";
import theme from "../theme";
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from "@react-navigation/native";
import SearchBar from "../components/SearchBar";
import InputModal from "../components/InputModal";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Producto from "../components/Producto";

const InventarioFisicoPage = () => {

  const nameScreen = 'FisicoPage'

  const [ modalVisible, setModalVisible ] = useState(false)
  const [ productos, setProductos ] = useState([])

  const findProductos = async () => {
    const result = await AsyncStorage.getItem('productos')
    console.log(result);
    if ( result !== null ) setProductos(JSON.parse(result))
  }

  const handleOnSubmit = async ( familia, nombre, neto ) => {

    const producto = { 
      id: Date.now(),
      familia,
      nombre,
      neto,
      time: Date.now()
    }

    const updatedProductos = [ ...productos, producto ]

    setProductos(updatedProductos)

    await AsyncStorage.setItem('productos', JSON.stringify(updatedProductos))

  }

  useEffect(() => {
    findProductos()
    // AsyncStorage.clear()
  }, [])

  return (
    <TouchableWithoutFeedback onPress={ Keyboard.dismiss } >
      <View style={ styles.container }>
        <SearchBar nameScreen={ nameScreen } onPress={ () => setModalVisible(true) } />
        
        {/* Lista de los productos registrados */}
        <View style={ styles.productosContainer }>
          <FlatList
            data={ productos }
            keyExtractor={ item => item.id.toString() }
            renderItem={ ({ item }) => <Producto item={ item } /> }
          />
        </View>
        
        <InputModal
          visible={ modalVisible }
          onClose={ () => setModalVisible(false) }
          onSubmit={ handleOnSubmit }
        />
      
      </View>
    </TouchableWithoutFeedback>
  )
}


const styles = StyleSheet.create({
  container: {
    display: "flex",
    justifyContent: "center",
    alignContent: "center",
    marginHorizontal: "auto",
    marginTop: 30,
    // flexDirection: "row",
    alignItems: "center",
    zIndex: 1
  },
  productosContainer: {
    // backgroundColor: theme.colors.inactive,
    
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

export default InventarioFisicoPage