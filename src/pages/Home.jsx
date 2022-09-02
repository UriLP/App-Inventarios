import { StyleSheet, Text, View } from "react-native"
import ButtonMenu from "../components/ButtonMenu"

const Home = () => {
  return (
    <View style={ styles.container }>
      <ButtonMenu>Fisico</ButtonMenu>
      <ButtonMenu>Sistema</ButtonMenu>
    </View>
  )
}

export default Home

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
  }
})
