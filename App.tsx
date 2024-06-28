import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import TelaPerfil from './src/components/TelaPerfil';
import TelaFotos from './src/components/TelaFotos';
import TelaVideos from './src/components/TelaVideos';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import UsersappProvider from './src/components/context/AppContext';
import TelaSeguidores from './src/components/TelaSeguidores';

const navStack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <UsersappProvider>
        <navStack.Navigator>
          <navStack.Screen
            name='Perfil'
            component={TelaPerfil} />
          <navStack.Screen
            name='Fotos'
            component={TelaFotos} />
          <navStack.Screen
            name='Vídeos'
            component={TelaVideos} />
          <navStack.Screen
            name='Seguidores'
            component={TelaSeguidores}
          />
        </navStack.Navigator>
      </UsersappProvider>
    </NavigationContainer>
  )
}