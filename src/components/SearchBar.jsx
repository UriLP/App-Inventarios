import { Dimensions, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import theme from '../theme'
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

const SearchBar = ({ containerStyle, nameScreen, onPress }) => {

  const navigation = useNavigation()
  // console.log(nameScreen);

  const newItem = () => {
    if ( nameScreen === 'FisicoPage' ) {
      const newItemPages = 'Nuevo Producto'
      return newItemPages
    } else if ( nameScreen === 'SistemaPage' ) {
      const newItemPages = 'Nuevo Producto'
      return newItemPages
    } else {
      const newItemPages = 'Nueva Caducidad'
      return newItemPages
    }

  }
  return (
    <View style={ styles.container }>
      <TextInput 
        style={[ styles.searchBar, { ...containerStyle } ]}
        placeholder="Buscar..."
        placeholderTextColor={ theme.colors.inactive }
      />
      {/* <TouchableOpacity onPress={ () => navigation.navigate(newItem()) }> */}
      <TouchableOpacity onPress={ onPress }>
        <Ionicons name="duplicate-outline" color={ theme.colors.active } size={32} />
      </TouchableOpacity>
    </View>
  )
}

export default SearchBar

const width = Dimensions.get('window').width - 100

const styles = StyleSheet.create({
  container: {
    display: "flex",
    justifyContent: "center",
    alignContent: "center",
    marginHorizontal: "auto",
    marginTop: 15,
    flexDirection: "row",
    alignItems: "center"
  },
  searchBar: {
    borderColor: theme.colors.active,
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    marginLeft: 15,
    width,
    color: theme.colors.active,
    marginVertical: 15,
    marginRight: 10
  }
})