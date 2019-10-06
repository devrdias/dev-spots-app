import React from 'react';
import { View, Text, SafeAreaView } from 'react-native';

const Book = ({ navigation }) => {
  const id = navigation.getParam('id');

  return (
    <SafeAreaView>
      <Text>{id}</Text>
    </SafeAreaView>
  )
};

export default Book;
