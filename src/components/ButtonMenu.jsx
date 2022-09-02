import React from "react"
import { StyleSheet, Text, View } from "react-native"
import StyledText from "./StyledText"

const ButtonMenu = ({ children }) => {
  return (
    <View style={ styles.botonMenu }>
      <StyledText color='white'>{ children }</StyledText>
    </View>
  )
}

export default ButtonMenu

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#eee',
    padding: 10,
    height: '80%',
    flexDirection: 'row',
    marginHorizontal: 30,
    marginVertical: 30,
    display: "flex",
    justifyContent: "center",
    borderRadius: '5%'
  },
  botonMenu: {
    backgroundColor: 'gray',
    marginHorizontal: 30,
    marginVertical: 30,
    height: 100,
    width: 100,
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-end",
    paddingBottom: 5,
    borderRadius: '5%',
    flexDirection: 'row',
  },
  text: {
    color: '#fff'
  }
})