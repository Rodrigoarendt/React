import * as React from 'react';
import { NavigationContainer}  from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Home from './src/componentes/Home'
import Consulta from './src/componentes/consulta'
import Cadastro from './src/componentes/CardUser'



const TabMaterial = createMaterialTopTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <TabMaterial.Navigator useLegacyImplementation>
        <TabMaterial.Screen name="Home" component={Home} />
        <TabMaterial.Screen name="Cadastro" component={Cadastro} />
        {/*<TabMaterial.Screen name="Consulta" component={Consulta} />*/}
      </TabMaterial.Navigator>
    </NavigationContainer>
  );
}

