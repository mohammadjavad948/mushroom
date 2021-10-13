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
                <Text style={[
                    dashboardStyle.itemTitle,
                    {
                        color: item.textColor
                    }
                ]}>
                    {item.title}
                </Text>
                <Text
                    style={[
                        {
                            color: item.textColor,
                            opacity: 0.7
                        }
                    ]}
                >
                    {item.description}
                </Text>
                <Text
                    style={[
                        dashboardStyle.daysLeft,
                        {
                            color: item.textColor,
                        }
                    ]}
                >
                    3 days left
                </Text>
            </View>
        </View>
    )
}