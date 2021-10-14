import React from "react";
import {FlatList, View} from "react-native";
import {dashboardStyle} from "../../styles/Dashboard";
import DashboardItem from "./Item";
import Splitter from "../Splitter/Splitter";
import Icon from 'react-native-vector-icons/MaterialIcons';

const data = [
    {
        id: 1,
        title: 'kshfsf',
        description: 'skefskjfhjksf',
        color: '#229797',
        textColor: 'black'
    },
    {
        id: 2,
        title: 'kshfsf',
        description: 'skefskjfhjksf',
        color: '#fc0000',
        textColor: 'black'
    },
    {
        id: 3,
        type: 'splitter',
        title: '2020/02/03'
    },
    {
        id: 4,
        title: 'ad;oajsdio',
        description: 'ncxvhbxbvx',
        color: '#ffda03',
        textColor: 'black'
    },
    {
        id: 5,
        type: 'splitter',
        title: '2020/03/03'
    },
    {
        id: 6,
        title: 'weriuwwqoeiwq',
        description: 'skefskjfhjksf',
        color: '#6bfd00',
        textColor: 'black'
    }
]

export default function Dashboard(){

    function renderItem(data: any){
        if (data.item.type === 'splitter'){
            return (
                <Splitter beforeText={<Icon name="event" size={18} />}>
                    {data.item.title}
                </Splitter>
            )
        }

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