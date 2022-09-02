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

      {/* <Routes path='/' exact>
        <Route exact path='/' element={<Home />} />
        <Route path='/signin' element={<Login />} />
        <Route path='*' element={<Navigate replace to='/' />} />
      </Routes> */}
        
    </View>
  )
}

export default Main