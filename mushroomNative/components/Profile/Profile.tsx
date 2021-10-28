import React, {useState} from "react";
import {Image, ScrollView, View} from "react-native";
import {ActivityIndicator, Button, Text, TextInput} from 'react-native-paper';
import {profileStyle} from "../../styles/Profile";
import {useQuery} from "react-query";
import {changePassword, info} from "../../api/auth";
import {useAuthStore} from "../../stores/authStore";
import Splitter from "../Splitter/Splitter";
import ColorPicker from "react-native-wheel-color-picker";
import {useThemeStore} from "../../stores/themeStore";
import Theme from "./Theme";
import Icon from "../Icon/Icon";
import {useTranslation} from "react-i18next";

export default function Profile(){

    const {t, i18n} = useTranslation();

    const {primary, setPrimary} = useThemeStore();
    const {data, isLoading} = useQuery('userInfo', info)
    const {logout} = useAuthStore();

    const [old, setOld] = useState('');
    const [newP, setNew] = useState('');
    const [loading, setLoading] = useState(false);

    async function update(){
        setLoading(true);
        try {
            await changePassword({old: old, new: newP});
            setLoading(false)
        }catch (e) {
            setLoading(false)
        }
    }

    return (
        <ScrollView style={profileStyle.container}>
            <View style={profileStyle.view}>
                <Splitter beforeText={<Icon name="person" size={20} />}>
                    {t('account')}
                </Splitter>
                {isLoading && <ActivityIndicator size={25} />}
                {isLoading && (
                    <Button
                        compact={true}
                        mode={"contained"}
                        uppercase={false}
                        style={profileStyle.logout}
                        onPress={logout}
                    >
                        {t('logout')}
                    </Button>
                )}
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
                                {data?.data.isVerified ?  `(${t('verified')})` : ""}
                            </Text>
                            <Text style={profileStyle.date}>
                                {t('createdAt')} {new Date(data?.data.createdAt || "").toDateString()}
                            </Text>
                            <Text style={profileStyle.date}>
                                {t('abilities')}
                            </Text>
                            <Text style={profileStyle.date}>
                                - Can create public workgroup: {data?.data.canCreatePublicWorkGroup ? "yes": "no"}
                            </Text>
                            <Button
                                compact={true}
                                mode={"contained"}
                                uppercase={false}
                                style={profileStyle.logout}
                                onPress={logout}
                            >
                                {t('logout')}
                            </Button>
                        </View>
                    </View>
                )}
                <Splitter beforeText={<Icon name="brush" size={20} />}>
                    {t('theme')}
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
                <Theme />

                <Splitter beforeText={<Icon name="translate" size={20} />}>
                    {t('language')}
                </Splitter>

                <View>
                    <Button onPress={() => i18n.changeLanguage('en')}>
                        English
                    </Button>
                    <Button onPress={() => i18n.changeLanguage('fa')}>
                        فارسی
                    </Button>
                </View>

                <Splitter beforeText={<Icon name="vpn-key" size={20} />}>
                    {t('changePassword')}
                </Splitter>
                <TextInput
                    mode={"outlined"}
                    label={t('oldPassword')}
                    onChnageText={e => setOld(e)}
                    style={{
                        width: '100%'
                    }}
                />
                <TextInput
                    mode={"outlined"}
                    label={t('newPassword')}
                    onChnageText={e => setNew(e)}
                    style={{
                        width: '100%'
                    }}
                />
                <Button
                    mode={"contained"}
                    loading={loading}
                    onPress={update}
                    style={{
                        marginTop: 20
                    }}
                >
                    {t('update')}
                </Button>
            </View>
        </ScrollView>
    )
}