import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./categorias.style";

function Categorias(props) {
  return (
    <View>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        {props.dados.map((categoria) => {
          return (
            <View key={categoria.id} style={styles.categoria}>
              <TouchableOpacity>
                <Image style={styles.icone} source={categoria.icone} />
                <Text style={styles.descricao}>{categoria.descricao}</Text>
              </TouchableOpacity>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
}

export default Categorias;
