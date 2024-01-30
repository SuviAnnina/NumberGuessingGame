import { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button, Alert } from 'react-native';

export default function App() {

  const [number, setNumber] = useState(0);
  const [text, setText] = useState('');
  const [guessedNumber, setGuessedNumber] = useState('');
  const [guessAmount, setGuessAmount] = useState(0);

  useEffect(() => {
    startGame();
  }, []);

  const startGame = () => {
    setText('Guess a number between 1-100');
    randomNumber();
    setGuessAmount(0);
  }

  const randomNumber = () => {
    setNumber(Math.floor(Math.random() * 100) + 1);
  }

  const alertUser = () => {
    Alert.alert('You guessed the correct number in ' + (guessAmount + 1) + ' guesses')
  }

  const handleGuess = () => {
    if (guessedNumber == number) {
      alertUser();
      startGame();
    }
    else if (guessedNumber > number) {
      setText("Your guess " + guessedNumber + " is too high");
      setGuessAmount(guessAmount + 1);
    }
    else {
      setText("Your guess " + guessedNumber + " is too low");
      setGuessAmount(guessAmount + 1);
    }
    setGuessedNumber('');
  }

  // console.log(guessedNumber);
  // console.log(number);
  // console.log(guessAmount);

  return (
    <View style={styles.container}>
      <Text>{text}</Text>

      <TextInput
        style={{ width: 200, borderColor: 'black', borderWidth: 1 }}
        onChangeText={guessedNumber => setGuessedNumber(guessedNumber)}
        value={guessedNumber}
        keyboardType='numeric'
      />

      <Button
        title="Guess!"
        onPress={handleGuess}
      />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
