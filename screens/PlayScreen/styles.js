import { StyleSheet, Dimensions,  } from 'react-native';
import COLORS from '../../constants/Colors'; 
const { width } = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#e9ebee'
  },
  historyWrapper: {
    marginTop: 20,
    paddingHorizontal: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: width
  },
  textDiscription: {
    fontSize: 18,
    fontWeight: '400',
    color: COLORS.BLUE
  },
  historyBtn: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.HISTORY_BTN,
    width: 80,
    height: 30,
    borderRadius: 20,
    marginLeft: 20
  },
  history: {
    fontWeight: '500',
    color: COLORS.WHITE
  },  
  textVs: {
    fontSize: 20
  },
  choicesContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    margin: 10,
    borderWidth: 2,
    paddingVertical: 10,
    borderRadius: 10,
    borderColor: COLORS.GREY,
    backgroundColor: COLORS.WHITE,
    elevation: 10
  }
});
export default styles;