import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./registro2.styles";
import Header from "../../components/button/header/header";
import Textbox from "../../components/textbox/textbox";
import Button from "../../components/button/button";
import { useState } from "react";

function Registro2(props) {
  const [cep, setCep] = useState("");
  const [endereco, setEndereco] = useState("");
  const [compl, setCompl] = useState("");
  const [bairro, setBairro] = useState("");
  const [cidade, setCidade] = useState("");
  const [uf, setUF] = useState("");

  return (
    <>
      <View style={styles.container}>
        {}
        <ScrollView style={styles.scrollView} automaticallyAdjustKeyboardInsets={true}>
          <Header texto="Informe seu endereço" />

          <View style={styles.formGroup}>
            <View style={styles.form}>
              <Textbox label="CEP" onChangeText={(texto) => setCep(texto)} value={cep} />
            </View>
            <View style={styles.formHorizontal}>
              <View style={styles.form70}>
                <Textbox label="Endereço" onChangeText={(texto) => setEndereco(texto)} value={endereco} />
              </View>
              <View style={styles.form30}>
                <Textbox label="Compl." onChangeText={(texto) => setCompl(texto)} value={compl} />
              </View>
            </View>

            <View style={styles.form}>
              <Textbox label="Bairro" onChangeText={(texto) => setBairro(texto)} value={bairro} />
            </View>

            <View style={styles.formHorizontal}>
              <View style={styles.form70}>
                <Textbox label="Cidade" onChangeText={(texto) => setCidade(texto)} value={cidade} />
              </View>
              <View style={styles.form30}>
                <Textbox label="UF" onChangeText={(texto) => setUF(texto)} value={uf} />
              </View>
            </View>
          </View>
        </ScrollView>

        <View style={styles.form}>
          <Button texto="Criar minha conta" />
        </View>
      </View>
    </>
  );
}

export default Registro2;
