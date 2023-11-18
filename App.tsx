import React from 'react';
import { Text, View } from 'react-native';
import { styles } from './styles';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.nomeEvento}>Nome do evento</Text>
      <Text>18 de novembro de 2023</Text>
    </View>
  );
}

