import React from 'react';
import {
  Button,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

function App(): React.JSX.Element {
  return (
    <SafeAreaView style={styles.container} testID="screen-root">
      <StatusBar barStyle="dark-content" />
      <Text style={styles.title} testID="hero-title">
        Hello accessibility repro
      </Text>
      <Text style={styles.subtitle} testID="hero-subtitle">
        React Native 0.85.3 • iOS 26.2
      </Text>
      <TextInput
        style={styles.input}
        testID="email-input"
        accessibilityLabel="Email"
        placeholder="Enter your email"
      />
      <View style={styles.buttonWrapper} testID="button-wrapper">
        <Button title="Press me" onPress={() => {}} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
    gap: 16,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
  },
  input: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 14,
  },
  buttonWrapper: {
    width: '100%',
  },
});

export default App;
