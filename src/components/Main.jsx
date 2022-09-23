import React, { useEffect, useState } from 'react'
import { Image, StyleSheet, Text, View } from "react-native"
import Home from "../pages/HomePage"
import Login from "../pages/Login"
import AppBar from "./AppBar"
import { Navigate, Route, Routes } from 'react-router-native'
import Navigation from './Navigation'
import { StatusBar } from 'expo-status-bar'
import theme from '../theme'
import Intro from '../pages/Intro'
import AsyncStorage from '@react-native-async-storage/async-storage'

const Main = () => {

  const [ user, setUser ] = useState({})
  const [ isAppFirstTimeOpen, setIsAppFirstTimeOpen] = useState(false)
  const findUser = async () => {
    const result = await AsyncStorage.getItem('user')

    if ( result === null ) return setIsAppFirstTimeOpen(true)
    
    setUser(JSON.parse(result))
    setIsAppFirstTimeOpen(false)
  }

  useEffect(() => {
    findUser()
    // AsyncStorage.clear()
  }, [])

  if ( isAppFirstTimeOpen ) return <Intro onFinish={ findUser } />

  return (
    <>
      <StatusBar style='light' />
      <Navigation user={ user } />        
    </>
  )
}

const styles = StyleSheet.create ({
  container: {
    flex: 1,
  }
})

export default Main