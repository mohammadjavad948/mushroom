import React from "react";
import {ScrollView, View} from "react-native";
import {Text} from 'react-native-paper';
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