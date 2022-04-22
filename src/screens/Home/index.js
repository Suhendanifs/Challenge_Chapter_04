/* eslint-disable prettier/prettier */
import {
  Text,
  View,
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

import axios from 'axios';
import React, {useEffect} from 'react';
import {BaseUrl} from '../../helpers/Api';
import {useDispatch, useSelector} from 'react-redux';
import {SetBuku} from './redux/action';
import {ms} from 'react-native-size-matters';

const Home = ({navigation}) => {
  const {buku} = useSelector(state => state.Home);
  const dispatch = useDispatch();
  const {token} = useSelector(state => state.login);

  useEffect(() => {
    getBuku();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getBuku = async () => {
    try {
      const res = await axios.get(`${BaseUrl}/books`, {
        headers: {Authorization: `Bearer ${token}`},
      });
      dispatch(SetBuku(res.data.results));
    } catch (error) {
      console.log('Error');
    }
  };

  const tampilbukuAtas = ({item}) => {
    return (
      <View>
        <TouchableOpacity>
          <Image
            style={styles.image}
            source={{uri: `${item.cover_image}`}}
            resizeMode="contain"
          />
        </TouchableOpacity>
      </View>
    );
  };

  const tampilbukuBawah = ({item}) => {
    return (
      <View style={{flex: 1}}>
        <TouchableOpacity>
          <Image
            style={styles.imageColumn}
            source={{uri: `${item.cover_image}`}}
            resizeMode="contain"
          />
        </TouchableOpacity>

        <View style={styles.head}>
          <Text style={styles.judul}>Title :</Text>
          <Text style={styles.judul}>{item.title}</Text>
        </View>
      </View>
    );
  };

  return (
    <View style={{backgroundColor: 'white', flex: 1}}>
      <Text style={styles.text}>Good Morning, Dani!</Text>
      <Text style={styles.text}>Recommended</Text>
      <View>
        <FlatList
          data={buku}
          keyExtractor={item => item.id}
          renderItem={tampilbukuAtas}
          horizontal={true}
        />
      </View>
      <Text style={styles.text}>Poppular Books</Text>

      <FlatList
        data={buku}
        keyExtractor={item => item.id}
        renderItem={tampilbukuBawah}
        numColumns={3}
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  judul: {
    fontSize: ms(14),
    fontWeight: 'bold',
    color: 'white',
  },
  head: {
    width: ms(120),
    height: ms(86),
    borderRadius: ms(20),
    backgroundColor: '#454647',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: ms(-20),
    marginLeft: ms(2),
    marginBottom: ms(5),
  },
  text: {
    fontSize: ms(20),
    fontWeight: 'bold',
    color: 'black',
  },

  image: {
    width: ms(180),
    height: ms(200),
    marginTop: ms(10),
    marginLeft: ms(-20),
  },
  imageColumn: {
    justifyContent: 'space-around',
    width: ms(115),
    height: ms(200),
    marginTop: ms(-10),
    marginHorizontal: ms(5),
  },
});
