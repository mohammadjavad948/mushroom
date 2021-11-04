import React, {useState} from 'react';
import {FlatList, View} from 'react-native';
import {useQuery, useQueryClient} from 'react-query';
import {getWorkGroup} from '../../api/workGroup';
import {useParams} from 'react-router-native';
import {removeWork} from '../../api/work';
import {dashboardStyle} from '../../styles/Dashboard';
import {Text} from 'react-native-paper';
import { Button, Card, Title, Paragraph } from 'react-native-paper';
import {useTranslation} from "react-i18next";

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
    const {t} = useTranslation();
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
        <Card style={{width: '95%'}}>
            <Card.Content>
                <Title>{item.title}</Title>
                <Paragraph>{item.description}</Paragraph>
                <Text>{new Date(item.dueDate).toDateString()}</Text>
            </Card.Content>
            <Card.Actions>
                <Button
                    loading={loading}
                    disabled={loading}
                    icon={'delete'}
                    color={'red'}
                    onPress={remove}
                >
                    {t('remove')}
                </Button>
                <Button
                    loading={loading}
                    disabled={loading}
                    icon={'push-pin'}
                >
                    {t('unpin')}
                </Button>
            </Card.Actions>
        </Card>
    </View>
  );
}
