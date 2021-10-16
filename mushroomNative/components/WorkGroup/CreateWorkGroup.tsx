import React from "react";
import {ScrollView, View} from "react-native";
import {Button, Text, TextInput} from "react-native-paper";
import {authStyle} from "../../styles/Auth";
import {Formik} from "formik";
import ColorPicker from "react-native-wheel-color-picker";

export default function CreateWorkGroup(){

    function submit(value: any){

    }

    return (
        <ScrollView style={{
            flex: 1
        }}>
            <Formik
                initialValues={{ name: '', color: '#ffffff' }}
                onSubmit={submit}
            >
                {({ handleChange,
                      handleBlur,
                      handleSubmit,
                      values,
                    setFieldValue
                }) => (
                    <View
                        style={[
                            {
                                alignItems: 'center',
                            },
                        ]}
                    >
                        <TextInput
                            style={authStyle.input}
                            label={"name"}
                            mode={"outlined"}
                            onChangeText={handleChange('name')}
                            onBlur={handleBlur('name')}
                        />

                        <ColorPicker
                            color={values.color}
                            swatchesOnly={false}
                            onColorChangeComplete={(e: any) => setFieldValue('color', e)}
                            thumbSize={30}
                            sliderSize={30}
                            noSnap={false}
                            row={false}
                            swatchesLast={true}
                            swatches={false}
                            discrete={false}
                        />

                        <Button
                            mode="contained"
                            style={{marginTop: 10}}
                            onPress={handleSubmit}
                        >
                            save
                        </Button>
                    </View>
                )}
            </Formik>
        </ScrollView>
    )
}