import { useState } from 'react'
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ViewBase } from "react-native";
import {Picker} from '@react-native-picker/picker'


export default function Cadastro() {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [confSenha, setConfSenha] = useState('');
    const [perfil, setPerfil] = useState('');
    const [msg, setMsg] = useState('');


    function salvar() {
        if (dadosValidos()) {
            var contato = {
                nome: nome,
                email: email,
                senha: senha,
                perfil: perfil
            }
            setMsg('')
            save(contato)
        }

    }


    function save() {
        fetch('http://localhost:3000/usuarios',
            {
                method: 'POST',
                headers: {
                    Accept: 'application/json', 'content-Type': 'application/json'
                },
                body: JSON.stringify({
                    nome: nome,
                    email: email,
                    senha: senha,
                    perfil: perfil
                })
            }
        )
            .then(() => { setMsg("Registro inserido com sucesso") })
            .then(() => limpar())
            .catch(() => { setMsg("Registro não foi inserido") })
    }


    function limpar() {
        setNome("")
        setSenha("")
        setEmail("")
        setConfSenha("")
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
        if (senha == '') {
            setMsg('A senha deve ser Informada')
            return false
        }
        if (senha != confSenha) {
            setMsg('Senha e confirmação não conferem')
            return false
        }
        return true
    }


    return (
        <View style={styles.container}>

            <View style={styles.Box}>
                <Text style={styles.title}>Tela de cadastro</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Informe Nome"
                    value={nome}
                    onChangeText={setNome}
                />
                {(msg.search('nome') > -1) ? <Text styles={styles.msg}>{msg}</Text> : null}
                <TextInput
                    style={styles.input}
                    placeholder="Informe Email"
                    value={email}
                    onChangeText={setEmail}

                />
                {(msg.search('email') > -1) ? <Text styles={styles.msg}>{msg}</Text> : null}
                <TextInput
                    style={styles.input}
                    placeholder="Informe Senha"
                    value={senha}
                    onChangeText={setSenha}
                    secureTextEntry ={true}

                />
                {(msg.search('senha') > -1) ? <Text styles={styles.msg}>{msg}</Text> : null}

                <TextInput
                    style={styles.input}
                    placeholder="Confirme a senha"
                    value={confSenha}
                    onChangeText={setConfSenha}
                    secureTextEntry = {true}

                />
                {(msg.search('confirmação') > -1) ? <Text styles={styles.msg}>{msg}</Text> : null}

                <Picker selectedValue={perfil} onValueChange={setPerfil}>
                    <Picker.Item label="ADM" value="ADM" />
                    <Picker.Item label="VENDEDOR" value="VENDEDOR" />
                    <Picker.Item label="GERENTE" value="GERENTE" />
                </Picker>


                <TouchableOpacity
                    styles={styles.button}
                    onPress={salvar}
                >
                    <Text style={styles.txt}>Gravar</Text>
                </TouchableOpacity>
                {(msg.search('Registro') > -1) ? <Text styles={styles.msg}>{msg}</Text> : null}
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        marginVertical: 10,
        padding: 10,
        backgroundColor: '#643BA6',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%'


    },
    button: {
        backgroundColor: '#516AC4',
        marginVertical: 20,
        width: '100%',
        borderWidth: 1,
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
    }


})