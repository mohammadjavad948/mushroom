import React, {useState} from "react";
import {mainStyle} from "../../styles/Main";
import {Button, Text, TextInput} from "react-native-paper";
import {authStyle} from "../../styles/Auth";
import {Formik} from 'formik';
import {login, signup} from "../../api/auth";
import {useAuthStore} from "../../stores/authStore";
import {a, useSpring} from '@react-spring/native';
import {useThemeStore} from "../../stores/themeStore";
import {View} from "react-native";
import {useTranslation} from "react-i18next";

export default function Auth(){
    const {theme} = useThemeStore();
    const animation = useSpring(() => ({
        from: {
            opacity: 0,
        },
        to: {
            opacity: 1
        }
    }))

    const [login, setLogin] = useState(true);

    return (
        <a.View
            style={[
                mainStyle.main,
                {
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: theme === 'dark' ? '#2b2b2b' : 'white'
                },
                ...animation
            ]}
        >
            {login ? <Login signup={() => setLogin(false)} /> : <Signup login={() => setLogin(true)} />}
        </a.View>
    )
}

function Login(props: {signup: any}){

    const {t} = useTranslation();
    const [loading, setLoading] = useState(false);
    const {setToken} = useAuthStore()

    async function submit(value: any) {
        setLoading(true)
        try {
            const data = await login(value);

            console.log('logged in')
            setToken(data.data.token)
        } catch (e) {
            console.log(e)
            setLoading(false)
        }
    }

    return (
        <Formik
            initialValues={{ username: '', password: '' }}
            onSubmit={submit}
        >
            {({ handleChange, handleBlur, handleSubmit, values }) => (
                <View
                    style={{
                        width: '100%',
                        alignItems:'center'
                    }}
                >
                    <Text style={authStyle.text}>
                        {t('login')}
                    </Text>
                    <TextInput
                        style={authStyle.input}
                        label={t('username')}
                        mode={"outlined"}
                        onChangeText={handleChange('username')}
                        onBlur={handleBlur('username')}
                    />
                    <TextInput
                        style={authStyle.input}
                        label={t('password')}
                        mode={"outlined"}
                        type={"password"}
                        secureTextEntry={true}
                        onChangeText={handleChange('password')}
                        onBlur={handleBlur('password')}
                    />
                    <Button
                        mode="contained"
                        style={{marginTop: 10}}
                        onPress={handleSubmit}
                        loading={loading}
                        disabled={loading}
                    >
                        {t('login')}
                    </Button>
                    <Button
                        compact={true}
                        onPress={props.signup}
                    >
                        {t('signup')}
                    </Button>
                </View>
            )}
        </Formik>
    )
}

function Signup(props: {login: any}){

    const {t} = useTranslation();
    const [loading, setLoading] = useState(false);

    async function submit(value: any) {
        setLoading(true)
        try {
            await signup(value);

            props.login();
        } catch (e) {
            console.log(e)
            setLoading(false)
        }
    }

    return (
        <Formik
            initialValues={{ username: '', password: '' }}
            onSubmit={submit}
        >
            {({ handleChange, handleBlur, handleSubmit, values }) => (
                <View
                    style={{
                        width: '100%',
                        alignItems: 'center'
                    }}
                >
                    <Text style={authStyle.text}>
                        {t('signup')}
                    </Text>
                    <TextInput
                        style={authStyle.input}
                        label={t('username')}
                        mode={"outlined"}
                        onChangeText={handleChange('username')}
                        onBlur={handleBlur('username')}
                    />
                    <TextInput
                        style={authStyle.input}
                        label={t('password')}
                        mode={"outlined"}
                        type={"password"}
                        secureTextEntry={true}
                        onChangeText={handleChange('password')}
                        onBlur={handleBlur('password')}
                    />
                    <Button
                        mode="contained"
                        style={{marginTop: 10}}
                        onPress={handleSubmit}
                        loading={loading}
                        disabled={loading}
                    >
                        {t('signup')}
                    </Button>
                    <Button
                        compact={true}
                        onPress={props.login}
                    >
                        {t('login')}
                    </Button>
                </View>
            )}
        </Formik>
    )
}