import React from "react";
import {View} from "react-native";
import {mainStyle} from "../../styles/Main";
import {Button, Text, TextInput} from "react-native-paper";
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
            <TextInput
                style={authStyle.input}
                label={"password"}
                mode={"outlined"}
                type={"password"}
                secureTextEntry={true}
            />
            <Button
                mode="contained"
                style={{marginTop: 10}}
            >
                Login
            </Button>
        </View>
    )
}