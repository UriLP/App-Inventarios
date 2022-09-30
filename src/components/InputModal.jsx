import { Keyboard, Modal, StatusBar, StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import Input from './TextInput'
import theme from '../theme'
import RoundIconBtn from './RoundIconBtn'

const InputModal = ({ visible, onClose, onSubmit, producto, isEdit }) => {

  const [ categoria, setCategoria ] = useState('')
  const [ familia, setFamilia ] = useState('')
  const [ nombre, setNombre ] = useState('')
  const [ neto, setNeto ] = useState('')
  const [ piezas, setPiezas ] = useState(0)

  //Oculta el teclado cuando el usuario toca la pantalla en un spacio en blanco
  const handleModalClose = () => {
    Keyboard.dismiss()
  }

  useEffect(() => {
    if ( isEdit ) {
      setCategoria(producto.categoria)
      setFamilia(producto.familia)
      setNombre(producto.nombre)
      setNeto(producto.neto)
      setPiezas(producto.piezas)
    }
  }, [ isEdit ])

  const handleOnChangeText = ( text, valueFor ) => {
    if ( valueFor === 'Categoria' ) setCategoria(text)
    if ( valueFor === 'Familia' ) setFamilia(text)
    if ( valueFor === 'Nombre' ) setNombre(text)
    if ( valueFor === 'Neto' ) setNeto(text)
    if ( valueFor === 'Piezas' ) setPiezas(text)
  }

  const handleSubmit = () => {
    if ( !categoria.trim() && !familia.trim() && !nombre.trim() && !neto.trim() && !piezas.trim() ) return onClose()

    if ( isEdit ) {
      onSubmit( categoria, familia, nombre, neto, piezas, Date.now() )
      
    }else {
      onSubmit( categoria, familia, nombre, neto, piezas )
      setCategoria('')
      setFamilia('')
      setNombre('')
      setNeto('')
      setPiezas('')
    }
    onClose()
  }

  const closeModal = () => {
    if ( !isEdit ) {
      setCategoria('')
      setFamilia('')
      setNombre('')
      setNeto('') 
      setPiezas('')
    }
    onClose()
  }

  return (
    <>
      {/* <StatusBar hidden /> */}
      <Modal
        visible={ visible }
        animationType='fade'
      >
        <View style={ styles.container }>

          <View style={[ styles.containerInput, { marginTop: 50 } ]} >
            <Text style={ styles.nombreInput } >Categoría</Text>
            <Input 
              value={ categoria }
              onChangeText={ (text) => handleOnChangeText( text, 'Categoria') }
            >
              <Text>Bebidas, Botanas...</Text>
            </Input>
          </View>
          
          <View style={ styles.containerInput } >
            <Text style={ styles.nombreInput } >Familia</Text>
            <Input 
              value={ familia }
              onChangeText={ (text) => handleOnChangeText( text, 'Familia') }
            >
              <Text>Bonafont, Electrolit, Sabritas...</Text>
            </Input>
          </View>

          <View style={ styles.containerInput } >
            <Text style={ styles.nombreInput } >Nombre o Sabor del Producto</Text>
            <Input
              value={ nombre }
              onChangeText={ (text) => handleOnChangeText( text, 'Nombre') }
            >
              <Text>Normal, Uva, Flamin Hot...</Text>
            </Input>
          </View>

          <View style={ styles.containerInput } >
            <Text style={ styles.nombreInput } >Contenido Neto</Text>
            <Input
              value={ neto }
              onChangeText={ (text) => handleOnChangeText( text, 'Neto') }
            >
              <Text>630ml, 2L, 50gr...</Text>
            </Input>
          </View>

          <View  style={ styles.containerInput } >
            <Text style={ styles.nombreInput } >Piezas</Text>
            <Input
              value={ piezas }
              onChangeText={ (text) => handleOnChangeText( text, 'Piezas') }
            >
              <Text>0...</Text>
            </Input>
          </View>

          <View style={ styles.buttonContainer }>
            <RoundIconBtn 
              antIconName='check' 
              onPress={ handleSubmit }
            />
            { familia.trim() || neto.trim() ? (
              <RoundIconBtn 
                style={{ marginLeft: 15 }} 
                antIconName='close' 
                onPress={ closeModal }
              />
            ) : null }
          </View>
        </View>

        <TouchableWithoutFeedback onPress={ handleModalClose }>
          <View style={[ styles.modalBG, StyleSheet.absoluteFillObject ]} />
        </TouchableWithoutFeedback>

      </Modal>
    </>
  )
}

export default InputModal

const styles = StyleSheet.create({
  container: {
    display: "flex",
    justifyContent: "flex-start",
    alignContent: "center",
    marginHorizontal: "auto",
    // marginTop: 15,
    // // flexDirection: "row",
    alignItems: "center",
    // // height: "100%"
    // backgroundColor: theme.colors.bgPrimary,
    flex: 1,
    width: "100%",
    // marginTop: 50
  },
  containerInput: {
    marginVertical: 5,
    
  },
  nombreInput: {
    fontSize: theme.fontSizes.formSize,
    color: theme.colors.textColor,
    marginLeft: 15
  },
  modalBG: {
    flex: 1,
    zIndex: -1,
    backgroundColor: theme.colors.bgPrimary,

  },
  buttonContainer: {
    flexDirection: 'row',
    paddingVertical: 15
  }
})