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
                {
                    borderColor: props.color || 'white',
                    paddingRight: props.actions ? props.actions.length * 38 : 0
                }
            ]}
            onPress={props.click}
        >
            {props.icon}
            <Text
                style={{
                    marginLeft: props.icon ? 10 : 0,
                }}
            >
                {props.children}
            </Text>
            {props.actions && <Action action={props.actions} />}
        </TouchableOpacity>
    )
}

function Action(props: {action: Props['actions']}){

    return (
        <View
            style={{
                position: 'absolute',
                right: 10,
                flexDirection: "row"
            }}
        >
            {props.action?.map((e, i) => {
                return (
                    <TouchableOpacity
                        style={{
                            padding: 5,
                        }}
                        onPress={e.click}
                        key={i}
                    >
                        {e.icon}
                    </TouchableOpacity>
                )
            })}
        </View>
    )
}