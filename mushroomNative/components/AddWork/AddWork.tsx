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

    return (
        <ScrollView style={addWorkStyle.container}>
        </ScrollView>
    )
}