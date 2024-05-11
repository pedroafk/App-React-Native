import React, { useState } from 'react';
import { View, Image, Button, ImageBackground, StyleSheet, Modal, Text, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function Tela2(props) {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [imageDescription, setImageDescription] = useState('');

  const images = [
    { source: require("./assets/image1.jpg"), description: "Conexão com a natureza 🍃" },
    { source: require("./assets/image2.jpg"), description: "Calangodum 🦎" },
    { source: require("./assets/image3.jpg"), description: "Com saudades da piscina já 🏊🏻‍♂️🏖" },
    { source: require("./assets/image4.jpg"), description: "Sinuca e Rock 🎱🤘🏻" },
    { source: require("./assets/image5.jpg"), description: "Piscina com os Amigos 🏊🏻‍♂️" },
    { source: require("./assets/image6.jpg"), description: "Caipira sem ser vulgar ✌" }
  ];

  const openModal = (image, description) => {
    setSelectedImage(image);
    setImageDescription(description);
    setModalVisible(true);
  };

  return (
    <ImageBackground 
      style={styles.backgroundImage} 
      source={require("./assets/bg.jpg")}
    >
      <View style={styles.container}>
        <View style={styles.row}>
          <View style={styles.column}>
            {images.slice(0, 2).map((image, index) => (
              <TouchableOpacity
                key={index}
                onPress={() => openModal(image.source, image.description)}
              >
                <Image style={styles.image} source={image.source} />
              </TouchableOpacity>
            ))}
          </View>
          <View style={styles.column}>
            {images.slice(2, 4).map((image, index) => (
              <TouchableOpacity
                key={index}
                onPress={() => openModal(image.source, image.description)}
              >
                <Image style={styles.image} source={image.source} />
              </TouchableOpacity>
            ))}
          </View>
          <View style={styles.column}>
            {images.slice(4, 6).map((image, index) => (
              <TouchableOpacity
                key={index}
                onPress={() => openModal(image.source, image.description)}
              >
                <Image style={styles.image} source={image.source} />
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </View>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(false);
        }}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Image style={styles.modalImage} source={selectedImage} />
            <Text style={styles.modalDescription}>
              <Icon name="camera-retro" size={16} color="#000000" /> {imageDescription}
            </Text>
            <Button title="Fechar" onPress={() => setModalVisible(false)} />
          </View>
        </View>
      </Modal>
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
  column: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-between",
  },
  image: {
    width: '100%',
    height: 150,
    resizeMode: "cover",
    marginBottom: 10,
    borderRadius: 10,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  //Borda do Modal da imagem
  modalContent: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
  },
  modalImage: {
    width: 300,
    height: 300,
    resizeMode: 'cover',
    marginBottom: 10,
    borderRadius: 10,
  },
  modalDescription: {
    flexDirection: 'row',
    alignItems: 'center',
    color: '#000000',
    fontSize: 14,
    marginTop: 5,
  },
});
