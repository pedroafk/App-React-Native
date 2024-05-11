import { View, Text, Button, ImageBackground, StyleSheet, Image } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Tela1(props) {
  return (
    <ImageBackground 
      style={styles.backgroundImage} 
      source={require("./assets/bg.jpg")}>

      <View style={styles.container}>
        <Image source={require('./assets/avatar.jpg')} style={styles.avatar} />
        <Text style={styles.username}>Pedro Figueiredo</Text>
        <Text style={styles.description}>Estudante de Engenharia da Computação</Text>
        <Button title="Ver Fotos" onPress={() => {props.navigation.navigate("Fotos")}}/>
      </View>

    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20
  },
  avatar: {
    width: 150,
    height: 150,
    borderRadius: 80,
    marginBottom: 20
  },
  username: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10
  },
  description: {
    fontSize: 16,
    marginBottom: 20
  }
});