import React, { useState } from 'react';
import {
  Text,
  View,
  TouchableOpacity
} from 'react-native';
import screenIds from '../../navigation/screenIds';
import Button from '../../components/Button/Button';
import ChoiceCard from '../../components/ChoiceCard/ChoiceCard';
import CHOICES from '../../mocks/data';
import styles from './styles';

const PlayScreen = (props) => {

  const [gameResult, setGameResult] = useState('Choose your weapon!');
  const [userChoice, setUserChoice] = useState({});
  const [computerChoice, setComputerChoice] = useState({});

  const [numWinGame, setNumWinGame] = useState(0);
  const [numTieGame, setNumTieGame] = useState(0);
  const [numLoseGame, setNumLoseGame] = useState(0);
  const [numTotalGame, setNumTotalGame] = useState(0);

  const getResultColor = () => {
    if (gameResult === 'Victory!') return 'green';
    if (gameResult === 'Defeat!') return 'red';
    return 'black';
  };

  const randomComputerChoice = () => CHOICES[Math.floor(Math.random() * CHOICES.length)];

  const getRoundOutcome = userChoice => {
    const computerChoice = randomComputerChoice().name;
    let result;
  
    if (userChoice === computerChoice) {
      setNumTieGame(numTieGame + 1)
      result = 'Tie game!';
    } else {
      if (userChoice === 'rock') {
        result = (computerChoice === 'scissors') ? 'Victory!' : 'Defeat!';
      }
      if (userChoice === 'paper') {
        result = (computerChoice === 'rock') ? 'Victory!' : 'Defeat!';
      }
      if (userChoice === 'scissors') {
        result = (computerChoice === 'paper') ? 'Victory!' : 'Defeat!';
      }
      (result === 'Victory!') ? setNumWinGame(numWinGame + 1) : setNumLoseGame(numLoseGame + 1);
    }

    return [result, computerChoice];
  };

  const onPress = playerChoice => {
    setNumTotalGame(numTotalGame + 1);
    const [result, compChoice] = getRoundOutcome(playerChoice);
  
    const newUserChoice = CHOICES.find(choice => choice.name === playerChoice);
    const newComputerChoice = CHOICES.find(choice => choice.name === compChoice);

    setGameResult(result);
    setUserChoice(newUserChoice);
    setComputerChoice(newComputerChoice);
  };

  const onReset = () => {
    setGameResult('Choose your weapon!');
    setUserChoice({});
    setComputerChoice({});

    setNumWinGame(0);
    setNumTieGame(0);
    setNumLoseGame(0);
    setNumTotalGame(0);
    props.navigation.popToTop();
  }

  const onNavigateToHistory = () => {
    props.navigation.navigate(screenIds.HISTORY, {
      result : {
        numWinGame,
        numTieGame,
        numLoseGame,
        numTotalGame
      },
      onReset: () => onReset()
    });
  }

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 35, color: getResultColor() }}>{gameResult}</Text>
      <View style={styles.choicesContainer}>
        <ChoiceCard player="Player" player="Player" choice={userChoice} />
        <Text style={styles.textVs}>vs</Text>
        <ChoiceCard player="Computer" choice={computerChoice} />
      </View>
      { CHOICES.map(choice => {
          return <Button key={choice.name} name={choice.name} onPress={onPress} />;
        })
      }
      <View style={styles.historyWrapper}>
        <Text style={styles.textDiscription}>View Your Game History ==></Text>
        <TouchableOpacity style={styles.historyBtn} onPress={onNavigateToHistory}>
          <Text style={styles.history}>Here</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

PlayScreen.navigationOptions = {
  header: null
};

export default PlayScreen;