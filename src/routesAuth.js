import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Principal from "./screens/principal/principal";
import Cardapio from './screens/cardapio/cardapio'
import Busca from './screens/busca/busca'
import DetalheProduto from "./screens/detalhe-produto/detalhe-produto";
import DetalhePedido from "./screens/detalhe-pedido/detalhe-pedido";
import Checkout from "./screens/checkout/checkout";
import { Text, TouchableOpacity } from "react-native";
import { COLORS } from "./constants/theme";

const Stack = createNativeStackNavigator();

export default function RoutesAuth() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Principal" component={Principal} options={{
            headerShown: false,
          }}
        />
        
        <Stack.Screen
          name="Checkout" component={Checkout} options={{
            headerShadowVisible: false,
            title: "Meu pedido",
            headerTitleAlign: "center",
            animation:"fade_from_bottom",
            headerRight:()=>{
              return <TouchableOpacity onPress={()=> alert("ok")}>
                <Text style={{color: COLORS.red}}>Limpar</Text>
              </TouchableOpacity>
            }
          }}
        />

        <Stack.Screen
          name="Detalhe-pedido" component={DetalhePedido} options={{
            headerShadowVisible: false,
            title: "Detalhes do pedido",
            headerTitleAlign: "center",
            animation:"fade_from_bottom"
          }}
        />
        <Stack.Screen
          name="Detalhe-produto" component={DetalheProduto} options={{
            headerShown: false,
          }}
        />

        <Stack.Screen
          name="Cardapio" component={Cardapio} options={{
            headerShown: false,
          }}
        />

        <Stack.Screen
          name="Busca" component={Busca} options={{
            headerShown: false,
          }}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}
