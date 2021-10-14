import React from "react";
import {ScrollView, View, Text} from "react-native";
import {addWorkStyle} from "../../styles/AddWork";
import {TextInput} from "react-native-paper";

export default function AddWork(){

    return (
        <ScrollView style={addWorkStyle.container}>
            <View style={addWorkStyle.view}>
                <Text style={addWorkStyle.title}>
                    Add New Work
                </Text>
                <TextInput
                    style={addWorkStyle.input}
                    label={"Title"}
                    mode={"outlined"}
                />
                <TextInput
                    style={addWorkStyle.input}
                    label={"Description"}
                    mode={"outlined"}
                    multiline={true}
                    numberOfLines={7}
                />
            </View>
        </ScrollView>
    )
}