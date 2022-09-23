import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons';
import theme from '../theme';

const NotFound = () => {
  return (
    <View style={[ StyleSheet.absoluteFillObject, styles.container ]}>
      <AntDesign name="frowno" size={ 90 } color={ theme.colors.inactive } />
      <Text style={ styles.text }>Resultado no encontrado</Text>
    </View>
  )
}

export default NotFound

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    opacity: 0.5,
    zIndex: -1,
    position: 'absolute',
    bottom: '-300%'
  },
  text: {
    marginTop: 20,
    fontSize: theme.fontSizes.subHeadingSize,
    color: theme.colors.inactive
  }
})