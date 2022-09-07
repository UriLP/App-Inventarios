import React from 'react'
import { Text, View } from "react-native"
import Home from "../pages/HomePage"
import Login from "../pages/Login"
import AppBar from "./AppBar"
import { Navigate, Route, Routes } from 'react-router-native'
import Navigation from './Navigation'
import { StatusBar } from 'expo-status-bar'
import theme from '../theme'


const Main = () => {
  return (
    <View style={{ flex: 1, backgroundColor: 'red' }}>
      
      <StatusBar style='light' />
      
      <Navigation />
        
    </View>
  )
}

export default Main