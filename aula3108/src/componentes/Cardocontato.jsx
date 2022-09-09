import { useState } from 'react'
import { ScrollView, View, Text, StyleSheet } from 'react-native'
import Edicao from './Edicao'
import { TouchableOpacity } from 'react-native-gesture-handler'

export default function Cardcontato(props) {
    const [editar, setEditar] = useState(false)

    function excluir() {
        fetch(`http://localhost:3000/contatos/${props.id}`,
            { method: 'DELETE' }
        )
            .then(() => window.location.reload())
            .catch((erro) => setMsg(`Registro não foi Excluido. Erro: ${erro}`))
    }

    return (
        <ScrollView>
            <View style={styles.container}>
                <View style={styles.card}>
                    <Text>Nome: <Text>{props.nome}</Text></Text>
                    <Text>Email: <Text>{props.fone}</Text></Text>
                    <Text>Fone: <Text>{props.email}</Text></Text>
                    <View style={styles.button}>
                        <TouchableOpacity
                            styles={styles.button}
                            onPress={() => setEditar(!editar)}
                        >
                            <Text>Editar</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            styles={styles.button}
                            onPress={excluir}
                        >

                            <Text>Excluir</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            {(editar) ? <Edicao id={props.id} /> : null}
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: 'silver',
        marginVertical: 5,
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderRadius: 20,
    },
    container: {
        justifyContent: "space-between",
        alignContent: 'center',
        marginHorizontal: 10
    },

    input: {
        height: 30,
        borderWidth: 1,
        padding: 20,
        backgroundColor: '#CDDCD2',
        marginVertical: 20,
        width: 300,
        textAlign: 'center',
        outlineWidth: 0,
        borderRadius: 10

    },
    title: {
        color: 'red',
        fontSize: 30,
        textAlign: 'center'
    },
    txt: {
        textAlign: 'center',
        backgroundColor: '#516AC4',
        width: 300,
        borderWidth: 1,
        outlineWidth: 0,
        borderRadius: 10

    },
    Box: {
        width: '50%',
        justifyContent: 'center',
        alignItems: 'center'
    },

    itens: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    button: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        backgroundColor: ''

    }


})