import React from "react";
import {View} from "react-native";
import {mainStyle} from "../../styles/Main";
import {Button, Text, TextInput} from "react-native-paper";
import {authStyle} from "../../styles/Auth";

export default function Auth(){

    return (
        <Formik
            initialValues={{ username: '', password: '' }}
            onSubmit={values => console.log(values)}
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