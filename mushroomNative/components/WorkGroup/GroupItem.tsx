import React from "react";
import {TouchableOpacity} from "react-native";
import {workGroupStyle} from "../../styles/WorkGroup";
import {Text} from "react-native-paper";

interface Props{
    children: any
    icon?: any
    click: any
}

export default function GroupItem(props: Props){

    return (
        <TouchableOpacity
            style={workGroupStyle.item}
            onPress={props.click}
        >
            {props.icon}
            <Text style={{marginLeft: props.icon ? 10 : 0}}>{props.children}</Text>
        </TouchableOpacity>
    )
}