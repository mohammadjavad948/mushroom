import React, {useState} from "react";
import {View} from "react-native";
import {TextInput} from "react-native-paper";


export default function Search(){

    const [text, setText] = useState('');

    return (
        <View
            style={{flex: 1, alignItems: 'center'}}
        >
            <TextInput
                style={{
                    width: '95%'
                }}
                value={text}
                onChangeText={(e: string) => setText(e)}
                mode={"outlined"}
                label={"Search"}
                right={<TextInput.Icon name={"search"} />}
            />
        </View>
    )
}