import React, {useEffect} from "react";
import {Text, View} from "react-native";
import {dashboardStyle} from "../../styles/Dashboard";

export default function DashboardItem({item}: any){

    return (
        <View
            style={dashboardStyle.list}
        >
            <View style={[
                dashboardStyle.item,
                {
                    backgroundColor: item.color
                }
            ]}>
                <Text style={dashboardStyle.itemTitle}>{item.title}</Text>
                <Text>{item.description}</Text>
            </View>
        </View>
    )
}