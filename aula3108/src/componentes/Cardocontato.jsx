import { ScrollView, View, Text, StyleSheet } from 'react-native'
export default function Cardcontato(props) {
    return (
        <ScrollView>
            <View style={styles.card}>
                <View style={styles.itens}>
                    <Text>Nome: <Text>{props.nome}</Text></Text>
                    <Text>Email: <Text>{props.fone}</Text></Text>
                    <Text>Fone: <Text>{props.email}</Text></Text>
                </View>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    card: {
        marginVertical: 10,
        padding: 10,
        backgroundColor: '#643BA6',
        justifyContent: 'center',
        alignItems: 'center',

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
        alignItems: 'center'
    }

})