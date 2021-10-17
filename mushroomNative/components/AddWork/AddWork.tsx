import React from "react";
import {ScrollView, View} from "react-native";
import {Text} from 'react-native-paper';
import {addWorkStyle} from "../../styles/AddWork";
import {TextInput} from "react-native-paper";
import {Picker} from '@react-native-picker/picker';
import {useQuery} from "react-query";
import {allWorkGroups} from "../../api/workGroup";

export default function AddWork(){

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
            </View>
        </ScrollView>
    )
}