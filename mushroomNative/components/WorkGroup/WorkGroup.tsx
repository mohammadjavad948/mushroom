import React from "react";
import {ScrollView, View} from "react-native";
import {workGroupStyle} from "../../styles/WorkGroup";
import Splitter from "../Splitter/Splitter";
import GroupItem from "./GroupItem";
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function WorkGroup(){

    return (
        <ScrollView style={workGroupStyle.container}>
            <View
                style={{
                    alignItems: 'center',
                }}
            >
                <Splitter>
                    Offline Groups
                </Splitter>

                <GroupItem icon={<Icon name="add" size={25} />}>
                    Add
                </GroupItem>

                <Splitter>
                    Account Groups
                </Splitter>

                <Splitter>
                    Joined Groups
                </Splitter>
            </View>
        </ScrollView>
    )
}