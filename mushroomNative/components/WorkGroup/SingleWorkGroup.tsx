import React from 'react';
import {ScrollView, TouchableOpacity, View} from 'react-native';
import {
  ActivityIndicator,
  Button,
  Text,
  Card,
  Title,
  Divider,
  Paragraph,
} from 'react-native-paper';
import {useQuery, useQueryClient} from 'react-query';
import {useHistory, useParams} from 'react-router-native';
import {getWorkGroup, removeWorkGroup} from '../../api/workGroup';
import {info} from '../../api/auth';
import {workGroupStyle} from '../../styles/WorkGroup';
import Icon from '../Icon/Icon';
import {useTranslation} from 'react-i18next';
import {Work} from '../../types';
import Splitter from '../Splitter/Splitter';

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
            <Pins />
            <Works data={data} items={data?.data.works?.slice(-5) || []} />
          </View>
        )}
      </View>
    </ScrollView>
  );
}

function Works(props: {items: Work[]; data: any}) {
  const {t} = useTranslation();
  const history = useHistory();

  async function works() {
    history.push(`/workgroup/${props.data?.data?.id}/works`);
  }

  return (
    <>
      <Splitter beforeText={<Icon name={'article'} size={20} />}>
        {t('works')}
      </Splitter>
      {props.items.map((e, i) => {
        return (
          <Card style={{marginTop: 10}} key={i}>
            <Card.Content>
              <Title>{e.title}</Title>
              <Paragraph>{e.description}</Paragraph>
            </Card.Content>
          </Card>
        );
      })}
      <Button
        compact={true}
        onPress={works}
        style={{marginTop: 10}}
        mode={'contained'}
        icon={() => <Icon name={'arrow-left'} size={25} />}>
        {t('allWorks')}
      </Button>
    </>
  );
}

function Pins() {
  const {t} = useTranslation();

  return (
    <>
      <Splitter beforeText={<Icon name={'push-pin'} size={20} />}>
        {t('pins')}
      </Splitter>
    </>
  );
}

interface Props {
  icon: any;
  click: any;
}

function Action(props: Props) {
  return <Button onPress={props.click}>{props.icon}</Button>;
}
