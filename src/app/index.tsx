import { StyleSheet, Text, View } from 'react-native';

import { getUnreadAnnouncements } from '../services/announcementUtils';
import type { Announcement } from '../types/announcement';

const sampleAnnouncements: Announcement[] = [
  { id: 'a1', title: 'Enrollment reminders', category: 'Academic', read: false },
  { id: 'a2', title: 'Campus orientation', category: 'Events', read: true },
  { id: 'a3', title: 'Library schedule', category: 'Notice', read: false },
];

export default function HomeScreen() {
  const unreadAnnouncements = getUnreadAnnouncements(sampleAnnouncements);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Campus Connect</Text>
      <Text style={styles.subtitle}>One campus. Connected students.</Text>
      <Text style={styles.welcome}>Welcome to the Week 1 project foundation.</Text>
      <Text style={styles.unreadCount}>
        Unread announcements: {unreadAnnouncements.length}
      </Text>
      <View style={styles.announcementList}>
        {sampleAnnouncements.map((item) => (
          <Text key={item.id} style={styles.announcement}>
            {item.title} · {item.category} {item.read ? '· Read' : '· Unread'}
          </Text>
        ))}
      </View>
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
    gap: 8,
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
    marginBottom: 16,
  },
  unreadCount: {
    fontSize: 18,
    fontWeight: '700',
    color: '#147D75',
  },
  announcementList: {
    width: '100%',
    gap: 8,
    marginTop: 8,
  },
  announcement: {
    padding: 12,
    borderRadius: 10,
    backgroundColor: '#FFFFFF',
    color: '#172B4D',
  },
});