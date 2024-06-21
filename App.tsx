import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import Tela1 from './src/components/TelaPerfil';
import Tela2 from './src/components/TelaFotos';
import Tela3 from './src/components/TelaVideos';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import VideoProvider from './src/components/context/AppContext';

const navStack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <VideoProvider>
        <navStack.Navigator>
          <navStack.Screen
            name='Perfil'
            component={Tela1} />
          <navStack.Screen
            name='Fotos'
            component={Tela2} />
          <navStack.Screen
            name='Vídeos'
            component={Tela3} />
        </navStack.Navigator>
      </VideoProvider>
    </NavigationContainer>
  )
}