import { StyleSheet, Text, View } from 'react-native'
import React, { createContext, useContext, useEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'

const ProductoContext = createContext()

const ProductoProvider = ({ children }) => {
  const [productos, setProductos ] = useState([])

  const findProductos = async () => {
    const result = await AsyncStorage.getItem('productos')
    console.log(result);
    if ( result !== null ) setProductos(JSON.parse(result))
  }

  useEffect(() => {
    findProductos()
    // AsyncStorage.clear()
  }, [])

  return (
    <ProductoContext.Provider value={{ productos, setProductos, findProductos }}>
      { children }
    </ProductoContext.Provider>
  )
}

export const useProductos = () => useContext( ProductoContext )

export default ProductoProvider

const styles = StyleSheet.create({})