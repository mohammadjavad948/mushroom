import {StyleSheet} from 'react-native';

export const dashboardStyle = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 10,
  },
  list: {
    width: '100%',
    alignItems: 'center',
    padding: 5,
  },
  item: {
    width: '95%',
    borderRadius: 10,
    padding: 15,
  },
  itemTitle: {
    fontSize: 15,
  },
  daysLeft: {
    fontSize: 10,
    opacity: 0.6,
  },
});
