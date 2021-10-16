import React, {useState} from "react";
import {FlatList, View} from "react-native";
import {dashboardStyle} from "../../styles/Dashboard";
import DashboardItem from "./Item";
import Splitter from "../Splitter/Splitter";
import Icon from "../Icon/Icon";

const data = [
    {
        id: 1,
        title: 'kshfsf',
        description: 'skefskjfhjksf',
        color: '#01fafa',
        textColor: 'black'
    },
    {
        id: 2,
        title: 'kshfsf',
        description: 'skefskjfhjksf',
        color: '#00fca4',
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
        color: '#6cff03',
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
        color: '#00a4fd',
        textColor: 'black'
    }
]

export default function Dashboard(){

    const [isRefreshing, setIsRefreshing] = useState(false);

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

    function refresh(){
        setIsRefreshing(true)

        setTimeout(() => {
            setIsRefreshing(false)
        }, 5000);
    }

    return (
        <View style={dashboardStyle.container}>
            <FlatList
                data={data}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                onRefresh={refresh}
                refreshing={isRefreshing}
            />
        </View>
    )
}