import React, { useState } from 'react';
import { View, Image, Button, ImageBackground, StyleSheet, Modal, Text, TouchableOpacity } from 'react-native';
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
          {images.map((image, index) => (
            <TouchableOpacity
              key={index}
              style={styles.imageWrapper}
              onPress={() => openModal(image.source, image.description)}
            >
              <Image style={styles.image} source={image.source} />
            </TouchableOpacity>
          ))}
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
    padding: 20,
  },
  row: {
    flexDirection: "row",
    flexWrap: 'wrap',
    justifyContent: "space-between",
  },
  imageWrapper: {
    flexBasis: '48%', // Adjust the percentage to change the number of columns
    marginBottom: 20,
  },
  image: {
    width: '100%',
    height: 150,
    resizeMode: "cover",
    borderRadius: 10,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
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
