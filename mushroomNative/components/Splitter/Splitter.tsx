import React from "react";
import {View} from "react-native";
import {splitterStyle} from "../../styles/Splitter";
import {Text} from "react-native-paper";

interface Props{
    children: any
    beforeText?: any
}

export default function Splitter(props: Props){

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