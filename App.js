import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function App() {
  const [bgColor, setBgColor] = useState('blue');  // Estado inicial para a cor de fundo

  const handlePress = () => {
    setBgColor(bgColor === 'blue' ? 'black' : 'blue');  // Alterna entre azul e preto
  };

  return (
    <View style={[styles.container, { backgroundColor: bgColor }]}>
      <Text style={styles.text}>Página Home</Text>
      <TouchableOpacity style={styles.button} onPress={handlePress}>
        <Text style={styles.buttonText}>Mudar Cor da Tela</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'white',
    fontSize: 24,
    marginBottom: 20,
  },
  button: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderWidth: 2,            // Espessura da borda
    borderColor: 'white',      // Cor da borda
    borderRadius: 20,          // Raio da borda
    alignItems: 'center',
    backgroundColor: 'gray',
  },
  buttonText: {
    color: 'white',            // Cor do texto no botão
    fontSize: 16,
  },
});

