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
import { useProductos } from "../contexts/ProductoProvider";
import NotFound from "../components/NotFound";

const reverseData = data => {
  return data.sort((a, b) => {
    const aInt = parseInt(a.time)
    const bInt = parseInt(b.time)
    if ( aInt < bInt ) return 1
    if ( aInt == bInt ) return 0
    if ( aInt > bInt ) return -1
  })
}

const InventarioFisicoPage = () => {

  const nameScreen = 'FisicoPage'

  const [ modalVisible, setModalVisible ] = useState(false)
  const [ searchQuery, setSearchQuery ] = useState('')
  const { productos, setProductos, findProductos } = useProductos()
  const [ resultNotFound, setResultNotFound ] = useState(false)
  const navigation = useNavigation()

  const handleOnSubmit = async ( categoria, familia, nombre, neto, piezas ) => {

    const producto = { 
      id: Date.now(),
      categoria,
      familia,
      nombre,
      neto,
      piezas,
      time: Date.now()
    }

    const updatedProductos = [ ...productos, producto ]

    setProductos(updatedProductos)

    await AsyncStorage.setItem('productos', JSON.stringify(updatedProductos))

  }

  const openProducto = (producto) => {
    navigation.navigate('Details', { producto })
  }

  // useEffect(() => {
  //   findProductos()
  //   // AsyncStorage.clear()
  // }, [])

  const reverseProducts = reverseData(productos)

  const handleOnSearchInput = async (text) => {
    setSearchQuery(text)
    if ( !text.trim()) {
      setSearchQuery('')
      setResultNotFound(false)
      return await findProductos()
    }
    const filteredProductos = productos.filter(producto => {
      if ( producto.familia.toLowerCase().includes(text.toLowerCase())) {
        return producto
      }
    })

    if ( filteredProductos.length ) {
      setProductos([ ...filteredProductos ])
    }else {
      setResultNotFound(true)
    }
  }

  const handleOnClear = async () => {
    setSearchQuery('')
    setResultNotFound(false)
    await findProductos()
  }

  return (
    <TouchableWithoutFeedback onPress={ Keyboard.dismiss } >
      <View style={ styles.container }>
        
        <SearchBar 
          nameScreen={ nameScreen } 
          onPress={ () => setModalVisible(true) } 
          value={ searchQuery }
          onChangeText={ handleOnSearchInput }
          onClear={ handleOnClear }
        />

        {/* Lista de los productos registrados */}
        { resultNotFound ? <NotFound /> : 
          <View style={ styles.productosContainer }>
            <FlatList
              data={ reverseProducts }
              keyExtractor={ item => item.id.toString() }
              renderItem={ ({ item }) => <Producto onPress={ () => openProducto(item) } item={ item } /> }
            />
          </View>
        }
        
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