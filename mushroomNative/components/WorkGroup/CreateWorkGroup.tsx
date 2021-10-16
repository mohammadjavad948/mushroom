import React, {useState} from "react";
import {ScrollView, View} from "react-native";
import {Button, Checkbox, Text, TextInput} from "react-native-paper";
import {Formik} from "formik";
import ColorPicker from "react-native-wheel-color-picker";
import {createWorkGroup} from "../../api/workGroup";
import {useQueryClient} from "react-query";
import {useHistory} from "react-router-native";

export default function CreateWorkGroup(){

    const [isLoading, setIsLoading] = useState(false);
    const client = useQueryClient();
    const history = useHistory();

    async function submit(value: any){
        setIsLoading(true)
        try {
            await createWorkGroup(value);
            setIsLoading(false);
            client.invalidateQueries('workGroups');
            history.push('/workgroup')
        } catch (e) {
            setIsLoading(false)
        }
    }

    return (
        <ScrollView style={{
            flex: 1
        }}>
            <Formik
                initialValues={{ name: '', color: '#ffffff', isPrivate: true }}
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

                        <View
                            style={{
                                flexDirection: "row",
                                marginTop: 10,
                                marginBottom: 10,
                                alignItems: 'center'
                            }}
                        >
                            <Text>
                                Is Private
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
                            loading={isLoading}
                            disabled={isLoading}
                        >
                            save
                        </Button>
                    </View>
                )}
            </Formik>
        </ScrollView>
    )
}