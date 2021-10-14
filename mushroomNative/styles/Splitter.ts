import {StyleSheet} from "react-native";

export const splitterStyle = StyleSheet.create({
    main: {
        width: '100%',
        flexDirection: 'row',
        padding: 10,
        alignItems: 'center'
    },
    dash: {
        flex: 1,
        height: 2,
        backgroundColor: '#bfbfbf',
        width: '100%',
        marginLeft: 10
    }
})