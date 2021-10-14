import React from "react";
import {View} from "react-native";
import {workGroupStyle} from "../../styles/WorkGroup";
import Splitter from "../Splitter/Splitter";

export default function WorkGroup(){

    return (
        <View style={workGroupStyle.container}>
            <Splitter>
                Offline Groups
            </Splitter>

            <Splitter>
                Account Groups
            </Splitter>

            <Splitter>
                Joined Groups
            </Splitter>
        </View>
    )
}