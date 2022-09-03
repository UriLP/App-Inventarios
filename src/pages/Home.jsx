import { StyleSheet, Text, View } from "react-native"
import ButtonMenu from "../components/ButtonMenu"
import CircumIcon from "@klarr-agency/circum-icons-react";

const Home = () => {
  return (
    <View style={ styles.container }>
      <ButtonMenu>
        <Text style={ styles.icon }>
          <CircumIcon color='white' size='50' name="box_list"/>
        </Text>
        <Text style={ styles.text }>Fisico</Text>
      </ButtonMenu>
      <ButtonMenu>
        <Text style={ styles.icon }>
          <CircumIcon color='white' size='50' name="laptop"/>
        </Text>
        <Text style={ styles.text }>Sistema</Text>
      </ButtonMenu>
      <ButtonMenu>
        <Text style={ styles.icon }>
        <CircumIcon color='#fff' size='50' name="calendar"/>
        </Text>
        <Text style={ styles.text }>Caducidades</Text>
      </ButtonMenu>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#eee',
    padding: 10,
    height: '80%',
    // flexDirection: 'row',
    marginHorizontal: 30,
    marginVertical: 30,
    display: "grid",
    justifyContent: "center",
    borderRadius: '5%'
  },
  icon: {
    marginVertical: 5,
  },
  text: {
    fontSize: 18
  }
})
