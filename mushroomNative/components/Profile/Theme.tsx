import React from "react";
import {profileStyle} from "../../styles/Profile";
import {TouchableOpacity, View} from "react-native";
import {Text} from "react-native-paper";

export default function Theme(){

    return (
        <View
            style={profileStyle.themes}
        >
            <TouchableOpacity
                style={[
                    profileStyle.theme
                ]}
            >
                <Text>
                    Dark
                </Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={[
                    profileStyle.theme
                ]}
            >
                <Text>
                    Light
                </Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={[
                    profileStyle.theme
                ]}
            >
                <Text>
                    Follow system
                </Text>
            </TouchableOpacity>
        </View>
    )
}