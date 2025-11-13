import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from '../styles/globalStyles';

export default function UnitToggle({ isMetric, onToggle }) {
  return (
    <View style={styles.unitToggleContainer}>
      <Text style={styles.unitLabel}>Units:</Text>
      <View style={styles.toggleButtons}>
        <TouchableOpacity
          style={[styles.toggleButton, isMetric && styles.toggleButtonActive]}
          onPress={() => onToggle(true)}
        >
          <Text style={[styles.toggleText, isMetric && styles.toggleTextActive]}>Metric</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.toggleButton, !isMetric && styles.toggleButtonActive]}
          onPress={() => onToggle(false)}
        >
          <Text style={[styles.toggleText, !isMetric && styles.toggleTextActive]}>Imperial</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
