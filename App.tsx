import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import Tela1 from './src/components/Tela1';
import Tela2 from './src/components/Tela2';
import Tela3 from './src/components/Tela3';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const navStack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <navStack.Navigator>
        <navStack.Screen
          name='Perfil'
          component={Tela1} />
        <navStack.Screen
          name='Fotos'
          component={Tela2}/>
        <navStack.Screen
          name='Vídeos'
          component={Tela3}/>
      </navStack.Navigator>
    </NavigationContainer>
  )
}