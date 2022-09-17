import AsyncStorage from "@react-native-async-storage/async-storage";
import { useState } from "react";
import { Keyboard, StyleSheet, TextInput } from "react-native";
import theme from "../theme";

const Input = ({ children, onChangeText, value }) => {
  return (
    <TextInput
      placeholder={ children.props.children }
      placeholderTextColor={ theme.colors.inactive }
      style={ styles.input }
      onChangeText={ onChangeText }
      value={ value }
    />
  )
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    // justifyContent: "flex-start",
    // alignContent: "flex-start",
    marginHorizontal: "auto",
    marginTop: 15
  },
  titulo: {
    fontSize: 20,
    textAlign: "center",
    marginTop: "20%",
    color: theme.colors.textColor
  },
  input: {
    borderColor: theme.colors.active,
    borderWidth: 1,
    padding: 10,
    margin: 15,
    width: 300,
    color: theme.colors.active,
    borderRadius: 5
    
  }
})

export default Input