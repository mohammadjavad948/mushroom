import React from "react";
import {View} from "react-native";
import {useQuery} from "react-query";
import {getWorkGroup} from "../../api/workGroup";
import {useParams} from "react-router-native";

export default function WorkGroupWorks(){

    const params = useParams<{id: number}>();

    const {data, isLoading} = useQuery(
        ['workGroup', {id: params.id}],
        () => getWorkGroup(params.id)
    );

    return (
        <View
            style={{
                flex: 1
            }}
        >

        </View>
    )
}