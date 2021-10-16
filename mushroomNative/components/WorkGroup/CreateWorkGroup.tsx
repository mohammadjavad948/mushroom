import React from "react";
import {ScrollView, View} from "react-native";
import {Button, Text, TextInput} from "react-native-paper";
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
                        <Text
                            style={{
                                fontSize: 15,
                                marginTop: 10,
                                marginBottom: 10,
                            }}
                        >
                            Add Work Group
                        </Text>
                        <TextInput
                            style={{width: '90%'}}
                            label={"name"}
                            mode={"outlined"}
                            onChangeText={handleChange('name')}
                            onBlur={handleBlur('name')}
                        />

                        <View style={{width: '90%'}}>
                            <ColorPicker
                                color={values.color}
                                swatchesOnly={false}
                                onColorChangeComplete={(e: any) => setFieldValue('color', e)}
                                onColorChange={(e: any) => setFieldValue('color', e)}
                                thumbSize={30}
                                sliderSize={30}
                                noSnap={false}
                                row={false}
                                swatchesLast={true}
                                swatches={false}
                                discrete={false}
                            />
                        </View>

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