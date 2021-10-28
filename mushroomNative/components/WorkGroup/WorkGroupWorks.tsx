import React, {useState} from 'react';
import {FlatList, View} from 'react-native';
import {useQuery, useQueryClient} from 'react-query';
import {getWorkGroup} from '../../api/workGroup';
import {useParams} from 'react-router-native';
import {removeWork} from '../../api/work';
import {dashboardStyle} from '../../styles/Dashboard';
import {Button, Text} from 'react-native-paper';

export default function WorkGroupWorks() {
  const params = useParams<{id: number}>();

  const {data, isLoading} = useQuery(['workGroup', {id: params.id}], () =>
    getWorkGroup(params.id),
  );

  function renderItem(inData: any) {
    return <Item {...inData} />;
  }

  return (
    <View
      style={{
        flex: 1,
        width: '100%',
      }}>
      {!isLoading && (
        <FlatList
          data={data?.data.works}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      )}
    </View>
  );
}

function Item({item}: any) {
  const [loading, setLoading] = useState(false);
  const client = useQueryClient();

  async function remove() {
    setLoading(true);
    try {
      await removeWork(item.id);

      await client.invalidateQueries('workGroup');
      setLoading(false);
    } catch (e) {
      setLoading(false);
    }
  }

  return (
    <View style={dashboardStyle.list}>
      <View
        style={[
          dashboardStyle.item,
          {
            borderColor: 'white',
            borderWidth: 1,
          },
        ]}>
        <Text style={[dashboardStyle.itemTitle]}>{item.title}</Text>
        <Text>{item.description}</Text>
        <Text style={[dashboardStyle.daysLeft]}>
          {new Date(item.dueDate).toDateString()}
        </Text>
        <View
          style={{
            marginTop: 10,
            justifyContent: 'center',
          }}>
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
  );
}
