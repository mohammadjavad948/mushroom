import {StyleSheet} from 'react-native';

export const profileStyle = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: '300',
    marginBottom: 20,
  },
  view: {
    padding: 15,
    width: '100%',
  },
  infoContainer: {
    flexDirection: 'row',
  },
  actions: {
    alignItems: 'flex-start',
  },
  image: {
    width: 80,
    height: 80,
  },
  username: {
    fontSize: 16,
    marginTop: 10,
    marginLeft: 10,
  },
  date: {
    fontSize: 10,
    opacity: 0.8,
    marginLeft: 10,
  },
  logout: {
    backgroundColor: 'red',
    marginLeft: 10,
    marginTop: 10,
  },
  themes: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    marginTop: 20,
  },
  theme: {
    padding: 10,
    width: '95%',
    borderRadius: 8,
    borderColor: 'white',
    borderStyle: 'solid',
    borderWidth: 1,
    marginTop: 10,
  },
});
