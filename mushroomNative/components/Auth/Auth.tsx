import React from "react";
import {View} from "react-native";
import {mainStyle} from "../../styles/Main";
import {Button, Text, TextInput} from "react-native-paper";
import {authStyle} from "../../styles/Auth";
import {Formik} from 'formik';
import {login} from "../../api/auth";

export default function Auth(){

    async function submit(value: any) {
        try {
            const data = await login(value);
            console.log(data.data)
        } catch (e) {
            console.log(e)
        }
    }

    return (
        <Formik
            initialValues={{ username: '', password: '' }}
            onSubmit={submit}
        >
            {({ handleChange, handleBlur, handleSubmit, values }) => (
                <View
                    style={[
                        mainStyle.main,
                        {
                            alignItems: 'center',
                            justifyContent: 'center'
                        }
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
                </View>
            )}
        </Formik>
    )
}