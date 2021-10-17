import React, {useState} from "react";
import {TouchableOpacity, View} from "react-native";
import {Button, Text, TextInput} from "react-native-paper";
import {Formik} from "formik";
import {addWorkStyle} from "../../styles/AddWork";
import {Picker} from "@react-native-picker/picker";
import DateTimePicker from "@react-native-community/datetimepicker";
import {useQuery} from "react-query";
import {allWorkGroups} from "../../api/workGroup";
import Icon from "../Icon/Icon";

interface Props{
    submit: any
    init: any
    isEdit?: boolean
}

export default function AddWorkForm(props: Props){

    const {data} = useQuery(['workGroup'], allWorkGroups)

    const [show, setShow] = useState(false)

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
                    style={addWorkStyle.view}
                >
                    <Text style={addWorkStyle.title}>
                        Add New Work
                    </Text>
                    <TextInput
                        style={addWorkStyle.input}
                        label={"Title"}
                        value={values.title}
                        onChangeText={handleChange('title')}
                        onBlur={handleBlur('title')}
                        mode={"outlined"}
                    />
                    <TextInput
                        style={addWorkStyle.input}
                        label={"Description"}
                        value={values.description}
                        onChangeText={handleChange('description')}
                        onBlur={handleBlur('description')}
                        mode={"outlined"}
                        multiline={true}
                        numberOfLines={7}
                    />
                    <Picker
                        style={[addWorkStyle.input]}
                        selectedValue={values.groupId}
                        onValueChange={(itemValue, itemIndex) =>
                            setFieldValue('groupId', itemValue)
                        }>
                        {data?.data.map((e, i) => {
                            return (
                                <Picker.Item label={e.name} value={e.id} key={i} />
                            )
                        })}
                    </Picker>
                    <TouchableOpacity
                        onPress={() => setShow(true)}
                        style={{
                            marginTop: 20,
                            marginBottom: 20,
                            flexDirection: "row",
                            alignItems: 'center'
                        }}
                    >
                        <Icon name={'event'} size={20}/>
                        <Text style={{marginLeft: 10}}>
                            Click to Select Date
                        </Text>
                    </TouchableOpacity>

                    {show && (
                        <DateTimePicker
                            testID="dateTimePicker"
                            value={values.dueDate}
                            mode={"date"}
                            is24Hour={true}
                            display="default"
                            onChange={(e, date) => {
                                setShow(false)
                                setFieldValue('dueDate', date || values.dueDate);
                            }}
                        />
                    )}

                    <Button
                        mode="contained"
                        style={{marginTop: 10}}
                        onPress={handleSubmit}
                        loading={isSubmitting}
                        disabled={isSubmitting}
                    >
                        save
                    </Button>
                </View>
            )}
        </Formik>
    )
}