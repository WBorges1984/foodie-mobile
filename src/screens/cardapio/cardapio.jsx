import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import { styles } from "./cardapio.style";
import { restaurante } from "../../constants/dados";
import icons from "../../constants/icons";
import Produto from "../../components/produto/produto";


export default function Cardapio(props) {
  return (
    <View style={styles.container}>
      <View style={styles.containerFoto}>
        <Image source={restaurante.foto} style={styles.foto} resizeMode="contain" />
        <TouchableOpacity style={styles.containerBack} onPress={props.navigation.goBack}>
          <Image source={icons.back2} style={styles.back} />
        </TouchableOpacity>
      </View>

      <View>
        <View style={styles.header}>
          <View style={styles.headerTextos}>
            <Text style={styles.nome}>Nome do estabelecimento</Text>
            <Text style={styles.taxa}>Taxa de entrega: R$ 5,00</Text>
          </View>

          <Image source={icons.favoritoFull} style={styles.favorito} />
        </View>

        <View style={styles.location}>
          <Image source={icons.location} style={styles.locationImg} />
          <Text style={styles.endereco}>Rua Carmem de Freitas Salgado, 126 Califónia - Nova Iguaçu</Text>
        </View>
      </View>
<ScrollView>

      {restaurante.cardapio.map((item) => {
        return (
          <View key={item.idCategoria} style={styles.containerProduto}>
            <Text style={styles.categoria}>{item.categoria}</Text>
            {item.itens.map((prod) => {
              return (
                <Produto
                  key={prod.idProduto}
                  idProduto={prod.idProduto}
                  foto={prod.foto}
                  nome={prod.nome}
                  descricao={prod.descricao}
                  valor={prod.valor}
                />
              );
            })}
          </View>
        );
      })}
      </ScrollView>
    </View>
  );
}
