import React, { useState, useEffect } from 'react';
import { SafeAreaView, StyleSheet, Image } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import logo from '../../assets/logo.png';
import SpotList from '../../components/SpotList/index';

const List = () => {
  const [techs, setTechs] = useState([]);
  
  useEffect(() => {
    async function getTechs() {
      const techs = await AsyncStorage.getItem('techs');
      debugger;
      const techsArray = techs.split(',').map(t => t.trim());
      setTechs(techsArray);
    }

    getTechs();
  }, [])

  return (
    <SafeAreaView style={styles.container}>
      <Image source={logo} style={styles.logo}/>
      {techs.map(tech => <SpotList key={tech} tech={tech}/>)}
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
