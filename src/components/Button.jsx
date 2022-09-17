import AsyncStorage from "@react-native-async-storage/async-storage";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import theme from "../theme";

export default function ButtonForm (props) {
    const { onPress } = props;
    return (
      <View style={ styles.containerButton }>
        <TouchableOpacity style={styles.buttonCancelar} onPress={() => {
          const obj = {
            id: 1,
            name: 'Eduardo',
            number: 10023

          }

          AsyncStorage.setItem('user', JSON.stringify(obj));
        }}>
          <Text style={styles.nombreButton}>Guardar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttonGuardar} onPress={() => {
          AsyncStorage.getItem('user')
            .then((res)=> {
              console.log({ res: JSON.parse(res) })
            })
        }}>
          <Text style={styles.nombreButton}>Leer</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttonBorrar} onPress={() => {
          AsyncStorage.removeItem('user')
        }}>
          <Text style={styles.nombreButton}>Leer</Text>
        </TouchableOpacity>
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    text: {
      fontSize: theme.fontSizes.formSize,
      lineHeight: 21,
      fontWeight: 'bold',
      letterSpacing: 0.25,
      color: 'white',
    },
    buttonGuardar: {
      borderColor: theme.colors.active,
      width: "30%",
      height: 30,
      backgroundColor: theme.colors.inactive,
      borderWidth: 1,
      borderRadius: 5,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      marginHorizontal: 15
    },
    buttonCancelar: {
      borderColor: theme.colors.active,
      width: "30%",
      height: 30,
      // backgroundColor: theme.colors.inactive,
      borderWidth: 1,
      borderRadius: 5,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      marginHorizontal: 15
    },
    buttonBorrar: {
      borderColor: theme.colors.active,
      width: "30%",
      height: 30,
      backgroundColor: theme.colors.textColor,
      borderWidth: 1,
      borderRadius: 5,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      marginHorizontal: 15
    },
    nombreButton: {
      color: theme.colors.textColor,
    },
    containerButton: {
      display: "flex",
      justifyContent: "center",
      alignContent: "center",
      flexDirection: "row",
      marginVertical: 20,
      width: "100%"
    } 
  });