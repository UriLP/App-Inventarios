import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createStackNavigator } from "@react-navigation/stack"
import { ImageBackground, StyleSheet } from "react-native";

//screens
import Home from "../pages/HomePage";
import InventarioFisico from "../pages/InventarioFisicoPage";
import InventarioSistema from "../pages/InventarioSistemaPage";
import CaducidadesPage from "../pages/CaducidadesPage";
import SettingsPage from "../pages/SettingsPage";
import NuevoProductoPage from "../pages/NuevoProductoPage";
import theme from "../theme";

const HomeStackNavigator = createStackNavigator();

const styles = StyleSheet.create ({
  title: {
    color: theme.colors.textColor,
    fontSize: theme.fontSizes.headerSize
  }
})

let optionsHeader = {
  headerTitleAlign: "center",
  headerTitleStyle: styles.title,
  headerStyle: { backgroundColor: theme.colors.bgPrimary },
  headerBackTitleVisible: false,
  headerTintColor: theme.colors.textColor,
}

function MyStack () {
  
  return (
    
    <HomeStackNavigator.Navigator
      initialRouteName="HomePage"
      screenOptions={{
        headerMode: 'screen',
        cardStyle: { backgroundColor: theme.colors.bgPrimary }
      }}
    >
      <HomeStackNavigator.Screen 
        name={ "Bienvenido" }
        component={ Home }
        options= { optionsHeader }
      />
      <HomeStackNavigator.Screen 
        name="Inventario Físico"
        component={ InventarioFisico }
        options={ optionsHeader }
      />
      <HomeStackNavigator.Screen 
        name="Inventario en Sistema"
        component={ InventarioSistema }
        options={ optionsHeader }
      />
      <HomeStackNavigator.Screen 
        name="Caducidades"
        component={ CaducidadesPage }
        options={ optionsHeader }
      />
      <HomeStackNavigator.Screen 
        name="Nuevo Producto"
        component={ NuevoProductoPage }
        options={ optionsHeader }
      />
    </HomeStackNavigator.Navigator>
    
  )
}

const Tab = createBottomTabNavigator();

function MyTabs () {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName

          if (route.name === 'Home') {
            iconName = focused
              ? 'home'
              : 'home-outline'
          } else if (route.name === 'Settings') {
            iconName = focused ? 'settings' : 'settings-outline'
          }

          return <Ionicons name={ iconName } size={ size } color={ color } />
        },
        tabBarActiveTintColor: theme.colors.active,
        tabBarInactiveTintColor: theme.colors.active,
        tabBarShowLabel: false,
        tabBarStyle: {backgroundColor: theme.colors.bgPrimary}
      })}
    >
      <Tab.Screen 
        name="Home" 
        component={ MyStack } 
        options={{
          tabBarBadge: 3,
          headerShown: false,
        }}
      />
      <Tab.Screen 
        name="Settings" 
        component={ SettingsPage } 
        options={{
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  )
}

export default function Navigation () {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  )
}
