import { View, Text, TouchableOpacity, Image } from "react-native";
import { styles } from "./aba-perfil.style";
import icons from "../../constants/icons";

export default function AbaPerfil() {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={[styles.item, styles.borderTop]}>
        <View style={styles.containerIcone}>
          <Image source={icons.endereco} style={styles.icone} />
        </View>

        <View style={styles.textos}>
          <Text style={styles.titulo}>Endereço</Text>
          <Text style={styles.subTitulo}>Meu endereço de entrega</Text>
        </View>
        <View style={styles.containerIcone}>
          <Image source={icons.more} style={styles.more} />
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.item}>
        <View style={styles.containerIcone}>
          <Image source={icons.dados} style={styles.icone} />
        </View>

        <View style={styles.textos}>
          <Text style={styles.titulo}>Meus Dados</Text>
          <Text style={styles.subTitulo}>Informações da minha conta</Text>
        </View>
        <View style={styles.containerIcone}>
          <Image source={icons.more} style={styles.more} />
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.item}>
        <View style={styles.containerIcone}>
          <Image source={icons.logout} style={styles.icone} />
        </View>

        <View style={styles.textos}>
          <Text style={styles.titulo}>Desconectar</Text>
          <Text style={styles.subTitulo}>Desconectar seu usuário desse aparelho</Text>
        </View>
        <View style={styles.containerIcone}>
          <Image source={icons.more} style={styles.more} />
        </View>
      </TouchableOpacity>
    </View>
  );
}
