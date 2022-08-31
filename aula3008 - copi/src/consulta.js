import { Text, TouchableOpacity, View, SafeAreaView, FlatList, StyleSheet, StatusBar, TextInput } from 'react-native'
import React from 'React';

export default function Consulta( {navigation}, props) {
  const [nome,setNome] = React.useState('')
    return (
        <View style={styles.container}>
            <SafeAreaView style={styles.input}>
            <FlatList style={styles.input}
                /*data={props.dados}
                renderItem={({item}) => <Text>{item}</Text>}
                keyExtractor={item => item}*/
            />
        </SafeAreaView>
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