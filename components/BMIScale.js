import React from 'react';
import { View, Text } from 'react-native';
import { styles } from '../styles/globalStyles';

export default function BMIScale({ bmi }) {
  const getIndicatorPosition = () => {
    // Scale ranges: <18.5, 18.5-25, 25-30, 30+
    if (bmi < 18.5) return (bmi / 18.5) * 20; // 0-20%
    else if (bmi < 25) return 20 + ((bmi - 18.5) / 6.5) * 30; // 20-50%
    else if (bmi < 30) return 50 + ((bmi - 25) / 5) * 25; // 50-75%
    else return Math.min(75 + ((bmi - 30) / 10) * 25, 100); // 75-100%
  };

  const position = getIndicatorPosition();

  return (
    <View style={styles.scaleContainer}>
      <Text style={styles.scaleTitle}>BMI Scale</Text>
      <View style={styles.scaleBar}>
        <View style={[styles.scaleSegment, { backgroundColor: '#4FC3F7', flex: 1 }]} />
        <View style={[styles.scaleSegment, { backgroundColor: '#66BB6A', flex: 1.5 }]} />
        <View style={[styles.scaleSegment, { backgroundColor: '#FFA726', flex: 1 }]} />
        <View style={[styles.scaleSegment, { backgroundColor: '#EF5350', flex: 1 }]} />
      </View>
      <View style={[styles.scaleIndicator, { left: `${position}%` }]}>
        <View style={styles.scalePointer} />
        <Text style={styles.scaleValue}>{bmi}</Text>
      </View>
      <View style={styles.scaleLabels}>
        <Text style={styles.scaleLabel}>Underweight</Text>
        <Text style={styles.scaleLabel}>Normal</Text>
        <Text style={styles.scaleLabel}>Overweight</Text>
        <Text style={styles.scaleLabel}>Obese</Text>
      </View>
    </View>
  );
}
