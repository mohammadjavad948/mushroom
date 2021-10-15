import React from "react";
import {Image, ScrollView, View} from "react-native";
import {ActivityIndicator, Text} from 'react-native-paper';
import {profileStyle} from "../../styles/Profile";
import {useQuery} from "react-query";
import {info} from "../../api/auth";

export default function Profile(){

    const {data, isLoading} = useQuery('userInfo', info)

    return (
        <ScrollView style={profileStyle.container}>
            <View style={profileStyle.view}>
                <Text style={profileStyle.title}>Account info</Text>
                {isLoading && <ActivityIndicator size={25} />}
                {!isLoading && (
                    <View style={profileStyle.infoContainer}>
                        <Image
                            source={{
                                uri: `https://avatars.dicebear.com/api/initials/${data?.data.username || "default"}.svg`
                            }}
                            style={profileStyle.image}
                        />
                        <View>
                            <Text style={profileStyle.username}>{data?.data.username}</Text>
                        </View>
                    </View>
                )}
            </View>
        </ScrollView>
    )
}