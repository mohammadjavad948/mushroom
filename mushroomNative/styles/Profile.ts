import {StyleSheet} from "react-native";

export const profileStyle = StyleSheet.create({
    container: {
        flex: 1
    },
    title: {
      fontSize: 18,
      fontWeight: "300",
      marginBottom: 20
    },
    view: {
        padding: 15,
        width: '100%'
    },
    infoContainer: {
        flexDirection: "row",
    },
    image: {
      width: 80,
      height: 80,
    },
    username: {
        fontSize: 15,
        marginLeft: 10
    },
})