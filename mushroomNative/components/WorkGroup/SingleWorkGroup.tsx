import React, {useState} from "react";
import {FlatList, TouchableOpacity, View} from "react-native";
import {ActivityIndicator, Button, Text} from "react-native-paper";
import {useQuery, useQueryClient} from "react-query";
import {useHistory, useParams} from 'react-router-native';
import {getWorkGroup, removeWorkGroup} from "../../api/workGroup";
import {info} from "../../api/auth";
import {workGroupStyle} from "../../styles/WorkGroup";
import Icon from "../Icon/Icon";
import {dashboardStyle} from "../../styles/Dashboard";
import {removeWork} from "../../api/work";

export default function SingleWorkGroup(){

    const params = useParams<{id: number}>();
    const history = useHistory();
    const client = useQueryClient();

    const {data: userData, isLoading: userIsLoading} = useQuery('userInfo', info)

    const {data, isLoading} = useQuery(
        ['workGroup', {id: params.id}],
        () => getWorkGroup(params.id)
    );

    async function add(){
        history.push('/work/add')
    }

    async function edit(){
        history.push(`/workgroup/${data?.data.id}/edit`)
    }

    async function remove(){
        try {
            await removeWorkGroup(data?.data.id);

            client.invalidateQueries('workGroup')

            history.push('/workgroup')
        } catch (e) {

        }
    }

    function renderItem(inData: any){

        return <Item {...inData} />
    }

    return (
        <View style={{
            flex: 1,
            alignItems: 'center'
        }}>
            {(isLoading || userIsLoading) && (
                <ActivityIndicator size={25}/>
            )}
            {!isLoading && !userIsLoading && (
                <View
                    style={{
                        width: '100%',
                        padding: 10,
                    }}
                >
                    <Text style={{fontSize: 15, marginLeft: 15}}>
                        {data?.data.name}
                    </Text>
                    {data?.data.creatorId === userData?.data.id && (
                        <View style={workGroupStyle.icons}>
                            <Action
                                icon={<Icon name={"add"} size={25}/>}
                                click={add}
                            />
                            <Action
                                icon={<Icon name={"edit"} size={25}/>}
                                click={edit}
                            />
                            <Action
                                icon={<Icon name={"delete"} color={'red'} size={25}/>}
                                click={remove}
                            />
                        </View>
                    )}
                </View>
            )}
            {!isLoading && (
                <View style={{
                    width: '100%',
                    flex: 1
                }}>
                    <FlatList
                        data={data?.data.works}
                        renderItem={renderItem}
                        keyExtractor={item => item.id}
                    />
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

function Item({item}: any){

    const [loading, setLoading] = useState(false);
    const client = useQueryClient();

    async function remove(){
        setLoading(true)
        try {
            await removeWork(item.id);

            await client.invalidateQueries('workGroup');
            setLoading(false)
        } catch (e){
            setLoading(false)
        }
    }

    return (
        <View
            style={dashboardStyle.list}
        >
            <View style={[
                dashboardStyle.item,
                {
                    borderColor: 'white',
                    borderWidth: 1
                }
            ]}>
                <Text style={[
                    dashboardStyle.itemTitle,
                ]}>
                    {item.title}
                </Text>
                <Text>
                    {item.description}
                </Text>
                <Text
                    style={[
                        dashboardStyle.daysLeft,
                    ]}
                >
                    {new Date(item.dueDate).toDateString()}
                </Text>
                <View>
                    <Button
                        loading={loading}
                        disabled={loading}
                        icon={'delete'}
                        color={'red'}
                        onPress={remove}
                    />
                </View>
            </View>
        </View>
    )
}