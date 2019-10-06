import React, { useState } from 'react';
import { TextInput, Text, SafeAreaView, StyleSheet, AsyncStorage } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

const Book = ({ navigation }) => {
  const [date, setDate] = useState('');
  const id = navigation.getParam('id');

  return (
    <SafeAreaView>
      <Text style={styles.label}>DATA DE INTERESSE *</Text>
        <TextInput
          style={styles.input}
          placeHolder="Qual data você quer reservar?"
          placeHolderTextColor="#999"
          autoCapitalize="words"
          autoCorrect={false}
          value={email}
          onChangeText={setEmail}
        />
    </SafeAreaView>
  )
};



const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  form: {
    alignSelf: 'stretch',
    paddingHorizontal: 30,
    marginTop: 30,
  },
  label: {
    fontWeight: 'bold',
    color: '#444',
    marginBottom: 8, 
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    paddingHorizontal: 20,
    fontSize: 16,
    color: '#444',
    height: 44,
    marginBottom: 20,
    borderRadius: 2
  },
  button: {
    height: 42,
    backgroundColor: '#f05a5b',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 2,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16
  }
});

export default Book;
