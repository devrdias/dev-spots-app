import React, { useState, useEffect } from 'react';
import { View , StyleSheet, Text, FlatList, Image, TouchableOpacity } from 'react-native';
import api from '../../services/api';
import { withNavigation } from 'react-navigation';

const SpotList = ({ tech, navigation }) => {
  const [spots , setStpots] = useState([]);

  useEffect(() => { 
    async function loadSpots() {
      const response = await api.get('/spots', {
        params: { tech }
      })
      setStpots(response.data);
    }

    loadSpots();
  }, []);

  function handleOnPress() {
    navigation.navigate('Book');
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Empresas que usam <Text style={styles.bold}>{tech}</Text></Text>
      <FlatList 
        style={styles.list}
        data={spots}
        keyExtractor={item => item._id}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <View style={styles.listItem}>
            <Image style={styles.thumbnail} source={{ uri: item.thumbnail_url }}/>
            <Text style={styles.company}>{item.company}</Text>
            <Text style={styles.price}>{item.price ? `R$ ${item.price}/dia`: 'GRATUITO'}</Text>
            <TouchableOpacity style={styles.button} onPress={handleOnPress}>
              <Text style={styles.buttonText}>Solicitar Reserva</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    marginTop: 30
  },
  title: {
    fontSize: 20,
    color: '#444',
    paddingHorizontal: 20,
    marginBottom: 15,
  },
  bold: {
    fontWeight: 'bold'
  },
  list: {
    paddingHorizontal: 20
  },
  listItem: {
    marginRight: 15
  },
  thumbnail: {
    width: 200,
    height: 120,
    resizeMode: 'cover',
    borderRadius: 2
  },
  company: {
    fontSize: 24,
    color: '#333',
    fontWeight: 'bold',
    marginTop: 10,
  },
  price: {
    fontSize: 15,
    color: '#999',
    marginTop: 5,
  },
  button: {
    height: 32,
    backgroundColor: '#f05a5b',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 2,
    marginTop: 15
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 15
  }
})

export default withNavigation(SpotList);
