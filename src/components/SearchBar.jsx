import { Dimensions, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import theme from '../theme'
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons';

const SearchBar = ({ containerStyle, nameScreen, onPress, value, onChangeText, onClear }) => {

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
        onChangeText={ onChangeText }
        style={[ styles.searchBar, { ...containerStyle } ]}
        placeholder="Buscar..."
        placeholderTextColor={ theme.colors.inactive }
        value={ value }
      />
      { value  ? (
        <AntDesign 
          name='close' 
          size={ 20 } 
          color={ theme.colors.active } 
          onPress={ onClear } 
          style={ styles.clearIcon }
        /> 
        ): null
      }
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
    // marginVertical: 15,
    marginTop: "20%",
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
  },
  clearIcon: {
    position: 'absolute',
    right: 50
  }
})