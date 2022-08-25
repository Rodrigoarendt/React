import { useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native'
import Componentes from "./result"

export default function MeuComponente(props) {
  const [nome, setNome] = useState('');
  const [sobreNome, setSobrenome] = useState('');
  const [nomeCompleto, setNomeCompleto] = useState('');
  const [idade, setIdade] = useState('');
  const [ resultado, setResultado ] = useState('')

  const Maioridade = () => {
    if (idade >= 18) {
      setResultado(`${nome} ${sobreNome} voce tem ${idade} e é Maior de idade.`)
  
    } else {
      setResultado(`${nome} ${sobreNome} voce é de Menor ):`)
    }
  }
  

  return (
    <View style={styles.container}>
    
        <TextInput
            style={styles.input}
            placeholder="Informe nome"
            onChangeText={setNome}
            value={nome}
          />

          <TextInput
            style={styles.input}
            placeholder="Informe sobrenome"
            onChangeText={setSobrenome}
            value={sobreNome}
          />

          <TextInput
            style={styles.input}
            placeholder="Informe Idade"
            onChangeText={setIdade}
            value={idade}
          />

          <TouchableOpacity
              onPress={Maioridade}
              style={styles.button}
        
        >
          <Text>Descubra</Text>
        </TouchableOpacity>
          <Componentes resultado={resultado}/>

    </View>

  )

}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: '',
    borderBottomColor: 'silver',
    height: '100vh'
  },

  input: {
    marginVertical: 10,
    padding: 13,
    backgroundColor: 'aqua',
    borderTopEndRadius: 5,
    borderRadius: 12
  },

  titulo: {
    textAlign: 'center',
    color: 'Black',
    fontSize: 30,
  },

  button: {
    alignItems: "center",
    backgroundColor: "grey",
    textDecorationColor: "white",
    padding: 10,
    borderWidth: 0.5,
    borderRadius: 4
  }
})