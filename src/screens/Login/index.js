import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {moderateScale} from 'react-native-size-matters';
import {Input} from '@rneui/base';
import {useDispatch, useSelector} from 'react-redux';
import axios from 'axios';
import {BaseUrl} from '../../helpers/Api';
import {SetLoginEmail, SetLoginPassword, SetToken} from './redux/action';
import {SetLoad} from '../store/actionLoad';

const login = ({navigation}) => {
  const dispatch = useDispatch();
  const {email, password} = useSelector(state => state.login);

  const data = {
    email: email,
    password: password,
  };

  const postLogin = async () => {
    try {
      const res = await axios.post(`${BaseUrl}/auth/login`, data);
      SetLoad(true);
      const getToken = () => {
        dispatch(SetToken(res.data.tokens.access.token));
      };
      if (res.status === 200 || res.status === 201) getToken();
      navigation.navigate('Home');
    } catch (error) {
      console.log(error);
    } finally {
      SetLoad(false);
    }
  };

  return (
    <View>
      <Image
        style={styles.image}
        source={require('../../Assets/Image/logo.png')}
      />

      <Input
        placeholder="email"
        onChangeText={value => dispatch(SetLoginEmail(value))}
      />
      <Input
        placeholder="password"
        onChangeText={value => dispatch(SetLoginPassword(value))}
        secureTextEntry={true}
      />

      <View style={styles.box}>
        <TouchableOpacity style={styles.button} onPress={postLogin}>
          <Text style={styles.text1}>Login</Text>
        </TouchableOpacity>
      </View>

      <View>
        <Text style={styles.textlagi}>Dont have an Account?</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Register')}>
          <Text style={styles.text2}>Register</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default login;

const styles = StyleSheet.create({
  text1: {
    fontSize: moderateScale(20),
    fontWeight: '600',
    color: 'white',
  },
  textlagi: {
    marginTop: moderateScale(20),
    fontSize: moderateScale(20),
    fontWeight: '400',
    textAlign: 'center',
  },
  text2: {
    fontSize: moderateScale(20),
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'black',
  },
  box: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  image: {
    width: moderateScale(300),
    height: moderateScale(250),
    marginTop: moderateScale(35),
    marginBottom: moderateScale(20),
    marginHorizontal: moderateScale(40),
  },
  button: {
    marginTop: moderateScale(40),
    backgroundColor: '#4D97FF',
    width: moderateScale(300),
    height: moderateScale(45),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: moderateScale(8),
  },
});
