import React from "react";
import {TouchableOpacity, View} from "react-native";
import {workGroupStyle} from "../../styles/WorkGroup";
import {Text} from "react-native-paper";

interface Props{
    children: any
    icon?: any
    click?: any
    color?: string
    actions?: {
        icon: any
        click: any
    }[]
}

export default function GroupItem(props: Props){

    return (
        <TouchableOpacity
            style={[
                workGroupStyle.item,
                {borderColor: props.color || 'white'}
            ]}
            onPress={props.click}
        >
            {props.icon}
            <Text style={{marginLeft: props.icon ? 10 : 0}}>{props.children}</Text>
            <View
                style={{
                    position: 'absolute',
                    right: 10
                }}
            >
                <Text>hmm</Text>
            </View>
        </TouchableOpacity>
    )
}