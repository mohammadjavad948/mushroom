import React from "react";
import {ScrollView, View} from "react-native";
import {addWorkStyle} from "../../styles/AddWork";
import {TextInput} from "react-native-paper";

export default function AddWork(){

    return (
        <ScrollView style={addWorkStyle.container}>
            <View style={addWorkStyle.view}>
                <TextInput
                    style={addWorkStyle.input}
                    label={"Title"}
                    mode={"outlined"}
                />
            </View>
        </ScrollView>
    )
}