import React from "react";
import {TouchableOpacity, View} from "react-native";
import {ActivityIndicator, Text} from "react-native-paper";
import {useQuery, useQueryClient} from "react-query";
import {useHistory, useParams} from 'react-router-native';
import {getWorkGroup, removeWorkGroup} from "../../api/workGroup";
import {info} from "../../api/auth";
import {workGroupStyle} from "../../styles/WorkGroup";
import Icon from "../Icon/Icon";

export default function SingleWorkGroup(){

    const params = useParams<{id: number}>();
    const history = useHistory();
    const client = useQueryClient();

    const {data: userData} = useQuery('userInfo', info)

    const {data, isLoading} = useQuery(
        ['workGroup', {id: params.id}],
        () => getWorkGroup(params.id)
    );

    async function add(){
        history.push('/work/add')
    }

    async function remove(){
        try {
            await removeWorkGroup(data?.data.id);

            client.invalidateQueries('workGroup')

            history.push('/workgroup')
        } catch (e) {

        }
    }

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
                        padding: 10,
                    }}
                >
                    <Text style={{fontSize: 15}}>
                        {data?.data.name}
                    </Text>
                    {data?.data.creatorId === userData?.data.id && (
                        <View style={workGroupStyle.icons}>
                            <Action
                                icon={<Icon name={"add"} size={25}/>}
                                click={() => console.log('add')}
                            />
                            <Action
                                icon={<Icon name={"edit"} size={25}/>}
                                click={() => console.log('edit')}
                            />
                            <Action
                                icon={<Icon name={"delete"} color={'red'} size={25}/>}
                                click={remove}
                            />
                        </View>
                    )}
                </View>
            )}
        </View>
    )
}

interface Props{
    icon: any
    click: any
}

function Action(props: Props){

    return (
        <TouchableOpacity
            onPress={props.click}
            style={{
                padding: 10
            }}
        >
            {props.icon}
        </TouchableOpacity>
    )
}