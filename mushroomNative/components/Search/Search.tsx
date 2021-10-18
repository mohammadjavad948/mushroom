import React, {useState} from "react";
import {View} from "react-native";
import {TextInput} from "react-native-paper";
import {search} from "../../api/search";


export default function Search(){

    const [text, setText] = useState('');

    async function doSearch(){
        try {
            const data = await search(text);
            console.log(data.data);
        }catch (e){
            console.log(e)
        }
    }

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
                right={<TextInput.Icon onPress={doSearch} name={"search"} />}
            />
        </View>
    )
}