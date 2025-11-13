import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0b0c10',
  },
  scrollContainer: {
    padding: 20,
    paddingBottom: 40,
  },
  header: {
    marginBottom: 20,
    alignItems: 'center',
  },
  mainTitle: {
    color: '#66fcf1',
    fontSize: 36,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 5,
  },
  subtitle: {
    color: '#c5c6c7',
    fontSize: 16,
    textAlign: 'center',
  },
  card: {
    backgroundColor: '#1f2833',
    borderRadius: 20,
    padding: 25,
    width: '100%',
    shadowColor: '#66fcf1',
    shadowOpacity: 0.3,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 4 },
    elevation: 8,
    marginBottom: 20,
  },
  
  // Unit Toggle
  unitToggleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  unitLabel: {
    color: '#c5c6c7',
    fontSize: 16,
    fontWeight: '600',
  },
  toggleButtons: {
    flexDirection: 'row',
    backgroundColor: '#0b0c10',
    borderRadius: 10,
    padding: 3,
  },
  toggleButton: {
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  toggleButtonActive: {
    backgroundColor: '#45a29e',
  },
  toggleText: {
    color: '#888',
    fontSize: 14,
    fontWeight: '600',
  },
  toggleTextActive: {
    color: '#fff',
  },

  // Gender Selection
  genderContainer: {
    flexDirection: 'row',
    gap: 10,
    marginBottom: 20,
  },
  genderButton: {
    flex: 1,
    backgroundColor: '#0b0c10',
    borderRadius: 12,
    padding: 15,
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#0b0c10',
  },
  genderButtonActive: {
    borderColor: '#45a29e',
    backgroundColor: '#45a29e20',
  },
  genderText: {
    color: '#888',
    fontSize: 16,
    fontWeight: '600',
  },
  genderTextActive: {
    color: '#66fcf1',
  },

  // Input Fields
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#0b0c10',
    borderRadius: 12,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#45a29e',
    overflow: 'hidden',
  },
  inputIcon: {
    fontSize: 20,
    paddingLeft: 15,
  },
  input: {
    flex: 1,
    padding: 15,
    fontSize: 16,
    color: '#fff',
  },
  inputWithIcon: {
    paddingLeft: 10,
  },

  // Buttons
  buttonRow: {
    flexDirection: 'row',
    gap: 10,
    marginTop: 10,
  },
  button: {
    flex: 1,
    borderRadius: 12,
    padding: 15,
    alignItems: 'center',
  },
  calculateButton: {
    backgroundColor: '#45a29e',
  },
  resetButton: {
    backgroundColor: '#666',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },

  // BMI Scale
  scaleContainer: {
    marginTop: 20,
    marginBottom: 15,
  },
  scaleTitle: {
    color: '#c5c6c7',
    fontSize: 14,
    marginBottom: 10,
    textAlign: 'center',
    fontWeight: '600',
  },
  scaleBar: {
    height: 30,
    flexDirection: 'row',
    borderRadius: 15,
    overflow: 'hidden',
    marginBottom: 5,
  },
  scaleSegment: {
    height: '100%',
  },
  scaleIndicator: {
    position: 'absolute',
    top: 30,
    alignItems: 'center',
    transform: [{ translateX: -20 }],
  },
  scalePointer: {
    width: 0,
    height: 0,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderLeftWidth: 8,
    borderRightWidth: 8,
    borderBottomWidth: 12,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: '#fff',
    marginBottom: 3,
  },
  scaleValue: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
    backgroundColor: '#1f2833',
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 8,
  },
  scaleLabels: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 45,
  },
  scaleLabel: {
    color: '#888',
    fontSize: 11,
    flex: 1,
    textAlign: 'center',
  },

  // Result Card
  resultBox: {
    marginTop: 20,
    backgroundColor: '#0b0c10',
    borderRadius: 12,
    padding: 20,
    borderWidth: 1,
    borderColor: '#45a29e',
  },
  bmiValueContainer: {
    alignItems: 'center',
    marginBottom: 15,
  },
  resultLabel: {
    color: '#888',
    fontSize: 14,
    marginBottom: 5,
  },
  bmiValue: {
    fontSize: 48,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  statusBadge: {
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderRadius: 20,
  },
  statusText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  divider: {
    height: 1,
    backgroundColor: '#45a29e',
    marginVertical: 15,
  },
  detailsContainer: {
    marginBottom: 15,
  },
  detailRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  detailLabel: {
    color: '#888',
    fontSize: 15,
  },
  detailValue: {
    color: '#66fcf1',
    fontSize: 15,
    fontWeight: '600',
  },
  tipContainer: {
    flexDirection: 'row',
    backgroundColor: '#1f2833',
    padding: 12,
    borderRadius: 10,
    alignItems: 'center',
  },
  tipIcon: {
    fontSize: 20,
    marginRight: 10,
  },
  tipText: {
    color: '#c5c6c7',
    fontSize: 13,
    flex: 1,
    lineHeight: 18,
  },

  // History
  historyHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  historyTitle: {
    color: '#66fcf1',
    fontSize: 20,
    fontWeight: 'bold',
  },
  clearButton: {
    color: '#EF5350',
    fontSize: 14,
    fontWeight: '600',
  },
  historyItem: {
    flexDirection: 'row',
    backgroundColor: '#0b0c10',
    borderRadius: 10,
    padding: 15,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#45a29e',
  },
  historyLeft: {
    flex: 1,
    justifyContent: 'center',
  },
  historyBMI: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 3,
  },
  historyStatus: {
    color: '#888',
    fontSize: 12,
  },
  historyRight: {
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  historyDate: {
    color: '#c5c6c7',
    fontSize: 14,
    marginBottom: 3,
  },
  historyDetails: {
    color: '#888',
    fontSize: 11,
  },

  // Footer
  footer: {
    marginTop: 10,
    paddingHorizontal: 10,
  },
  footerText: {
    color: '#666',
    fontSize: 12,
    textAlign: 'center',
    fontStyle: 'italic',
    lineHeight: 18,
  },
});
