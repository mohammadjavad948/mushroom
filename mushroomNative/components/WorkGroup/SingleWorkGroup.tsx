import React from "react";
import {View} from "react-native";
import {Text} from "react-native-paper";

export default function SingleWorkGroup(){

    return (
        <View style={{
            flex: 1
        }}>
            <View
                style={{
                    width: '100%',
                    padding: 10
                }}
            >
                <Text>Group</Text>
            </View>
        </View>
    )
}