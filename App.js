import AsyncStorage from '@react-native-async-storage/async-storage'
import { useEffect } from 'react'
import { View } from 'react-native'
import Main from './src/components/Main.jsx'
import Intro from './src/pages/Intro.jsx'

export default function App() {

  const findUser = async () => {
    const result = await AsyncStorage.getItem('user')
    console.log(result);
  }

  useEffect(() => {
    findUser()
  }, [])

  return <Intro />
   
}

