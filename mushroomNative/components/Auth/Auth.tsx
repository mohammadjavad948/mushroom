import React from "react";
import {View} from "react-native";
import {mainStyle} from "../../styles/Main";
import {Text, TextInput} from "react-native-paper";
import {authStyle} from "../../styles/Auth";

export default function Auth(){

    return (
        <View
            style={[
                mainStyle.main,
                {
                    alignItems: 'center',
                    justifyContent: 'center'
                }
            ]}
        >
            <Text style={authStyle.text}>
                Login
            </Text>
            <TextInput
                style={authStyle.input}
                label={"username"}
                mode={"outlined"}
            />
        </View>
    )
}