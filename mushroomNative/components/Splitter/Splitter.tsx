import React from "react";
import {View} from "react-native";
import {splitterStyle} from "../../styles/Splitter";
import {useThemeStore} from "../../stores/themeStore";
import {Text} from "react-native-paper";

interface Props{
    children: any
    beforeText?: any
}

export default function Splitter(props: Props){

    const {theme} = useThemeStore();

    return (
        <View style={splitterStyle.main}>
            {props.beforeText}
            <Text style={[
                splitterStyle.text,
            ]}>
                {props.children}
            </Text>
            <View style={splitterStyle.dash} />
        </View>
    )
}