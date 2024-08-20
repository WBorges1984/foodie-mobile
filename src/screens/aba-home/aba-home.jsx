import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./aba-home.styles";
import icons from "../../constants/icons";
import { SafeAreaView } from "react-native-safe-area-context";
import Textbox from "../../components/textbox/textbox";
import { useState } from "react";
import Categorias from "../../components/categorias/categorias";
import { categorias, banners, restaurantes } from "../../constants/dados";
import Banners from "../../components/banners/banners";
import Restaurante from "../../components/restaurante/restaurante";

function AbaHome(props) {


function OpenCardapio(){
  props.navigation.navigate("Cardapio")
}

  const [busca, setBusca] = useState("");
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerBar}>
        <Image source={icons.logo} style={styles.logo} />
        <TouchableOpacity onPress={()=> props.navigation.navigate("Checkout")}>
          <Image source={icons.cart} style={styles.cart} />
        </TouchableOpacity>
      </View>

      <View style={styles.busca}>
        <Textbox placeholder="O que vamos pedir hoje?" onChageText={(texto) => setBusca(texto)} value={busca} />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Categorias dados={categorias} />

        <Banners dados={banners} />

        {restaurantes.map((restaurante) => {
          return (
            <View key={restaurante.id}>
              <Restaurante logotipo={restaurante.logotipo} 
              nome={restaurante.nome} 
              endereco={restaurante.endereco} 
              icone={icons.favoritoFull}
              onPress={OpenCardapio}/>
            </View>
          );
        })}
      </ScrollView>
    </SafeAreaView>
  );
}

export default AbaHome;
