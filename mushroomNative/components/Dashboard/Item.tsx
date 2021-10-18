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
                    backgroundColor: item.group?.color
                }
            ]}>
                <Text style={[
                    dashboardStyle.itemTitle,
                    {
                        color: "black"
                    }
                ]}>
                    {item.title}
                </Text>
                <Text
                    style={[
                        {
                            color: "black",
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
                            color: "black",
                        }
                    ]}
                >
                    {new Date(item.dueDate).toDateString()}
                </Text>
                <Text
                    style={[
                        dashboardStyle.daysLeft,
                        {
                            color: "black",
                        }
                    ]}
                >
                    from {item.group.name}
                </Text>
            </View>
        </View>
    )
}