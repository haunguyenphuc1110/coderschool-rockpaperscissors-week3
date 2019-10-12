import { StyleSheet } from 'react-native';
import COLORS from '../../constants/Colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: 20
  },
  title: {
    fontSize: 30,
    fontWeight: '500'
  },
  description: {
    fontSize: 20,
    fontWeight: '400'
  },
  btnReset: {
    justifyContent: 'center', 
    alignItems: 'center', 
    marginTop: 20, 
    height: 40, 
    width: 80, 
    backgroundColor: COLORS.HISTORY_BTN, 
    borderRadius: 20
  }
});
export default styles;