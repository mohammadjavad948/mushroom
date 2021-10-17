import React from "react";
import {View} from "react-native";
import {TextInput} from "react-native-paper";


export default function Search(){

    return (
        <View
            style={{flex: 1, alignItems: 'center'}}
        >
            <TextInput
                style={{
                    width: '95%'
                }}
                mode={"outlined"}
                label={"Search"}
                right={<TextInput.Icon name={"search"} />}
            />
        </View>
    )
}