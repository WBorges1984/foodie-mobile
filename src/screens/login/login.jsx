import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "./login.styles";
import Header from "../../components/button/header/header";
import Textbox from "../../components/textbox/textbox";
import Button from "../../components/button/button"

function Login(){
return <View style={styles.container}>{}

         <Header texto="Aecesse sua conta"/>

        <View style={styles.formGroup}>
            
            <View style={styles.form}>
                <Textbox label="E-mail"/>
            </View>
            
            <View style={styles.form}>
                <Textbox label="Senha" isPassword/>
            </View>
            
            <View style={styles.form}>
                <Button texto="Acessar"/>
            </View>
        </View>

        <View style={styles.footer}>
            <TouchableOpacity>
                <Text style={styles.footerText}>Criar minha conta</Text>
            </TouchableOpacity>
        </View>
</View>
}

export default Login;