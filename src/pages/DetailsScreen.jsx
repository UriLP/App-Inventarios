import { Alert, StyleSheet, Text, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useHeaderHeight } from '@react-navigation/elements'
import theme from '../theme'
import RoundIconBtn from '../components/RoundIconBtn'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useProductos } from '../contexts/ProductoProvider'
import InputModal from '../components/InputModal'

const formatDate = ms => {
  const date = new Date(ms)
  const day = date.getDate()
  const month = date.getMonth() + 1
  const year = date.getFullYear()
  const hrs = date.getHours()
  const min = date.getMinutes()
  const sec = date.getSeconds()

  return `${ day }/${ month }/${ year } - ${ hrs }:${ min }:${ sec }`
}

const DetailsScreen = (props) => {
  // const { producto } = props.route.params
  const [ producto, setProducto ] = useState(props.route.params.producto)
  const headerHeight = useHeaderHeight()

  const { setProductos } = useProductos()
  const [ showModal, setShowModal] = useState(false)
  const [ isEdit, setIsEdit ] = useState(false)

  const [ count1, setCount1 ] = useState(0)
  const [ count2, setCount2 ] = useState(0)
  const [ count3, setCount3 ] = useState(0)

  const [ lastCount1, setLastCount1 ] = useState('')
  const [ lastCount2, setLastCount2 ] = useState('')
  const [ lastCount3, setLastCount3 ] = useState('')

  const [ newPieces, setNewPieces ] = useState('')

  const onPressPlus1 = () => {
    setCount1(count1 + 1)

    const lastCount1 = count1 + 1
    setLastCount1(lastCount1)

    AsyncStorage.setItem('count1', JSON.stringify(lastCount1))
    // console.log(lastCount1);
    loadCounts()

  }

  const onPressMinus1 = () => {
    setCount1(count1 - 1)

    const lastCount1 = count1 - 1
    setLastCount1(lastCount1)

    AsyncStorage.setItem('count1', JSON.stringify(lastCount1))
    // console.log(lastCount1);
    loadCounts()

  }

  const onPressPlus2 = () => {
    setCount2(count2 + 1)

    const lastCount2 = count2 + 1
    setLastCount2(lastCount2)

    AsyncStorage.setItem('count2', JSON.stringify(lastCount2))
    loadCounts()

  }

  const onPressMinus2 = () => {
    setCount2(count2 - 1)

    const lastCount2 = count2 - 1
    setLastCount2(lastCount2)

    AsyncStorage.setItem('count2', JSON.stringify(lastCount2))
    loadCounts()

  }

  const onPressPlus3 = () => {
    setCount3(count3 + 1)

    const lastCount3 = count3 + 1
    setLastCount3(lastCount3)

    AsyncStorage.setItem('count3', JSON.stringify(lastCount3))
    loadCounts()

  }

  const onPressMinus3 = () => {
    setCount3(count3 - 1)

    const lastCount3 = count3 - 1
    setLastCount3(lastCount3)

    AsyncStorage.setItem('count3', JSON.stringify(lastCount3))
    loadCounts()

  }

  const loadCounts = async () => {
    const result1 = await AsyncStorage.getItem('count1')
    const result2 = await AsyncStorage.getItem('count2')
    const result3 = await AsyncStorage.getItem('count3')
    console.log('Valores: ', result1, result2, result3);
    if ( result1 !== null ) setCount1(JSON.parse(result1))
    if ( result2 !== null ) setCount2(JSON.parse(result2))
    if ( result3 !== null ) setCount3(JSON.parse(result3))
    const suma = JSON.parse(result1) + JSON.parse(result2) + JSON.parse(result3)
    console.log('Nueva suma: ', suma );

    const newPieces = suma

    setNewPieces(newPieces)
    AsyncStorage.setItem('newPieces', JSON.stringify(suma))
    
  }
  
  const deleteProducto = async () => {
    const result = await AsyncStorage.getItem('productos')
    let productos= []
    if( result !== null ) productos = JSON.parse(result)

    const newProductos = productos.filter( n => n.id !== producto.id )

    setProductos(newProductos)

    await AsyncStorage.setItem('productos', JSON.stringify(newProductos))

    props.navigation.goBack()
  }

  const displayDeleteAlert = () => {
    Alert.alert(
      '¿Estas seguro?', 
      '¡Esta acción borrara el producto permanentemente!',
      [
        {
          text: 'Borrar',
          onPress: deleteProducto
        },
        {
          text: 'No gracias',
          onPress: () => console.log('No gracias')
        },
      ],
      {
        cancelable: true,
      }
    )
  }

  const handleUpdate = async ( categoria, familia, nombre, neto, piezas, time) => {
    const result = await AsyncStorage.getItem('productos')
    let productos = []
    if ( result !== null ) productos = JSON.parse(result)

    const newProductos = productos.filter(n => {
      if ( n.id === producto.id ) {
        n.categoria = categoria
        n.familia = familia
        n.nombre = nombre
        n.neto = neto
        n.piezas = piezas
        n.isUpdated = true
        n.time = time

        setProducto(n)
      }
      return n
    })

    setProductos(newProductos)
    await AsyncStorage.setItem('productos', JSON.stringify(newProductos))
  }

  const displayNewPiecesAlert = () => {
    loadCounts()
    Alert.alert(
      '¿Estas seguro?', 
      '¡Esta acción cambiara el número de piezas!',
      [
        {
          text: 'Actualizar',
          onPress: handleUpdatePieces()
        },
        {
          text: 'No gracias',
          onPress: () => console.log('No gracias')
        },
      ],
      {
        cancelable: true,
      }
    )
  }

  const  handleUpdatePieces = async ( ) => {
    const result = await AsyncStorage.getItem('productos')
    let productos = []
    if ( result !== null ) productos = JSON.parse(result)

    const nuevasPiezas = await AsyncStorage.getItem('newPieces')
    console.log('Nos llevamos este', JSON.parse(nuevasPiezas))

    const newValuePieces = JSON.parse(nuevasPiezas)
    const newProductosPieces = productos.filter(n => {
      if ( n.id === producto.id ) {
        // n.categoria = categoria
        // n.familia = familia
        // n.nombre = nombre
        // n.neto = neto
        n.piezas = newValuePieces
        // n.isUpdated = true
        // n.time = time

        setProducto(n)
      }
      return n
    })

    setProductos(newProductosPieces)
    await AsyncStorage.setItem('productos', JSON.stringify(newProductosPieces))
  }

  const handleOnClose = () => setShowModal(false)

  const openEditModal = () => {
    setIsEdit(true)
    setShowModal(true)
  }

  useEffect(() => {
    loadCounts()
    // AsyncStorage.clear()
  }, [])

  return (
    // <View style={{ paddingTop: headerHeight }}>
    <View style={[ styles.container, { marginTop: 80 } ]}>
      <View>
        <View style={ styles.headerContainer }>
          <Text style={ styles.categoria }>{ producto.categoria }</Text>
          <Text style={ styles.time }>
            { producto.isUpdated
              ? `Modificado ${ formatDate(producto.time) }`
              : `Creado ${ formatDate(producto.time) }`
            }
          </Text>
        </View>
        <Text style={ styles.nombreProducto }>{ producto.familia } { producto.nombre } { producto.neto }</Text>
        <Text style={ styles.nombreProducto }>Piezas: { producto.piezas }</Text>
      </View>

      <Text style={ styles.piezas } >Piezas</Text>
    
      <View style={ styles.contadoresContainer }>
        <View style={[ styles.contador, { borderColor: theme.colorsCount.ubi1 } ]}>
          <Text style={ styles.ubicacion }>Ubicacion 1</Text>
          <View style={ styles.container }>
            <TouchableOpacity>
              <RoundIconBtn antIconName={'caretup'} style={ styles.buttonContainer } onPress={ onPressPlus1 } />
            </TouchableOpacity>
            <Text style={ styles.numPiezas }>{ count1 }</Text>
            <TouchableOpacity>
              <RoundIconBtn antIconName={'caretdown'} style={ styles.buttonContainer } onPress={ onPressMinus1 } />
            </TouchableOpacity>
          </View>
        </View>
        <View style={[ styles.contador, { borderColor: theme.colorsCount.ubi2 } ]}>
          <Text style={ styles.ubicacion }>Ubicacion 2</Text>
          <View style={ styles.container }>
            <TouchableOpacity>
              <RoundIconBtn antIconName={'caretup'} style={ styles.buttonContainer } onPress={ onPressPlus2 } />
            </TouchableOpacity>
            <Text style={ styles.numPiezas }>{ count2 }</Text>
        
            <TouchableOpacity>
              <RoundIconBtn antIconName={'caretdown'} style={ styles.buttonContainer } onPress={ onPressMinus2 } />
            </TouchableOpacity>
          </View>
        </View>
        <View style={[ styles.contador, { borderColor: theme.colorsCount.ubi3 } ]}>
          <Text style={ styles.ubicacion }>Ubicacion 3</Text>
          <View style={ styles.container }>
            <TouchableOpacity>
              <RoundIconBtn antIconName={'caretup'} style={ styles.buttonContainer } onPress={ onPressPlus3 } />
            </TouchableOpacity>
            <Text style={ styles.numPiezas }>{ count3 }</Text>
        
            <TouchableOpacity>
              <RoundIconBtn antIconName={'caretdown'} style={ styles.buttonContainer } onPress={ onPressMinus3 } />
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <View style={ styles.btnContainer }>
        <TouchableOpacity>
          <RoundIconBtn
            antIconName='delete'
            onPress={ displayDeleteAlert }
          />
        </TouchableOpacity>

        <TouchableOpacity>
          <RoundIconBtn
            antIconName='edit'
            onPress={ openEditModal }
            style={{ marginHorizontal: 15 }}
          />
        </TouchableOpacity>

        <TouchableOpacity>
          <RoundIconBtn
            antIconName='save'
            onPress={ handleUpdatePieces }
          />
        </TouchableOpacity>
      </View>
      <InputModal 
        isEdit={ isEdit }
        producto={ producto }
        onClose={ handleOnClose }
        onSubmit={ handleUpdate }
        visible={ showModal }
      />
    </View>
  )
}

export default DetailsScreen

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    marginHorizontal: 10
  },
  contadoresContainer: {
    flexDirection: "row",
  },
  nombreProducto: {
    color: theme.colors.textColor,
    fontSize: theme.fontSizes.headerSize
  },
  contador: {
    // borderColor: theme.colors.active,
    borderWidth: 2,
    padding: 15,
    marginHorizontal: 5,
    borderRadius: 10
  },
  ubicacion: {
    color: theme.colors.textColor,
    paddingBottom: 10,

  },
  piezas: {
    color: theme.colors.textColor,
    fontSize: theme.fontSizes.subHeadingSize,
    paddingVertical: 15
  },
  numPiezas: {
    color: theme.colors.textColor,
    fontSize: 30
  },
  button: {
    borderColor: theme.colors.active,
    // width: 50,
    paddingHorizontal: 10,
    height: 30,
    backgroundColor: theme.colors.inactive,
    borderWidth: 1,
    borderRadius: 5,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 15,
  },
  buttonContainer: {
    backgroundColor: 'transparent',
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center'
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20
  },
  categoria: {
    textAlign: 'left',
    color: theme.colors.textColor,
    fontSize: theme.fontSizes.smallSize
  },
  time: {
    textAlign: 'right',
    color: theme.colors.textColor,
    fontSize: theme.fontSizes.smallSize
  },
  btnContainer: {
    flexDirection: 'row',
    marginTop: 20
  }


})