import { StyleSheet, Dimensions } from 'react-native';
const width = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 10
  },
  wrapper: {
    flex: 1,
    width: width - 160,
    height: 40,
    borderWidth: 2,
    borderRadius: 20,
    marginVertical: 20,
    marginRight: 10,
    overflow: 'hidden'
  },
  filter: {
    width: '0%',
    height: '100%',
    borderRadius: 20,
  },
  percentage: {
    color: 'black'
  }
});
export default styles;