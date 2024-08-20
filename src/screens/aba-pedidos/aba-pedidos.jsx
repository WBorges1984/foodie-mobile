import { View, Text, FlatList, Image } from 'react-native'
import {styles} from './aba-pedidos.style'
import { pedidos } from '../../constants/dados'
import icons from '../../constants/icons'
import Pedido from '../../components/pedido/pedido'
import { useLinkProps } from '@react-navigation/native'


function AbaPedidos(props) {

  function DetalhePedido(){
    props.navigation.navigate("Detalhe-pedido")
  }

  return (
    <View style={styles.container}>
      <FlatList data={pedidos} 
        keyExtractor={(restaurante)=> restaurante.id}
        showsVerticalScrollIndicator={false}
        renderItem={({item})=>{
            return <Pedido logotipo={item.logotipo}
              nome={item.nome}
              valor={item.vl_total}
              dt_pedido={item.dt_pedido}
              status={item.status}
              onClickPedido={DetalhePedido}/>   
        }}

        contentContainerStyle={styles.containerList}
        ListEmptyComponent={()=>{
            return <View style={styles.empty}>
                <Image source={icons.empty}/>
                <Text style={styles.emptyText}>Nenhum favorito Cadastrado</Text>
            </View>
        }}
      />
    </View>
  )
}

export default AbaPedidos