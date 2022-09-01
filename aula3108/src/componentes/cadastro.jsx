import { useState } from 'react'
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";


export default function Cadastro() {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [fone, setFone] = useState('');
    const [msg, setMsg] = useState('');


    function salvar() {
        if (dadosValidos()) {
            var contato = {
                nome: nome,
                email: email,
                fone: fone
            }
            console.warn(contato)
            setMsg('')
        }

    }

    function dadosValidos() {
        if (nome == '') {
            setMsg('O nome deve ser Informado')
            return false
        }
        if (email == '') {
            setMsg('O email deve ser Informado')
            return false
        }
        if (fone == '') {
            setMsg('O fone deve ser Informado')
            return false
        }
        return true
    }


        return (
            <View style={styles.container}>
                <Text style={styles.title}>Tela de cadastro</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Informe Nome"
                    value={nome}
                    onChangeText={setNome}
                />
                {(msg.search('nome') > -1) ? <Text styles={styles.msg}>{msg}</Text> : ''}
                <TextInput
                    style={styles.input}
                    placeholder="Informe Email"
                    value={email}
                    onChangeText={setEmail}

                />
                {(msg.search('email') > -1) ? <Text styles={styles.msg}>{msg}</Text> : ''}
                <TextInput
                    style={styles.input}
                    placeholder="Informe Fone"
                    value={fone}
                    onChangeText={setFone}

                />
                {(msg.search('fone') > -1) ? <Text styles={styles.msg}>{msg}</Text> : ''}

                <TouchableOpacity
                    styles={styles.button}
                    onPress={salvar}
                >
                    <Text style={styles.txt}>Gravar</Text>
                </TouchableOpacity>
            </View>
        )
    }

    const styles = StyleSheet.create({
        container: {
            marginVertical: 10,
            padding: 10,
            backgroundColor: 'dark'
        },
        button: {
            alignItems: "center",
            backgroundColor: '#20B753',
            padding: 10,
            marginVertical: 20,
            width: '100%',
            margin: 'auto'
        },
        input: {
            height: 40,
            borderWidth: 1,
            padding: 10,
            backgroundColor: '#CDDCD2',
            marginVertical: 10
        },
        title: {
            color: 'red',
            fontSize: 20,
            textAlign: 'center'
        },
        txt: {
            textAlign: 'center',
            backgroundColor: '#20B753',
        }
        
    })