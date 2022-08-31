import { Text, TouchableOpacity, View } from 'react-native'

export default function Home({ navigation }) {
  return (
    <View>
      <Text>Home</Text>
      <TouchableOpacity
        onPress={() => navigation.navigate('cadastro')}
      >
        <Text>Cadastro</Text>
      </TouchableOpacity>
      
      <TouchableOpacity
        onPress={() => navigation.navigate('consulta')}
      >
        <Text>Consulta</Text>
      </TouchableOpacity>
    </View>

  )
}