import React from "react";
import {View} from "react-native";
import {workGroupStyle} from "../../styles/WorkGroup";
import {Text} from "react-native-paper";

interface Props{
    children: any
}

export default function GroupItem(props: Props){

    return (
        <View style={workGroupStyle.item}>
            <Text>{props.children}</Text>
        </View>
    )
}