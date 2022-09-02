import { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import Cardcontato from "./Cardocontato";

export default function Consulta() {
    const [contatos, setContatos] = useState([])
    useEffect(() => {
        fetch('http://localhost:3000/contatos')
            .then(data => data.json())
            .then(result => setContatos(result))
    }, [])

    return (
        <View>
            <View>
                <Text>Tela de Consulta</Text>
                <FlatList
                    data={contatos}
                    renderItem={({ item }) => <Cardcontato
                        nome={item.nome}
                        fone={item.fone}
                        email={item.email} />}
                    keyExtractor={item => item.id}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginVertical: 10,
        padding: 10,
        backgroundColor: '',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%'
    },

    cards: {
        height: 30,
        borderWidth: 1,
        padding: 20,
        backgroundColor: '#CDDCD2',
        marginVertical: 20,
        width: 500,
        textAlign: 'center',
        outlineWidth: 0,
        borderRadius: 10
    },

})