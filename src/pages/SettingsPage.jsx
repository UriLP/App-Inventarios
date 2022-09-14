import React from "react";
import { StyleSheet, Text, View, SafeAreaView, SectionList, StatusBar } from "react-native"
import theme from "../theme";

const DATA = [
  {
    title: "Ajustes Generales",
    data: ["Hora", "Fecha", "Notificaciones"]
  },
  {
    title: "Apariencia",
    data: ["Modo Claro"]
  },
  {
    title: "Seguridad",
    data: ["Usuario", "Contraseña", "Borrar Datos"]
  },
  {
    title: "Nosotros",
    data: ["Contacto", "Calificanos"]
  }
];

const Item = ({ title }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);


const SettingsPage = () => {
  return (
    <SafeAreaView style={styles.container}>
    <SectionList
      sections={DATA}
      keyExtractor={(item, index) => item + index}
      renderItem={({ item }) => <Item title={item} />}
      renderSectionHeader={({ section: { title } }) => (
        <Text style={styles.header}>{title}</Text>
      )}
    />
  </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  titulo: {
    fontSize: 20,
    textAlign: "center",
    marginTop: "20%",
    color: theme.colors.textColor
  },
  container: {
    flex: 1,
    paddingTop: 20,
    backgroundColor: theme.colors.bgPrimary,
  },
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.bgSecondary
  },
  header: {
    fontSize: 32,
    marginHorizontal: 16,
    color: theme.colors.active
  },
  title: {
    fontSize: 24,
    color: theme.colors.textColor
  }
})

export default SettingsPage