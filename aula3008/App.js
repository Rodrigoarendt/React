import React, { useState } from 'react'
import { View, StyleSheet,} from 'react-native'
import Frutera from './src/componentes/Frutera'
//import MeuComponente from "./src/componentes/MeusComponentes"
//import Componentes from './src/componentes/result'
const App = () => {
      return (
        <View style={styles.container}>
          {/*
          * <MeuComponente/>
            <Componentes/>
          */} 
             <Frutera />
        </View>
      )}
  
const styles = StyleSheet.create({
  container: {
    width: '100%',
    padding: 10,
    alignItems: 'center',
    borderBottomLeftRadius: 10,
    borderTopRightRadius: 10

  },
  input: {
    marginVertical: 10,
    padding: 13,
    fontFamily: 'verdana',
    backgroundColor: 'skyblue',
    borderTopBottomEndRadius: 10,
    textAlign: 'center',
    color: 'black'
  },
  titulo: {
    textAlign: 'center',
    color: 'Black',
    fontSize: 30,
  },
  button: {
    alignItems: "center",
    backgroundColor: 'black',
    textDecorationColor: "white",
    padding: 10,
    borderWidth: 0.5,
    borderRadius: 4
  
  }
  
})

export default App



