import React from 'react';
import { View, Text, Animated } from 'react-native';
import ProgressBar from '../../components/ProgressBar/ProgressBar';
import COLORS from '../../constants/Colors';
import styles from './styles';
import { TouchableOpacity } from 'react-native-gesture-handler';

class HistoryScreen extends React.Component {

  calculatePercentage = (numWin, numTie, numLose, numGame) => {
    const percentWin = (numWin !== 0) ? ((numWin/numGame)*100).toFixed(2) : 0;
    const percentTie = (numTie !== 0) ? ((numTie/numGame)*100).toFixed(2) : 0;
    const percentLose = (numLose !== 0) ? (100 - percentWin - percentTie).toFixed(2) : 0;
    return {
      percentWin,
      percentTie,
      percentLose
    };
  }

  render() {
    const result = this.props.navigation.getParam('result', 'NO-VALUE');
    const onReset = this.props.navigation.getParam('onReset', 'NO-VALUE');
    const { 
      numWinGame,
      numTieGame,
      numLoseGame,
      numTotalGame
    } = result;
    const {
      percentWin,
      percentTie,
      percentLose
    } = this.calculatePercentage(numWinGame, numTieGame, numLoseGame, numTotalGame);
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Tracking your history</Text>
        <Text style={styles.description}>Total games: {numTotalGame}</Text>
        <ProgressBar 
          percentage={percentWin} 
          color={COLORS.WIN}
          numGame={numWinGame}
        />
        <ProgressBar 
          percentage={percentTie} 
          color={COLORS.DRAW}
          numGame={numTieGame}
        />
        <ProgressBar 
          percentage={percentLose} 
          color={COLORS.LOSE}
          numGame={numLoseGame}
        />
        <TouchableOpacity 
          style={styles.btnReset}
          onPress={onReset}>
          <Text style={{color: 'white'}}>Reset</Text>
        </TouchableOpacity>
      </View>
    );
  };
}

HistoryScreen.navigationOptions = {
  title: 'History',
  headerStyle: {
    backgroundColor: COLORS.HEADER
  },
};
export default HistoryScreen;