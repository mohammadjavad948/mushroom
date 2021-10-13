import React from "react";
import {FlatList, ScrollView} from "react-native";
import {dashboardStyle} from "../../styles/Dashboard";

const data = [
    {
        id: 1,
        title: 'kshfsf',
        description: 'skefskjfhjksf',
        color: 'yellow'
    }
]

export default function Dashboard(){

    function renderItem({item}: any){

    }

    return (
        <ScrollView style={dashboardStyle.container}>
            <FlatList
                data={data}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />
        </ScrollView>
    )
}