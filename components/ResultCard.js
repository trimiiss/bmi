import React from 'react';
import { View, Text } from 'react-native';
import { styles } from '../styles/globalStyles';

export default function ResultCard({ bmi, status, idealWeight, currentWeight, isMetric, age }) {
  const getStatusColor = () => {
    const bmiValue = parseFloat(bmi);
    if (bmiValue < 18.5) return '#4FC3F7';
    else if (bmiValue < 25) return '#66BB6A';
    else if (bmiValue < 30) return '#FFA726';
    else return '#EF5350';
  };

  const getHealthTip = () => {
    const bmiValue = parseFloat(bmi);
    if (bmiValue < 18.5) return 'Consider increasing caloric intake and strength training';
    else if (bmiValue < 25) return 'Great! Maintain your healthy lifestyle';
    else if (bmiValue < 30) return 'Consider balanced diet and regular exercise';
    else return 'Consult a healthcare provider for personalized advice';
  };

  const weightDiff = idealWeight && currentWeight ? 
    (parseFloat(currentWeight) - parseFloat(idealWeight)).toFixed(1) : null;

  const unit = isMetric ? 'kg' : 'lbs';

  return (
    <View style={styles.resultBox}>
      <View style={styles.bmiValueContainer}>
        <Text style={styles.resultLabel}>Your BMI</Text>
        <Text style={[styles.bmiValue, { color: getStatusColor() }]}>{bmi}</Text>
        <View style={[styles.statusBadge, { backgroundColor: getStatusColor() }]}>
          <Text style={styles.statusText}>{status}</Text>
        </View>
      </View>

      <View style={styles.divider} />

      <View style={styles.detailsContainer}>
        {idealWeight && (
          <View style={styles.detailRow}>
            <Text style={styles.detailLabel}>Ideal Weight:</Text>
            <Text style={styles.detailValue}>{idealWeight} {unit}</Text>
          </View>
        )}
        
        {weightDiff && (
          <View style={styles.detailRow}>
            <Text style={styles.detailLabel}>Difference:</Text>
            <Text style={[styles.detailValue, { color: Math.abs(weightDiff) < 5 ? '#66BB6A' : '#FFA726' }]}>
              {weightDiff > 0 ? '+' : ''}{weightDiff} {unit}
            </Text>
          </View>
        )}

        <View style={styles.detailRow}>
          <Text style={styles.detailLabel}>Healthy Range:</Text>
          <Text style={styles.detailValue}>18.5 - 24.9</Text>
        </View>
      </View>

      <View style={styles.tipContainer}>
        <Text style={styles.tipIcon}>💡</Text>
        <Text style={styles.tipText}>{getHealthTip()}</Text>
      </View>
    </View>
  );
}
