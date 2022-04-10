import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {moderateScale} from 'react-native-size-matters';

const RegistSukses = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text1}>Registration Completed!</Text>
      <Image
        source={require('../../Assets/Image/check-circle.png')}
        style={styles.image}
      />
      <Text style={styles.text2}>We Sent Email Verification to Your Email</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Login')}>
        <Text
          style={{
            fontSize: moderateScale(25),
            color: 'black',
            fontWeight: '400',
          }}>
          Back To Login
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default RegistSukses;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text1: {
    fontSize: moderateScale(27),
    fontWeight: 'bold',
    color: 'black',
    marginTop: moderateScale(-50),
    marginBottom: moderateScale(70),
  },
  text2: {
    fontSize: moderateScale(27),
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: moderateScale(70),
  },
  image: {
    alignItems: 'center',
  },
  button: {
    top: moderateScale(120),
    backgroundColor: '#4D97FF',
    width: moderateScale(250),
    height: moderateScale(55),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: moderateScale(8),
  },
});
