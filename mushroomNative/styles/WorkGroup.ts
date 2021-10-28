import {StyleSheet} from 'react-native';

export const workGroupStyle = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    width: '90%',
    padding: 20,
    borderRadius: 10,
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  icons: {
    marginTop: 20,
    width: '100%',
    justifyContent: 'space-evenly',
    flexDirection: 'row',
  },
});
