import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

const ProgressBar = (props) => {
  const { percentage, numGame } = props;
  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <View style={[styles.filter, { width: `${percentage}%`, backgroundColor: [props.color] }]}/>
      </View>
      <View>
        <Text style={styles.percentage}>{percentage}% ({numGame} games)</Text>
      </View>
    </View>
    
  );
};


ProgressBar.defaultProps = {
  percentage: '100'
}

export default ProgressBar;
