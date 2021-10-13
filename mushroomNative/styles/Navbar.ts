import {StyleSheet} from "react-native";

export const navbarStyle = StyleSheet.create({
    container: {
        width: '100%',
        height: 60,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        backgroundColor: '#3b3b3b',
    },
    item: {
        padding: 12,
        borderRadius: 50,
    }
})