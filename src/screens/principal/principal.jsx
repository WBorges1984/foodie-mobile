import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import icons from "../../constants/icons";

import AbaHome from "../aba-home/aba-home";
import AbaFavoritos from "../aba-favoritos/aba-favoritos";
import AbaPedidos from "../aba-pedidos/aba-pedidos";
import AbaPerfil from "../aba-perfil/aba-perfil";
import { Image } from "react-native";

const Tab = createBottomTabNavigator();

export default function Principal() {
  return (
    <Tab.Navigator screenOptions={{ tabBarShowLabel: false }}>
      <Tab.Screen
        name="Home"
        component={AbaHome}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => {
            return <Image source={icons.abaHome} style={{ width: 25, height: 25, opacity: focused ? 1 : 0.3 }} />;
          },
        }}
      />
      <Tab.Screen
        name="Favorito"
        component={AbaFavoritos}
        options={{
          title: "Favorito",
          headerTitleAlign: "center",
          headerShadowVisible: false,
          tabBarIcon: ({ focused }) => {
            return <Image source={icons.abaFavorito} style={{ width: 25, height: 25, opacity: focused ? 1 : 0.3 }} />;
          },
        }}
      />
      <Tab.Screen
        name="Pedidos"
        component={AbaPedidos}
        options={{
          title: "Pedidos",
          headerTitleAlign: "center",
          headerShadowVisible: false,
          tabBarIcon: ({ focused }) => {
            return <Image source={icons.abaPedidos} style={{ width: 25, height: 25, opacity: focused ? 1 : 0.3 }} />;
          },
        }}
      />
      <Tab.Screen
        name="Perfil"
        component={AbaPerfil}
        options={{
          title: "Meu Perfil",
          headerTitleAlign: "center",
          headerShadowVisible: false,
          tabBarIcon: ({ focused }) => {
            return <Image source={icons.abaPerfil} style={{ width: 25, height: 25, opacity: focused ? 1 : 0.3 }} />;
          },
        }}
      />
    </Tab.Navigator>
  );
}
