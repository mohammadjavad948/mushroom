import React from "react";
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
                <Text>{item.title}</Text>
            </View>
        </View>
    )
}