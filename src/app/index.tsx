import { StyleSheet, Text, View } from 'react-native';

import AnnouncementPanel from '../components/AnnouncementPanel';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Campus Connect</Text>
      <Text style={styles.subtitle}>One campus. Connected students.</Text>
      <Text style={styles.welcome}>Welcome to the Week 1 project foundation.</Text>
      <AnnouncementPanel />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
    backgroundColor: '#F4F7FB',
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    marginBottom: 4,
    color: '#172B4D',
  },
  subtitle: {
    fontSize: 17,
    color: '#526579',
  },
  welcome: {
    fontSize: 14,
    color: '#526579',
    marginBottom: 0,
  },
});