import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, KeyboardAvoidingView, Platform, ScrollView, Alert } from 'react-native';
import InputField from '../components/InputField';
import ResultCard from '../components/ResultCard';
import UnitToggle from '../components/UnitToggle';
import BMIScale from '../components/BMIScale';
import HistoryList from '../components/HistoryList';
import { styles } from '../styles/globalStyles';

export default function HomeScreen() {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('male');
  const [bmi, setBmi] = useState(null);
  const [status, setStatus] = useState('');
  const [isMetric, setIsMetric] = useState(true);
  const [history, setHistory] = useState([]);
  const [idealWeight, setIdealWeight] = useState(null);

  const getBMIStatus = (bmiValue) => {
    if (bmiValue < 18.5) return { status: 'Underweight', color: '#4FC3F7' };
    else if (bmiValue < 25) return { status: 'Normal weight', color: '#66BB6A' };
    else if (bmiValue < 30) return { status: 'Overweight', color: '#FFA726' };
    else return { status: 'Obese', color: '#EF5350' };
  };

  const calculateIdealWeight = (heightValue) => {
    // Using Devine formula
    const h = isMetric ? heightValue : heightValue * 2.54;
    const baseWeight = gender === 'male' ? 50 : 45.5;
    const factor = gender === 'male' ? 2.3 : 2.3;
    const inches = (h - 152.4) / 2.54;
    
    let ideal = baseWeight + (factor * Math.max(0, inches));
    if (!isMetric) ideal = ideal * 2.20462; // Convert to lbs
    
    return ideal.toFixed(1);
  };

  const calculateBMI = () => {
    if (!weight || !height) {
      Alert.alert('Missing Data', 'Please enter both weight and height');
      return;
    }

    let h = parseFloat(height);
    let w = parseFloat(weight);

    // Convert to metric if imperial
    if (!isMetric) {
      h = h * 2.54; // inches to cm
      w = w * 0.453592; // lbs to kg
    }

    h = h / 100; // cm to meters
    const bmiValue = (w / (h * h)).toFixed(1);
    const { status: bmiStatus, color } = getBMIStatus(parseFloat(bmiValue));
    
    setBmi(bmiValue);
    setStatus(bmiStatus);
    
    // Calculate ideal weight
    const ideal = calculateIdealWeight(parseFloat(height));
    setIdealWeight(ideal);

    // Add to history
    const newEntry = {
      id: Date.now(),
      bmi: bmiValue,
      status: bmiStatus,
      date: new Date().toLocaleDateString(),
      weight: weight,
      height: height,
      unit: isMetric ? 'metric' : 'imperial'
    };
    setHistory([newEntry, ...history.slice(0, 9)]); // Keep last 10 entries
  };

  const resetForm = () => {
    setWeight('');
    setHeight('');
    setAge('');
    setBmi(null);
    setStatus('');
    setIdealWeight(null);
  };

  const clearHistory = () => {
    Alert.alert(
      'Clear History',
      'Are you sure you want to clear all history?',
      [
        { text: 'Cancel', style: 'cancel' },
        { text: 'Clear', onPress: () => setHistory([]), style: 'destructive' }
      ]
    );
  };

  const weightLabel = isMetric ? 'Weight (kg)' : 'Weight (lbs)';
  const heightLabel = isMetric ? 'Height (cm)' : 'Height (inches)';

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <ScrollView 
        contentContainerStyle={styles.scrollContainer}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.header}>
          <Text style={styles.mainTitle}>💪 BMI Calculator</Text>
          <Text style={styles.subtitle}>Track your health journey</Text>
        </View>

        <View style={styles.card}>
          <UnitToggle isMetric={isMetric} onToggle={setIsMetric} />

          <View style={styles.genderContainer}>
            <TouchableOpacity 
              style={[styles.genderButton, gender === 'male' && styles.genderButtonActive]}
              onPress={() => setGender('male')}
            >
              <Text style={[styles.genderText, gender === 'male' && styles.genderTextActive]}>♂ Male</Text>
            </TouchableOpacity>
            <TouchableOpacity 
              style={[styles.genderButton, gender === 'female' && styles.genderButtonActive]}
              onPress={() => setGender('female')}
            >
              <Text style={[styles.genderText, gender === 'female' && styles.genderTextActive]}>♀ Female</Text>
            </TouchableOpacity>
          </View>

          <InputField
            placeholder={weightLabel}
            value={weight}
            onChangeText={setWeight}
            icon="⚖️"
          />

          <InputField
            placeholder={heightLabel}
            value={height}
            onChangeText={setHeight}
            icon="📏"
          />

          <InputField
            placeholder="Age (optional)"
            value={age}
            onChangeText={setAge}
            icon="🎂"
          />

          <View style={styles.buttonRow}>
            <TouchableOpacity 
              style={[styles.button, styles.calculateButton]} 
              onPress={calculateBMI}
            >
              <Text style={styles.buttonText}>Calculate BMI</Text>
            </TouchableOpacity>
            
            <TouchableOpacity 
              style={[styles.button, styles.resetButton]} 
              onPress={resetForm}
            >
              <Text style={styles.buttonText}>Reset</Text>
            </TouchableOpacity>
          </View>

          {bmi && (
            <>
              <BMIScale bmi={parseFloat(bmi)} />
              <ResultCard 
                bmi={bmi} 
                status={status} 
                idealWeight={idealWeight}
                currentWeight={weight}
                isMetric={isMetric}
                age={age}
              />
            </>
          )}
        </View>

        {history.length > 0 && (
          <View style={styles.card}>
            <View style={styles.historyHeader}>
              <Text style={styles.historyTitle}>📊 History</Text>
              <TouchableOpacity onPress={clearHistory}>
                <Text style={styles.clearButton}>Clear</Text>
              </TouchableOpacity>
            </View>
            <HistoryList history={history} />
          </View>
        )}

        <View style={styles.footer}>
          <Text style={styles.footerText}>BMI is a screening tool, consult healthcare provider for accurate assessment</Text>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
