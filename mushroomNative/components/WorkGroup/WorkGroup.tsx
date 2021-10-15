import React from "react";
import {ScrollView, View} from "react-native";
import {workGroupStyle} from "../../styles/WorkGroup";
import Splitter from "../Splitter/Splitter";

export default function WorkGroup(){

    return (
        <ScrollView style={workGroupStyle.container}>
            <Splitter>
                Offline Groups
            </Splitter>

            <Splitter>
                Account Groups
            </Splitter>

            <Splitter>
                Joined Groups
            </Splitter>
        </ScrollView>
    )
}