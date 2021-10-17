import React from "react";
import {View} from "react-native";
import {ActivityIndicator, Text} from "react-native-paper";
import {useQuery} from "react-query";
import {useParams} from 'react-router-native';
import {getWorkGroup} from "../../api/workGroup";

export default function SingleWorkGroup(){

    const params = useParams<{id: number}>();

    const {data, isLoading} = useQuery(
        ['workGroup', {id: params.id}],
        () => getWorkGroup(params.id)
    )

    console.log(data?.data)

    return (
        <View style={{
            flex: 1,
            alignItems: 'center'
        }}>
            {isLoading && (
                <ActivityIndicator size={25}/>
            )}
            {!isLoading && (
                <View
                    style={{
                        width: '100%',
                        padding: 10
                    }}
                >
                    <Text>{data?.data.name}</Text>
                </View>
            )}
        </View>
    )
}