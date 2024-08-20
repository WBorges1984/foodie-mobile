import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./registro.styles";
import { useState } from "react";
import Header from "../../components/button/header/header";
import Textbox from "../../components/textbox/textbox";
import Button from "../../components/button/button";

function Registro(props) {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha1, setSenha1] = useState("");
  const [senha2, setSenha2] = useState("");

  return (
    <>
      <View style={styles.container}>
        {}
        <ScrollView style={styles.scrollView}>
          <Header texto="Crar uma conta" />

          <View style={styles.formGroup}>
            <View style={styles.form}>
              <Textbox label="Nome Completo" onChangeText={(texto) => setNome(texto)} value={nome} />
            </View>

            <View style={styles.form}>
              <Textbox label="E-mail" onChangeText={(texto) => setEmail(texto)} value={email} />
            </View>

            <View style={styles.form}>
              <Textbox label="Escolha uma senha" onChangeText={(texto) => setSenha1(texto)} value={senha1} isPassword />
            </View>

            <View style={styles.form}>
              <Textbox label="Confirme a senha" onChangeText={(texto) => setSenha2(texto)} value={senha2} isPassword />
            </View>
          </View>
        </ScrollView>

        <View style={styles.form}>
          <Button texto="Próximo passo" onPress={() => props.navigation.navigate("registro2")} />
        </View>
      </View>
    </>
  );
}

export default Registro;
