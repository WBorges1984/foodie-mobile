import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./screens/login/login";
import Registro from "./screens/registro/registro";
import Registro2 from "./screens/registro2/registro2";

const Stack = createNativeStackNavigator();

function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        
        <Stack.Screen name="Login" component={Login}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen name="Registro" component={Registro}
          options={{
            headerShadowVisible: false,
            title: "",
          }}
        />
        <Stack.Screen name="Registro2" component={Registro2}
          options={{
            headerShadowVisible: false,
            title: "",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;