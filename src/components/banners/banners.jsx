import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./banners.style";

function Banners(props) {
  return (
    <View>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        {props.dados.map((banner) => {
          return (
            <View key={banner.id} style={styles.banner}>
              <TouchableOpacity>
                <Image style={styles.icone} source={banner.icone} />
              </TouchableOpacity>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
}

export default Banners;
