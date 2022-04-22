/* eslint-disable prettier/prettier */
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import MediaVideo from '../../commponent/video';
import MediaPdf from '../../commponent/pdf';

const index = ({navigation}) => {
  return (
    <View style={styles.containHead}>
      <TouchableOpacity
        style={styles.containButton}
        onPress={() => navigation.navigate('Home')}>
        <Text style={styles.text}>Back</Text>
      </TouchableOpacity>
      <View>
        <MediaVideo />
      </View>
      <View>
        <MediaPdf />
      </View>
    </View>
  );
};

export default index;

const styles = StyleSheet.create({
  containHead: {
    flex: 1,
    backgroundColor: 'white',
  },
  text: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  containButton: {
    width: 100,
    height: 30,
    backgroundColor: 'blue',
    borderRadius: 12,
    top: 10,
    left: 8,
  },
});
