import React from "react";
import Icon from 'react-native-vector-icons/MaterialIcons';
import {useThemeStore} from "../../stores/themeStore";

export default function Icon(props: any){

    const {theme} = useThemeStore();

    return (
        <Icon {...props} color={theme === 'dark' ? 'black' : 'white'}/>
    )
}