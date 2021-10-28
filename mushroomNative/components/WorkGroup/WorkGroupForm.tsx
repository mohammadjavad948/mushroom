import React from "react";
import {Formik} from "formik";
import {ScrollView, View} from "react-native";
import {Button, Checkbox, Text, TextInput} from "react-native-paper";
import ColorPicker from "react-native-wheel-color-picker";
import {useTranslation} from "react-i18next";

interface Props{
    submit: any
    init: any
    isEdit?: boolean
}

export default function WorkGroupForm(props: Props){

    const {t} = useTranslation();

    return (
        <Formik
            initialValues={props.init}
            onSubmit={props.submit}
        >
            {({ handleChange,
                  handleBlur,
                  handleSubmit,
                  values,
                  setFieldValue,
                isSubmitting
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
                        {props.isEdit ? t('editWorkGroup') : t('addWorkGroup')}
                    </Text>
                    <TextInput
                        style={{width: '90%'}}
                        label={t('name')}
                        mode={"outlined"}
                        value={values.name}
                        onChangeText={handleChange('name')}
                        onBlur={handleBlur('name')}
                    />

                    <View
                        style={{
                            flexDirection: "row",
                            marginTop: 10,
                            marginBottom: 10,
                            alignItems: 'center'
                        }}
                    >
                        <Text>
                            {t('isPrivate')}
                        </Text>
                        <Checkbox
                            status={values.isPrivate ? 'checked' : 'unchecked'}
                            onPress={() => {
                                setFieldValue('isPrivate', !values.isPrivate);
                            }}
                        />
                    </View>


                    <View style={{width: '90%'}}>
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
                    </View>

                    <Button
                        mode="contained"
                        style={{marginTop: 10}}
                        onPress={handleSubmit}
                        loading={isSubmitting}
                        disabled={isSubmitting}
                    >
                        {t('save')}
                    </Button>
                </View>
            )}
        </Formik>

    )
}