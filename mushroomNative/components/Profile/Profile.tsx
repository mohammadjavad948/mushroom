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
import {useThemeStore} from "../../stores/themeStore";

export default function Profile(){

    const {primary, setPrimary} = useThemeStore();
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
                    color={primary}
                    swatchesOnly={false}
                    onColorChangeComplete={(e) => setPrimary(e)}
                    thumbSize={30}
                    sliderSize={30}
                    noSnap={false}
                    row={false}
                    swatchesLast={true}
                    swatches={false}
                    discrete={false}
                />
                <View
                    style={profileStyle.themes}
                >
                    <View
                        style={[
                            profileStyle.theme
                        ]}
                    >
                        <Text>
                            Dark
                        </Text>
                    </View>
                    <View
                        style={[
                            profileStyle.theme
                        ]}
                    >
                        <Text>
                            Light
                        </Text>
                    </View>
                    <View
                        style={[
                            profileStyle.theme
                        ]}
                    >
                        <Text>
                            Follow system
                        </Text>
                    </View>
                </View>
            </View>
        </ScrollView>
    )
}