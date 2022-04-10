import {Alert, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {BaseUrl} from '../../helpers/Api';
import {Input} from '@rneui/base';
import axios from 'axios';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {SetRegistEmail, SetRegistName, SetRegistPassword} from './redux/action';
import {moderateScale} from 'react-native-size-matters';

const Register = ({navigation}) => {
  const {email, password, name} = useSelector(state => state.Register);
  const dispatch = useDispatch();
  const data = {
    email: email,
    password: password,
    name: name,
  };

  const postRegister = async () => {
    try {
      const res = await axios.post(`${BaseUrl}/auth/register`, data);

      Alert.alert('Alert', 'Registration Success', [
        {
          text: 'OK',
          onPress: () => navigation.navigate('RegisterSukses'),
        },
      ]);
    } catch (error) {
      Alert.alert('Alert', error);
    }
  };

  return (
    <View style={{marginTop: moderateScale(150)}}>
      <Input
        placeholder="email"
        onChangeText={value => dispatch(SetRegistEmail(value))}
        value={email}
      />
      <Input
        placeholder="password"
        onChangeText={value => dispatch(SetRegistPassword(value))}
        value={password}
        secureTextEntry={true}
      />
      <Input
        placeholder="name"
        onChangeText={value => dispatch(SetRegistName(value))}
        value={name}
      />

      <View style={styles.box}>
        <TouchableOpacity style={styles.button} onPress={postRegister}>
          <Text style={styles.text1}>Register</Text>
        </TouchableOpacity>
      </View>

      <View>
        <Text style={styles.textlagi}>Already have an Account?</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text style={styles.text2}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Register;

const styles = StyleSheet.create({
  text1: {
    fontSize: moderateScale(20),
    fontWeight: '400',
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
