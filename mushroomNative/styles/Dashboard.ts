import {StyleSheet} from "react-native";

export const dashboardStyle = StyleSheet.create({
    container: {
        flex: 1,
    },
    list: {
      width: '100%',
      alignItems: 'center',
      padding: 5
    },
    item: {
        width: '90%',
        borderRadius: 10,
        padding: 10
    },
    itemTitle: {
        fontSize: 15
    }
})