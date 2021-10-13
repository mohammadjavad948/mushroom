import React from "react";
import {FlatList, View} from "react-native";
import {dashboardStyle} from "../../styles/Dashboard";
import DashboardItem from "./Item";

const data = [
    {
        id: 1,
        title: 'kshfsf',
        description: 'skefskjfhjksf',
        color: '#000000'
    },
    {
        id: 2,
        title: 'kshfsf',
        description: 'skefskjfhjksf',
        color: '#ff9191'
    }
]

export default function Dashboard(){

    function renderItem(data: any){
        return <DashboardItem {...data} />
    }

    return (
        <View style={dashboardStyle.container}>
            <FlatList
                data={data}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />
        </View>
    )
}