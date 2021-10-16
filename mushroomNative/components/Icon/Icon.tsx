import React from "react";
import IC from 'react-native-vector-icons/MaterialIcons';
import {useThemeStore} from "../../stores/themeStore";

export default function Icon(props: any){

    const {theme} = useThemeStore();

    return (
        <IC {...props} color={theme === 'dark' ? 'white' : 'black'}/>
    )
}