


import { Text, View, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import React from 'React';


export default function Cadastro({ navigation }) {
    const [nome, setNome] = React.useState('')
    const [fone, setFone] = React.useState('')
    const [email, setEmail] = React.useState('')

    return (
        <View>
            <Text style={styles.titulo}>Consulta</Text>
            <TextInput
                style={styles.input}
                placeholder="Informe Nome"
                onChangeText={setNome}
                value={nome}
            />
            <TextInput
                style={styles.input}
                placeholder="Informe Fone"
                onChangeText={setFone}
                value={fone}
            />


            <TextInput
                style={styles.input}
                placeholder="Informe Email"
                onChangeText={setEmail}
                value={email}
            />

            <TouchableOpacity
                style={styles.button}
            >
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => navigation.navigate('home')}
            >
                <Text>Home</Text>
            </TouchableOpacity>
        </View>

    )
}
const styles = StyleSheet.create({
    container: {
        padding: 10,
        backgroundColor: 'aquamarine',
        borderBottomColor: 'silver',
        height: '100vh'
    },
    input: {
        marginVertical: 10,
        padding: 13,
        fontFamily: 'verdana1',
        backgroundColor: 'aqua',
        borderTopEndRadius: 5,
        borderRadius: 12
    },
    titulo: {
        textAlign: 'left',
        color: 'Black',
        fontSize: 20,
    },
    button: {
        alignItems: "center",
        backgroundColor: "grey",
        textDecorationColor: "white",
        padding: 10,
        borderWidth: 0.5,
        borderRadius: 4
    }
});



