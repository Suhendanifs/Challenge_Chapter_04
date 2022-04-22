/* eslint-disable prettier/prettier */
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';

import Pdf from 'react-native-pdf';
import DocumentPicker from 'react-native-document-picker';

const MediaPdf = () => {
  const [sto, setSto] = useState('');

  const openStorage = async () => {
    try {
      const res = await DocumentPicker.pick({
        presentationStyle: 'fullScreen',
      });
      setSto([res[sto]]);
    } catch (error) {
      console.log('error');
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={openStorage}>
        <Text style={styles.textButton}>Pick From Storage</Text>
      </TouchableOpacity>

      <Pdf
        source={{
          uri: 'http://samples.leanpub.com/thereactnativebook-sample.pdf',
        }}
        style={styles.styPdf}
      />
    </View>
  );
};

export default MediaPdf;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    top: 450,
  },

  button: {
    width: 100,
    height: 50,
    justifyContent: 'center',
    backgroundColor: 'blue',
    borderRadius: 12,
    bottom: 10,
  },
  textButton: {
    textAlign: 'center',
    color: 'white',
  },
  styPdf: {
    width: 400,
    height: 400,
    borderColor: 'black',
    borderWidth: 1,
  },
});
