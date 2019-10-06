import React, { useState, useEffect } from 'react';
import { Alert, SafeAreaView, StyleSheet, Image, ScrollView } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import logo from '../../assets/logo.png';
import SpotList from '../../components/SpotList/index';
import socketio from 'socket.io-client';

const List = () => {
  const [techs, setTechs] = useState([]);

  useEffect(() => {
    AsyncStorage.getItem('user').then( user_id => {
      const socket = socketio('htttp://localhost:3333', {
        query: { user_id }
      });

      socket.on('booking_response', booking => {
        Alert.alert(`Sua reserva em ${booking.stop.company} em ${booking.date} foi ${booking.approved ? 'APROVADA': 'REJEITADA'}`} `)
      })
    })
  }, [])
  
  useEffect(() => {
    AsyncStorage.getItem('techs').then(storedTechs => {
      const techsArray = storedTechs.split(',').map(t => t.trim());
      setTechs(techsArray);
    });
  }, [])

  return (
    <SafeAreaView style={styles.container}>
      <Image source={logo} style={styles.logo}/>
      <ScrollView>
        {techs.map(tech => <SpotList key={tech} tech={tech}/>)}
      </ScrollView>
    </SafeAreaView>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  logo: {
    height: 32,
    resizeMode: 'contain',
    alignSelf: 'center',
    marginTop: 10
  }
})

export default List;
