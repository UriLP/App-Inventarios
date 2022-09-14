import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import theme from "../theme";

export default function ButtonForm (props) {
    const { onPress } = props;
    return (
      <View style={ styles.containerButton }>
        <TouchableOpacity style={styles.buttonCancelar} onPress={onPress}>
          <Text style={styles.nombreButton}>Cancelar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonGuardar} onPress={onPress}>
        <Text style={styles.nombreButton}>Guardar</Text>
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
      width: 120,
      height: 30,
      backgroundColor: theme.colors.bgSecondary,
      borderWidth: 1,
      borderRadius: 5,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      marginHorizontal: 15
    },
    buttonCancelar: {
      borderColor: theme.colors.active,
      width: 120,
      height: 30,
      // backgroundColor: theme.colors.bgSecondary,
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
      marginVertical: 20
    }
  });