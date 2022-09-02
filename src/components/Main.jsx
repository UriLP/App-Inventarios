import React from 'react'
import { Text, View } from "react-native"
import Home from "../pages/Home"
import Login from "../pages/Login"
import AppBar from "./AppBar"
import { Navigate, Route, Routes } from 'react-router-native'


const Main = () => {
  return (
    <View style={{ flex: 1 }}>
      <AppBar />

      <Home />
        
    </View>
  )
}

export default Main