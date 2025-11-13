import React from 'react';
import { View, TextInput, Text } from 'react-native';
import { styles } from '../styles/globalStyles';

export default function InputField({ placeholder, value, onChangeText, icon }) {
  return (
    <View style={styles.inputContainer}>
      {icon && <Text style={styles.inputIcon}>{icon}</Text>}
      <TextInput
        style={[styles.input, icon && styles.inputWithIcon]}
        placeholder={placeholder}
        placeholderTextColor="#888"
        keyboardType="numeric"
        value={value}
        onChangeText={onChangeText}
      />
    </View>
  );
}
