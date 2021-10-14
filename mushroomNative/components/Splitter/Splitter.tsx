import React from "react";
import {Text, View} from "react-native";
import {splitterStyle} from "../../styles/Splitter";

export default function Splitter(props: {children: any}){

    return (
        <View style={splitterStyle.main}>
            <Text>
                {props.children}
            </Text>
            <View style={splitterStyle.dash} />
        </View>
    )
}