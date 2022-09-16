import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import theme from '../theme'
import { AntDesign } from '@expo/vector-icons';

const RoundIconBtn = ({ antIconName, size, color, style, onPress }) => {
  return (
    <AntDesign 
      name={ antIconName } 
      size={ size || 24 } 
      color={ color || theme.colors.active } 
      style={[ styles.icon, { ...style } ]}
      onPress={ onPress }
    />
  )
}

export default RoundIconBtn

const styles = StyleSheet.create({
  icon: {
    backgroundColor: theme.colors.bgSecondary,
    padding: 15,
    borderRadius: 50,
    elevation: 5,
    
  }
})