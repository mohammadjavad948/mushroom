import {StyleSheet} from 'react-native';

export const navbarStyle = StyleSheet.create({
  container: {
    width: '100%',
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  item: {
    borderRadius: 50,
  },
  touch: {
    padding: 12,
  },
});
