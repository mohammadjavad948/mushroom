import React, {useState} from "react";
import {ScrollView, View} from "react-native";
import {Text} from 'react-native-paper';
import {addWorkStyle} from "../../styles/AddWork";
import {TextInput} from "react-native-paper";
import {Picker} from '@react-native-picker/picker';
import {useQuery} from "react-query";
import {allWorkGroups} from "../../api/workGroup";
import DateTimePicker from '@react-native-community/datetimepicker';

export default function AddWork(){

    const [date, setDate] = useState(new Date(1598051730000));
    const [show, setShow] = useState(false);

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setDate(currentDate);
    };

    const showMode = (currentMode) => {
        setShow(true);
    };

    const {data} = useQuery(['workGroup'], allWorkGroups)

    return (
        <ScrollView style={addWorkStyle.container}>
            <View style={addWorkStyle.view}>
                <Text style={addWorkStyle.title}>
                    Add New Work
                </Text>
                <TextInput
                    style={addWorkStyle.input}
                    label={"Title"}
                    mode={"outlined"}
                />
                <TextInput
                    style={addWorkStyle.input}
                    label={"Description"}
                    mode={"outlined"}
                    multiline={true}
                    numberOfLines={7}
                />
                <Picker
                    style={[addWorkStyle.input]}
                    selectedValue={'js'}
                    onValueChange={(itemValue, itemIndex) =>
                        console.log(itemValue)
                    }>
                    {data?.data.map((e, i) => {
                        return (
                            <Picker.Item label={e.name} value={e.id} key={i} />
                        )
                    })}
                </Picker>
                <DateTimePicker
                    testID="dateTimePicker"
                    value={date}
                    mode={"date"}
                    is24Hour={true}
                    display="default"
                    onChange={onChange}
                />
            </View>
        </ScrollView>
    )
}