import React from "react";
import {View} from "react-native";
import {addWorkStyle} from "../../styles/AddWork";
import {TextInput} from "react-native-paper";

export default function AddWork(){

    return (
        <View style={addWorkStyle.container}>
            <TextInput mode="outlined"  />
        </View>
    )
}