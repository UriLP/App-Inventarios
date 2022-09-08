import { useState } from "react";
import { Keyboard, StyleSheet, TextInput } from "react-native";
import theme from "../theme";

const Input = ({ children }) => {
  const [isFocused, setIsFocused] = useState(false);
  return (
    <TextInput
      placeholder={ children.props.children }
      placeholderTextColor={ theme.colors.bgSecondary }
      style={ styles.input }
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