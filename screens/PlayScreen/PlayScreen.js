import React, { useState } from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import Button from '../../components/Button/Button';
import ChoiceCard from '../../components/ChoiceCard/ChoiceCard';
import CHOICES from '../../mocks/data';
import styles from './styles';

const PlayScreen = () => {

  const [gamePrompt, setGamePrompt] = useState('Choose your weapon!');
  const [userChoice, setUserChoice] = useState({});
  const [computerChoice, setComputerChoice] = useState({});

  const getResultColor = () => {
    if (gamePrompt === 'Victory!') return 'green';
    if (gamePrompt === 'Defeat!') return 'red';
    return null;
  };

  const randomComputerChoice = () => CHOICES[Math.floor(Math.random() * CHOICES.length)];

  const getRoundOutcome = userChoice => {
    const computerChoice = randomComputerChoice().name;
    let result;
  
    if (userChoice === 'rock') {
      result = computerChoice === 'scissors' ? 'Victory!' : 'Defeat!';
    }
    if (userChoice === 'paper') {
      result = computerChoice === 'rock' ? 'Victory!' : 'Defeat!';
    }
    if (userChoice === 'scissors') {
      result = computerChoice === 'paper' ? 'Victory!' : 'Defeat!';
    }
  
    if (userChoice === computerChoice) result = 'Tie game!';
    return [result, computerChoice];
  };

  const onPress = playerChoice => {
    const [result, compChoice] = getRoundOutcome(playerChoice);
  
    const newUserChoice = CHOICES.find(choice => choice.name === playerChoice);
    const newComputerChoice = CHOICES.find(choice => choice.name === compChoice);
  
    setGamePrompt(result);
    setUserChoice(newUserChoice);
    setComputerChoice(newComputerChoice);
  };

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 35, color: getResultColor() }}>{gamePrompt}</Text>
      <View style={styles.choicesContainer}>
        <ChoiceCard player="Player" player="Player" choice={userChoice} />
        <Text style={{}}>vs</Text>
        <ChoiceCard player="Computer" choice={computerChoice} />
      </View>
      { CHOICES.map(choice => {
          return <Button key={choice.name} name={choice.name} onPress={onPress} />;
        })
      }
    </View>
  );
};

export default PlayScreen;