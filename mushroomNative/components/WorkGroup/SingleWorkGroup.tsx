import React from "react";
import {View} from "react-native";

export default function SingleWorkGroup(){

    return (
        <View style={{
            flex: 1
        }}>
            <View
                style={{
                    height: 30,
                    width: '100%'
                }}
            >
                <Text>Group</Text>
            </View>
        </View>
    )
}