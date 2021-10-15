import React from "react";
import {ScrollView, View} from "react-native";
import {Text} from 'react-native-paper';
import {profileStyle} from "../../styles/Profile";
import {useQuery} from "react-query";
import {info} from "../../api/auth";

export default function Profile(){

    const {data, isLoading} = useQuery('userInfo', info)

    console.log(data?.data)

    return (
        <ScrollView style={profileStyle.container}>
            <View style={profileStyle.view}>
                <Text style={profileStyle.title}>Account info</Text>
                <Text style={profileStyle.username}>Name</Text>
            </View>
        </ScrollView>
    )
}