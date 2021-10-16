import React from "react";
import {ScrollView, View} from "react-native";
import {workGroupStyle} from "../../styles/WorkGroup";
import Splitter from "../Splitter/Splitter";
import GroupItem from "./GroupItem";
import Icon from 'react-native-vector-icons/MaterialIcons';
import {useHistory} from "react-router-native";
import {useQuery} from "react-query";
import {allWorkGroups} from "../../api/workGroup";
import {ActivityIndicator} from "react-native-paper";

export default function WorkGroup(){

    const {isFetching, data} = useQuery(['workGroups'], allWorkGroups)

    const history = useHistory();

    function accountGroup(){
        history.push('/workgroup/add');
    }

    return (
        <ScrollView style={workGroupStyle.container}>
            <View
                style={{
                    alignItems: 'center',
                }}
            >
                <Splitter>
                    Offline Groups
                </Splitter>

                <GroupItem icon={<Icon name="add" size={25} />}>
                    Add
                </GroupItem>

                <GroupItem color={"yellow"}>
                    Homie
                </GroupItem>

                <Splitter beforeText={isFetching && <ActivityIndicator size={15} />}>
                    Account Groups
                </Splitter>

                <GroupItem click={accountGroup} icon={<Icon name="add" size={25} />}>
                    Add
                </GroupItem>

                {data?.data.map((e: any, i: number) => {
                    return (
                        <GroupItem
                            icon={<Icon name={e.isPrivate ? "lock" : "public"} size={25} />}
                            color={e.color}
                            key={i}
                        >
                            {e.name}
                        </GroupItem>
                    )
                })}

                <Splitter>
                    Joined Groups
                </Splitter>

            </View>
        </ScrollView>
    )
}