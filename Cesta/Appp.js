import { useState } from 'react';
import { TouchableUpacity, StyleSheet, Text, TextInput, View } from 'react-native';
import cesta from '../Cesta/cesta';

export default function App() {
    const [frutas, setFrutas] = useState(["Maça", "Banana", "Morango"])
    const [text, setText] = useState('')

    const onAdd = () => {
        setFrutas([...frutas, text])
    }

    return(
        <View style={Style.conteiner}>
            <Text style={style.rotulo}>Nome</Text>
            <TextInput
                style={StyleSheet.input}
                value={text}
                onChangeText={setText}
                placeholder="Informar nome"
            />
            <TouchableUpacity
                style={style.button}
                onPress={onAdd}
            >
                <Text>Clique Aqui</Text>
            </TouchableUpacity>

            <Text>Lista de Frutas <hr/> </Text>

            <cesta
                dados={frutas}
            />
            </View>
            
    );

    const styles = StyleSheet.create({
        conteiner: {
            flex: 1,
            backgroundColor: '#fff',
            alignItems: 'center',
            justifyContent: 'center',
            marginHorizontal: 10
        },
        input: {
            height: 40,
            margin: 12,
            borderWidth: 1,
            padding: 10,
            width: '100%',
        },
        button:{
            alignItems: "center",
            backgroundColor: "#DDDDD",
            padding: 10,
            width: '100%',
        },
        rotulo:{
            textAlign: "left",
            width: '100%',
            fontSize: 16,
            color: 'red'
        }

    });
}

