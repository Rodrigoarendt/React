import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export default function Cadastro({ navigation }) {
    return (
        <View style={styles.container}>
           <Text>Tela de cadastro</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginVertical: 10,
        padding: 10,
        backgroundColor: 'blue'
      },
      button: {
        alignItems: "center",
        backgroundColor: "#DDDDDD",
        padding: 10,
        marginVertical: 20
      },
    input: {
        height: 40,
        borderWidth: 1,
        padding: 10,
        backgroundColor: '#fff',
        marginVertical:10
    },
    title:{
        color: 'red',
        FontSize: 14
    }
})