import {StyleSheet} from 'react-native';

const style = StyleSheet.create({
  card_container: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  card: {
    width: '60%',
    borderRadius: 5,
    borderWidth: 2,
    borderColor: '#939393',
    padding: 10,
    backgroundColor: '#FFF',
  },
  card_title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  card_content: {
    marginTop: 10,
  },
});

export default style;
