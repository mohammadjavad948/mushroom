import React, {useState} from 'react';
import {FlatList, Text, TouchableOpacity, View} from 'react-native';
import {ActivityIndicator, Button, TextInput} from 'react-native-paper';
import {search} from '../../api/search';
import {dashboardStyle} from '../../styles/Dashboard';
import {useHistory} from 'react-router-native';
import {allSubs, sub} from '../../api/sub';
import {useQuery, useQueryClient} from 'react-query';
import getTextColor from '../../helper/textColor';
import {useTranslation} from 'react-i18next';

export default function Search() {
  const {t} = useTranslation();
  const [text, setText] = useState('');
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  async function doSearch() {
    setLoading(true);
    try {
      const res = await search(text);
      setData(res.data as any);
      setLoading(false);
    } catch (e) {
      setLoading(false);
    }
  }

  function renderItem(data: any) {
    return <Item {...data} />;
  }

  return (
    <View style={{flex: 1, alignItems: 'center'}}>
      <TextInput
        style={{
          width: '95%',
        }}
        value={text}
        onChangeText={(e: string) => setText(e)}
        mode={'outlined'}
        label={t('search')}
        right={<TextInput.Icon onPress={doSearch} name={'search'} />}
      />
      <View
        style={[
          dashboardStyle.container,
          {
            width: '100%',
          },
        ]}>
        {loading && <ActivityIndicator size={20} />}
        {!loading && (
          <FlatList
            data={data}
            renderItem={renderItem}
            keyExtractor={item => item.id}
          />
        )}
      </View>
    </View>
  );
}

function Item({item}: any) {
  const [loading, setLoading] = useState(false);
  const {data: subData} = useQuery(['sub'], allSubs);
  const history = useHistory();
  const client = useQueryClient();

  const {t} = useTranslation();

  async function doSub() {
    setLoading(true);
    try {
      await sub(item.id);
      client.invalidateQueries('sub');
      setLoading(false);
    } catch (e) {
      setLoading(false);
    }
  }

  function click() {
    history.push('/workgroup/' + item.id);
  }

  return (
    <TouchableOpacity style={dashboardStyle.list} onPress={click}>
      <View
        style={[
          dashboardStyle.item,
          {
            backgroundColor: item.color,
          },
        ]}>
        <Text
          style={[
            dashboardStyle.itemTitle,
            {
              color: getTextColor(item.color),
            },
          ]}>
          {item.name}
        </Text>
        {subData?.data?.findIndex((e: any) => e.id === item.id) === -1 && (
          <Button
            onPress={doSub}
            loading={loading}
            disabled={loading}
            mode={'contained'}
            icon={'check'}
            color={'black'}>
            {t('join')}
          </Button>
        )}
      </View>
    </TouchableOpacity>
  );
}
