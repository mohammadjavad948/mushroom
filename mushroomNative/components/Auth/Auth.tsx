import React, {useState} from "react";
import {mainStyle} from "../../styles/Main";
import {Button, Text, TextInput} from "react-native-paper";
import {authStyle} from "../../styles/Auth";
import {Formik} from 'formik';
import {login} from "../../api/auth";
import {useAuthStore} from "../../stores/authStore";
import {a, useSpring} from '@react-spring/native';

export default function Auth(){

    const [loading, setLoading] = useState(false);
    const {setToken} = useAuthStore()

    async function submit(value: any) {
        setLoading(true)
        try {
            const data = await login(value);

            console.log('logged in')
            setToken(data.data.token)
        } catch (e) {
            setLoading(false)
        }
    }

    const animation = useSpring(() => ({
        from: {
            opacity: 0,
        },
        to: {
            opacity: 1
        }
    }))

    return (
        <Formik
            initialValues={{ username: '', password: '' }}
            onSubmit={submit}
        >
            {({ handleChange, handleBlur, handleSubmit, values }) => (
                <a.View
                    style={[
                        mainStyle.main,
                        {
                            alignItems: 'center',
                            justifyContent: 'center'
                        },
                        ...animation
                    ]}
                >
                    <Text style={authStyle.text}>
                        Login
                    </Text>
                    <TextInput
                        style={authStyle.input}
                        label={"username"}
                        mode={"outlined"}
                        onChangeText={handleChange('username')}
                        onBlur={handleBlur('username')}
                    />
                    <TextInput
                        style={authStyle.input}
                        label={"password"}
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
                    >
                        Login
                    </Button>
                </a.View>
            )}
        </Formik>
    )
}