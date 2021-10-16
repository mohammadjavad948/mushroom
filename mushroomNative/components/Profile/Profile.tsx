import React from "react";
import {Image, ScrollView, View} from "react-native";
import {ActivityIndicator, Button, Text} from 'react-native-paper';
import {profileStyle} from "../../styles/Profile";
import {useQuery} from "react-query";
import {info} from "../../api/auth";
import {useAuthStore} from "../../stores/authStore";
import Splitter from "../Splitter/Splitter";
import Icon from 'react-native-vector-icons/MaterialIcons';
import ColorPicker from "react-native-wheel-color-picker";

export default function Profile(){

    const {data, isLoading} = useQuery('userInfo', info)
    const {logout} = useAuthStore();

    return (
        <ScrollView style={profileStyle.container}>
            <View style={profileStyle.view}>
                <Splitter beforeText={<Icon name="person" size={20} />}>
                    Account
                </Splitter>
                {isLoading && <ActivityIndicator size={25} />}
                {!isLoading && (
                    <View style={profileStyle.infoContainer}>
                        <Image
                            source={require('./image.png')}
                            style={profileStyle.image}
                        />
                        <View style={profileStyle.actions}>
                            <Text style={profileStyle.username}>
                                {data?.data.username}
                                #{data?.data.id}
                                {data?.data.isVerified ?  "(verified)" : ""}
                            </Text>
                            <Text style={profileStyle.date}>
                                Created At {new Date(data?.data.createdAt).toDateString()}
                            </Text>
                            <Button
                                compact={true}
                                mode={"contained"}
                                uppercase={false}
                                style={profileStyle.logout}
                                onPress={logout}
                            >
                                logout
                            </Button>
                        </View>
                    </View>
                )}
                <Splitter beforeText={<Icon name="brush" size={20} />}>
                    Theme
                </Splitter>
                <ColorPicker
                    color={"#ffffff"}
                    swatchesOnly={false}
                    onColorChange={(e) => console.log(e)}
                    onColorChangeComplete={(e) => console.log(e)}
                    thumbSize={30}
                    sliderSize={30}
                    noSnap={false}
                    row={false}
                    swatchesLast={true}
                    swatches={false}
                    discrete={false}
                />
            </View>
        </ScrollView>
    )
}