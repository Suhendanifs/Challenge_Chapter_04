/* eslint-disable prettier/prettier */
import {StyleSheet, View} from 'react-native';
import React from 'react';

import VideoPlayer from 'react-native-video-player';

const MediaVideo = () => {
  return (
    <View style={styles.container}>
      <VideoPlayer
        video={{
          uri: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4',
        }}
        videoWidth={600}
        videoHeight={400}
        thumbnail={{
          uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/English_Cocker_Spaniel_4.jpg/800px-English_Cocker_Spaniel_4.jpg',
        }}
      />
    </View>
  );
};

export default MediaVideo;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    top: 20,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,

    elevation: 6,
  },
  video: {
    width: 300,
    height: 248,
  },
});
