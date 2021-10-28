import React, {useEffect, useState} from 'react';
import {FlatList, View} from 'react-native';
import {dashboardStyle} from '../../styles/Dashboard';
import DashboardItem from './Item';
import Splitter from '../Splitter/Splitter';
import Icon from '../Icon/Icon';
import {dashboard} from '../../api/dashboard';

export default function Dashboard() {
  const [data, setData] = useState([]);
  const [isRefreshing, setIsRefreshing] = useState(true);

  async function fetch() {
    try {
      const data = await dashboard();

      setData(data.data as any);
      setIsRefreshing(false);
    } catch (e) {
      setIsRefreshing(false);
      console.log(e);
    }
  }

  useEffect(() => {
    fetch();
  }, []);

  function renderItem(data: any) {
    if (data.item.type === 'splitter') {
      return (
        <Splitter beforeText={<Icon name="event" size={18} />}>
          {data.item.title}
        </Splitter>
      );
    }

    return <DashboardItem {...data} />;
  }

  function refresh() {
    setIsRefreshing(true);

    fetch();
  }

  return (
    <View style={dashboardStyle.container}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        onRefresh={refresh}
        refreshing={isRefreshing}
      />
    </View>
  );
}
