import { View, Text, TouchableOpacity, Image, FlatList } from "react-native";
import { styles } from "./detalhe-pedido.style";
import icons from "../../constants/icons";
import { pedido } from "../../constants/dados";
import Produto from "../../components/produto/produto";

export default function DetalhePedido(props) {
  return (
    <View style={styles.container}>
      

      <FlatList
        data={pedido.itens}
        keyExtractor={(item) => item.idItem}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => {
          return <Produto key={item.idItem} foto={item.foto} nome={item.nome} descricao={item.descricao} valor={item.vlTotal} />;
        }}
      />

      <View>
        <View style={styles.valores}>
            <Text style={styles.total}>Resumo de Valores</Text>
        </View>
        
        <View style={styles.valores}>
            <Text style={styles.valor}>Subtotal</Text>
            <Text style={styles.valor}>R$ 66,00</Text>
        </View>
        
        <View style={styles.valores}>
            <Text style={styles.valor}>Taxa de entrega</Text>
            <Text style={styles.valor}>R$ 6,00</Text>
        </View>
        
        <View style={styles.valores}>
            <Text style={styles.total}>Total</Text>
            <Text style={styles.total}>R$ 71,00</Text>
        </View>
      </View>
    </View>
  );
}
