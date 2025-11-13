import React from 'react';
import { View, Text, FlatList } from 'react-native';
import { styles } from '../styles/globalStyles';

export default function HistoryList({ history }) {
  const getStatusColor = (status) => {
    if (status === 'Underweight') return '#4FC3F7';
    else if (status === 'Normal weight') return '#66BB6A';
    else if (status === 'Overweight') return '#FFA726';
    else return '#EF5350';
  };

  const renderItem = ({ item }) => (
    <View style={styles.historyItem}>
      <View style={styles.historyLeft}>
        <Text style={[styles.historyBMI, { color: getStatusColor(item.status) }]}>{item.bmi}</Text>
        <Text style={styles.historyStatus}>{item.status}</Text>
      </View>
      <View style={styles.historyRight}>
        <Text style={styles.historyDate}>{item.date}</Text>
        <Text style={styles.historyDetails}>
          {item.weight} × {item.height} ({item.unit === 'metric' ? 'kg/cm' : 'lbs/in'})
        </Text>
      </View>
    </View>
  );

  return (
    <FlatList
      data={history}
      renderItem={renderItem}
      keyExtractor={(item) => item.id.toString()}
      scrollEnabled={false}
    />
  );
}
