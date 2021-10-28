import React, {useState} from 'react';
import {FlatList, ScrollView, TouchableOpacity, View} from 'react-native';
import {ActivityIndicator, Button, Text} from 'react-native-paper';
import {useQuery, useQueryClient} from 'react-query';
import {useHistory, useParams} from 'react-router-native';
import {getWorkGroup, removeWorkGroup} from '../../api/workGroup';
import {info} from '../../api/auth';
import {workGroupStyle} from '../../styles/WorkGroup';
import Icon from '../Icon/Icon';
import {useTranslation} from 'react-i18next';

export default function SingleWorkGroup() {
  const {t} = useTranslation();
  const params = useParams<{id: number}>();
  const history = useHistory();
  const client = useQueryClient();

  const {data: userData, isLoading: userIsLoading} = useQuery('userInfo', info);

  const {data, isLoading} = useQuery(['workGroup', {id: params.id}], () =>
    getWorkGroup(params.id),
  );

  async function add() {
    history.push('/work/add');
  }

  async function works() {
    history.push(`/workgroup/${data?.data.id}/works`);
  }

  async function edit() {
    history.push(`/workgroup/${data?.data.id}/edit`);
  }

  async function remove() {
    try {
      await removeWorkGroup(data?.data.id);

      client.invalidateQueries('workGroup');

      history.push('/workgroup');
    } catch (e) {}
  }

  return (
    <ScrollView
      style={{
        flex: 1,
      }}>
      <View
        style={{
          width: '100%',
          alignItems: 'center',
        }}>
        {(isLoading || userIsLoading) && <ActivityIndicator size={25} />}
        {!isLoading && !userIsLoading && (
          <View
            style={{
              width: '100%',
              padding: 10,
            }}>
            <View
              style={{
                width: '100%',
                flexDirection: 'row',
                marginTop: 10,
              }}>
              <View
                style={{
                  width: 20,
                  height: 20,
                  borderRadius: 8,
                  backgroundColor: data?.data.color,
                }}
              />
              <View
                style={{
                  marginLeft: 15,
                }}>
                <Text style={{fontSize: 18}}>{data?.data.name}</Text>
                <Text>{data?.data.isPrivate ? t('private') : t('public')}</Text>
              </View>
            </View>
            {data?.data.creatorId === userData?.data.id && (
              <View style={workGroupStyle.icons}>
                <Action icon={<Icon name={'add'} size={25} />} click={add} />
                <Action icon={<Icon name={'edit'} size={25} />} click={edit} />
                <Action
                  icon={<Icon name={'delete'} color={'red'} size={25} />}
                  click={remove}
                />
              </View>
            )}
            <Link
              title={t('works')}
              click={works}
              icon={<Icon name={'arrow-right'} size={25} />}
            />
            <Link
              title={t('users')}
              icon={<Icon name={'arrow-right'} size={25} />}
            />
          </View>
        )}
      </View>
    </ScrollView>
  );
}

interface Props {
  icon: any;
  click: any;
}

function Action(props: Props) {
  return <Button onPress={props.click}>{props.icon}</Button>;
}

function Link(props: {title: string; icon: any; click?: any}) {
  return (
    <TouchableOpacity
      onPress={props.click}
      style={{
        marginTop: 15,
        padding: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderColor: 'white',
        borderStyle: 'solid',
        borderWidth: 1,
        borderRadius: 8,
      }}>
      <Text
        style={{
          fontSize: 15,
        }}>
        {props.title}
      </Text>
      {props.icon}
    </TouchableOpacity>
  );
}
