import React from 'react'
import { Image, StyleSheet, Text, View } from "react-native"
import Home from "../pages/HomePage"
import Login from "../pages/Login"
import AppBar from "./AppBar"
import { Navigate, Route, Routes } from 'react-router-native'
import Navigation from './Navigation'
import { StatusBar } from 'expo-status-bar'
import theme from '../theme'

// const uri = '../../assets/planta.jpg'
const uri = 'https://images.pexels.com/photos/1391293/pexels-photo-1391293.jpeg?auto=compress&cs=tinysrgb&w=600'

const Main = () => {
  return (
    <View style={ styles.container }>
      
      <StatusBar style='light' />
      {/* <Image source={{ uri }} style={ [styles.image, StyleSheet.absoluteFill] }  /> */}
      <Navigation />
        
    </View>
  )
}

const styles = StyleSheet.create ({
  container: {
    flex: 1,
    // backgroundColor: 'transparent',
    // alignItems: 'center',
    // justifyContent: 'center'
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    zIndex: 0
  }
})

export default Main