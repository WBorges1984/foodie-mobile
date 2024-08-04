import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./registro.styles";
import Header from "../../components/button/header/header";
import Textbox from "../../components/textbox/textbox";
import Button from "../../components/button/button"

function Registro(){
return <ScrollView> 
        <View style={styles.container}>{}

                <Header texto="Crar uma conta"/>

                <View style={styles.formGroup}>
                    
                    <View style={styles.form}>
                        <Textbox label="Nome Completo"/>
                    </View>
                    
                    <View style={styles.form}>
                        <Textbox label="E-mail"/>
                    </View>
                    
                    <View style={styles.form}>
                        <Textbox label="Escolha uma senha" isPassword/>
                    </View>
                    
                    <View style={styles.form}>
                        <Textbox label="Confirme a senha" isPassword/>
                    </View>
                    
                    <View style={styles.form}>
                        <Button texto="Próximo passo"/>
                    </View>
                </View>

                <View style={styles.footer}>
                    <TouchableOpacity>
                        <Text style={styles.footerText}>Acessar minha conta</Text>
                    </TouchableOpacity>
                </View>
        </View>
        </ScrollView>
}

export default Registro;