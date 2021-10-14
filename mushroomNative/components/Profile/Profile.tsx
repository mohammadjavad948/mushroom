import React from "react";
import {ScrollView, Text, View} from "react-native";
import {profileStyle} from "../../styles/Profile";

export default function Profile(){

    return (
        <ScrollView style={profileStyle.container}>
            <View style={profileStyle.view}>
                <Text style={profileStyle.title}>Account info</Text>
                <Text style={profileStyle.username}>Name</Text>
            </View>
        </ScrollView>
    )
}