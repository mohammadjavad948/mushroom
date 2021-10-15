import React from "react";
import {View} from "react-native";
import {workGroupStyle} from "../../styles/WorkGroup";
import {Text} from "react-native-paper";

interface Props{
    children: any
    icon?: any
}

export default function GroupItem(props: Props){

    return (
        <View style={workGroupStyle.item}>
            {props.icon}
            <Text style={{marginLeft: 10}}>{props.children}</Text>
        </View>
    )
}