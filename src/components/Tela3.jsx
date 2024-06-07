import React, { useState } from 'react';
import { View, Button, ImageBackground, StyleSheet, Modal, Text, TouchableOpacity } from 'react-native';
import Video from 'react-native-video';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function Tela3(props) {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [videoDescription, setVideoDescription] = useState('');

  const videos = [
    { source: require("./assets/video1.mp4"), description: "Praia" },
    { source: require("./assets/video2.mp4"), description: "Litoral" },
    { source: require("./assets/video3.mp4"), description: "Cidade" },
    { source: require("./assets/video4.mp4"), description: "Surf" },
    { source: require("./assets/video5.mp4"), description: "Céu" },
    { source: require("./assets/video6.mp4"), description: "Rio" },
  ];

  const openModal = (video, description) => {
    setSelectedVideo(video);
    setVideoDescription(description);
    setModalVisible(true);
  };

  return (
    <ImageBackground 
      style={styles.backgroundImage} 
      source={require("./assets/bg.jpg")}
    >
      <View style={styles.container}>
        <View style={styles.row}>
          {videos.map((video, index) => (
            <TouchableOpacity
              key={index}
              style={styles.videoWrapper}
              onPress={() => openModal(video.source, video.description)}
            >
              <View style={styles.videoThumbnail}>
                <Video
                  source={video.source}
                  style={styles.thumbnail}
                  paused={true}
                />
                <Text style={styles.videoDescription}>{video.description}</Text>
              </View>
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
            <Video
              source={selectedVideo}
              style={styles.modalVideo}
              controls={true}
              resizeMode="cover"
            />
            <Text style={styles.modalDescription}>
              <Icon name="video-camera" size={16} color="#000000" /> {videoDescription}
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
  videoWrapper: {
    flexBasis: '48%',
    marginBottom: 20,
  },
  videoThumbnail: {
    position: 'relative',
    width: '100%',
    height: 150,
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  thumbnail: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
  },
  videoDescription: {
    position: 'absolute',
    bottom: 10,
    left: 10,
    color: '#fff',
    fontSize: 14,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: 5,
    borderRadius: 5,
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
  modalVideo: {
    width: 300,
    height: 300,
    borderRadius: 10,
    marginBottom: 10,
  },
  modalDescription: {
    flexDirection: 'row',
    alignItems: 'center',
    color: '#000000',
    fontSize: 14,
    marginTop: 5,
  },
});
