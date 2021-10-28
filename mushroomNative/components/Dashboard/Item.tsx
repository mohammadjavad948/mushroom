import React from 'react';
import {Text, View} from 'react-native';
import {dashboardStyle} from '../../styles/Dashboard';
import getTextColor from '../../helper/textColor';
import {useTranslation} from 'react-i18next';

export default function DashboardItem({item}: any) {
  const {t} = useTranslation();

  return (
    <View style={dashboardStyle.list}>
      <View
        style={[
          dashboardStyle.item,
          {
            backgroundColor: item.group?.color,
          },
        ]}>
        <Text
          style={[
            dashboardStyle.itemTitle,
            {
              color: getTextColor(item.group?.color),
            },
          ]}>
          {item.title}
        </Text>
        <Text
          style={[
            {
              color: getTextColor(item.group?.color),
              opacity: 0.7,
            },
          ]}>
          {item.description}
        </Text>
        <Text
          style={[
            dashboardStyle.daysLeft,
            {
              color: getTextColor(item.group?.color),
            },
          ]}>
          {new Date(item.dueDate).toDateString()}
        </Text>
        <Text
          style={[
            dashboardStyle.daysLeft,
            {
              color: getTextColor(item.group?.color),
            },
          ]}>
          {t('from')} {item.group.name}
        </Text>
      </View>
    </View>
  );
}
