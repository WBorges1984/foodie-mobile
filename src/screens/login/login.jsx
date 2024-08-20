import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "./login.styles";
import Header from "../../components/button/header/header";
import Textbox from "../../components/textbox/textbox";
import Button from "../../components/button/button";
import { useState } from "react";

function Login(props) {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  function HandleClickAcessar() {
    console.log("Email: ", email);
    console.log("Senha: ", senha);
  }

  return (
    <View style={styles.container}>
      {}

      <Header texto="Aecesse sua conta" />

      <View style={styles.formGroup}>
        <View style={styles.form}>
          <Textbox
            label="E-mail"
            onChangeText={(texto) => setEmail(texto)}
            value={email}
          />
        </View>

        <View style={styles.form}>
          <Textbox
            label="Senha"
            isPassword
            onChangeText={(texto) => setSenha(texto)}
            value={senha}
          />
        </View>

        <View style={styles.form}>
          <Button texto="Acessar" onPress={HandleClickAcessar} />
        </View>
      </View>

      <View style={styles.footer}>
        <TouchableOpacity onPress={() => props.navigation.navigate("registro")}>
          <Text style={styles.footerText}>Criar minha conta</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default Login;
