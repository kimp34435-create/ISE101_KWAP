import { Stack, useLocalSearchParams } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';

import { announcements } from '../../services/announcements';

export default function AnnouncementDetailsScreen() {
  const { id } = useLocalSearchParams<{ id?: string }>();
  const announcement =
    typeof id === 'string' ? announcements.find((item) => item.id === id) : undefined;

  if (!announcement) {
    return (
      <>
        <Stack.Screen options={{ title: 'Announcement not found' }} />
        <View style={styles.container}>
          <Text style={styles.title}>Announcement not found</Text>
          <Text style={styles.message}>
            This announcement may have been removed or the link may be incorrect.
          </Text>
        </View>
      </>
    );
  }

  return (
    <>
      <Stack.Screen options={{ title: 'Announcement' }} />
      <View style={styles.container}>
        <Text style={styles.category}>{announcement.category}</Text>
        <Text style={styles.title}>{announcement.title}</Text>
        <Text style={styles.message}>Announcement ID: {announcement.id}</Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    gap: 12,
    backgroundColor: '#F4F7FB',
  },
  category: {
    fontSize: 14,
    fontWeight: '600',
    color: '#2563EB',
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    color: '#172B4D',
  },
  message: {
    fontSize: 16,
    lineHeight: 24,
    color: '#526579',
  },
});
