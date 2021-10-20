import React, {useState} from "react";
import {FlatList, ScrollView, TouchableOpacity, View} from "react-native";
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
        <ScrollView
            style={{
                flex: 1
            }}
        >
            <View style={{
                width: '100%',
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
                        <View style={{
                            width: '100%',
                            flexDirection: "row",
                            marginTop: 10
                        }}>
                            <View
                                style={{
                                    width: 20,
                                    height: 20,
                                    borderRadius: 8,
                                    backgroundColor: data?.data.color
                                }}
                            />
                            <View
                                style={{
                                    marginLeft: 15
                                }}
                            >
                                <Text style={{fontSize: 18}}>
                                    {data?.data.name}
                                </Text>
                            </View>
                        </View>
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
                        <TouchableOpacity
                            style={{
                                marginTop: 15,
                                padding: 20,
                                flexDirection: "row",
                                alignItems: 'center',
                                justifyContent: 'space-between',
                                borderColor: 'white',
                                borderStyle: 'solid',
                                borderWidth: 1,
                                borderRadius: 8
                            }}
                        >
                            <Text
                                style={{
                                    fontSize: 15
                                }}
                            >
                                Works
                            </Text>
                            <Icon
                                name={"arrow-right"}
                                size={25}
                            />
                        </TouchableOpacity>
                    </View>
                )}
            </View>
        </ScrollView>
    )
}

interface Props{
    icon: any
    click: any
}

function Action(props: Props){

    return (
        <Button
            onPress={props.click}
        >
            {props.icon}
        </Button>
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