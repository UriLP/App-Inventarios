import { Dimensions, StatusBar, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { TextInput } from 'react-native-gesture-handler'
import theme from '../theme'
import RoundIconBtn from '../components/RoundIconBtn'
import AsyncStorage from '@react-native-async-storage/async-storage'

const Intro = ({ onFinish }) => {

  const [ name, setName ] = useState('')

  const handleOnChangeText = text => setName( text )

  const handleSubmit = async () => {
    const user = { name : name }
    await AsyncStorage.setItem('user', JSON.stringify(user))
    if ( onFinish ) onFinish()
  }

  return (
    <>
      {/* <StatusBar hidden /> */}
      <View style={ styles.container }>
        <Text style={ styles.textLabel } >Ingresa tu nombre para continuar</Text>
        <TextInput 
          placeholder='Tu nombre' 
          placeholderTextColor={ theme.colors.inactive } 
          style={ styles.textInput } 
          value={ name }
          onChangeText={ handleOnChangeText }
        />
        { name.trim().length >= 3 ? ( 
            <RoundIconBtn antIconName='arrowright' onPress={ handleSubmit } /> 
          ) : null 
        }

      </View>
    </>
  )
}

export default Intro

const width = Dimensions.get('window').width - 50

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: theme.colors.bgPrimary,

  },
  textInput: {
    borderWidth: 2,
    borderColor: theme.colors.active,
    width,
    height: 50,
    borderRadius: 10,
    paddingLeft: 15,
    fontSize: 25,
    color: theme.colors.active,
    marginBottom: 15,
    
  },
  textLabel: {
    color: theme.colors.textColor,
    alignSelf: "flex-start",
    paddingLeft: 25,
    marginBottom: 5,
    opacity: 0.5,

  }
})