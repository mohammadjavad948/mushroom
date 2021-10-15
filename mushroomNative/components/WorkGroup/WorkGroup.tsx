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

                <GroupItem color={"yellow"}>
                    Homie
                </GroupItem>

                <Splitter>
                    Account Groups
                </Splitter>

                <GroupItem icon={<Icon name="add" size={25} />}>
                    Add
                </GroupItem>

                <GroupItem icon={<Icon name="lock" size={25} />} color={"#05baf1"}>
                    Cloud
                </GroupItem>

                <GroupItem icon={<Icon name="public" size={25} />} color={"#8f05f1"}>
                    Public
                </GroupItem>

                <Splitter>
                    Joined Groups
                </Splitter>

                <GroupItem color={"red"}>
                    Subscribed
                </GroupItem>

            </View>
        </ScrollView>
    )
}