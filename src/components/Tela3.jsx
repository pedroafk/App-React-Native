import { View, Image, Button, ImageBackground, StyleSheet } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Tela3(props) {
  return (
    <ImageBackground 
      style={styles.backgroundImage} 
      source={require("./assets/bg.jpg")}
    >
      <View style={styles.container}>
        <View style={styles.row}>
          <Image style={styles.image} source={require("./assets/image1.jpg")} />
          <Image style={styles.image} source={require("./assets/image2.jpg")} />
          <Image style={styles.image} source={require("./assets/image3.jpg")} />
        </View>
        <View style={styles.row}>
          <Image style={styles.image} source={require("./assets/image4.jpg")} />
          <Image style={styles.image} source={require("./assets/image5.jpg")} />
          <Image style={styles.image} source={require("./assets/image6.jpg")} />
        </View>
        <Button title="Voltar Para Fotos" onPress={() => {props.navigation.navigate("Fotos")}}/>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  },
  container: {
    flex: 1,
    justifyContent: "center",
    marginHorizontal: 18,
    marginTop: 50,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  image: {
    width: '30%',
    height: 150,
    resizeMode: "cover",
    borderRadius: 10,
  },
});
