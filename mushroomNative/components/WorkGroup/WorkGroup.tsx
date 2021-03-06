import React from 'react';
import {ScrollView, View} from 'react-native';
import {workGroupStyle} from '../../styles/WorkGroup';
import Splitter from '../Splitter/Splitter';
import GroupItem from './GroupItem';
import {useHistory} from 'react-router-native';
import {useQuery, useQueryClient} from 'react-query';
import {allWorkGroups} from '../../api/workGroup';
import {ActivityIndicator} from 'react-native-paper';
import Icon from '../Icon/Icon';
import {allSubs, unsub} from '../../api/sub';
import {useTranslation} from 'react-i18next';

export default function WorkGroup() {
  const {t} = useTranslation();

  const {isFetching, data} = useQuery(['workGroup'], allWorkGroups);
  const {isFetching: subFetch, data: subData} = useQuery(['sub'], allSubs);

  const client = useQueryClient();
  const history = useHistory();

  function accountGroup() {
    history.push('/workgroup/add');
  }

  function groupClick(id: number) {
    history.push('/workgroup/' + id);
  }

  async function doUnsub(id: number) {
    try {
      await unsub(id);
      client.invalidateQueries('sub');
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <ScrollView style={workGroupStyle.container}>
      <View
        style={{
          alignItems: 'center',
        }}>
        <Splitter>{t('offlineGroup')}</Splitter>

        <GroupItem icon={<Icon name="add" size={25} />}>
          {t('add')} (Soon...)
        </GroupItem>

        <Splitter beforeText={isFetching && <ActivityIndicator size={15} />}>
          {t('accountGroup')}
        </Splitter>

        <GroupItem click={accountGroup} icon={<Icon name="add" size={25} />}>
          {t('add')}
        </GroupItem>

        {data?.data.map((e: any, i: number) => {
          return (
            <GroupItem
              icon={<Icon name={e.isPrivate ? 'lock' : 'public'} size={25} />}
              color={e.color}
              click={() => groupClick(e.id)}
              key={i}>
              {e.name}
            </GroupItem>
          );
        })}

        <Splitter beforeText={subFetch && <ActivityIndicator size={15} />}>
          {t('joinedGroup')}
        </Splitter>

        {subData?.data.map((e: any, i: number) => {
          return (
            <GroupItem
              color={e.color}
              click={() => groupClick(e.id)}
              actions={[
                {
                  click: () => doUnsub(e.id),
                  icon: <Icon size={15} name="close" />,
                },
              ]}
              key={i}>
              {e.name}
            </GroupItem>
          );
        })}
      </View>
    </ScrollView>
  );
}
