import React from "react";
import {ScrollView, View} from "react-native";
import {workGroupStyle} from "../../styles/WorkGroup";
import Splitter from "../Splitter/Splitter";
import GroupItem from "./GroupItem";

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

                <GroupItem>
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