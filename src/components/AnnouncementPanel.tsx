import { useState } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

import { getUnreadAnnouncements } from '../services/announcementUtils';
import type { Announcement } from '../types/announcement';
import AnnouncementCard from './AnnouncementCard';

const initialAnnouncements: Announcement[] = [
  { id: 'ANN-001', title: 'Enrollment Reminder', category: 'Academic', read: false },
  { id: 'ANN-002', title: 'Sports Festival Announcement', category: 'Events', read: false },
  { id: 'ANN-003', title: 'Campus Clean-up Drive', category: 'Notice', read: true },
];

export default function AnnouncementPanel() {
  const [announcements, setAnnouncements] = useState(initialAnnouncements);
  const unreadCount = getUnreadAnnouncements(announcements).length;

  const toggleAnnouncementRead = (id: string) => {
    setAnnouncements((currentAnnouncements) =>
      currentAnnouncements.map((announcement) =>
        announcement.id === id ? { ...announcement, read: !announcement.read } : announcement
      )
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Campus Announcements</Text>
      <Text style={styles.counter}>
        Total: {announcements.length} · Unread: {unreadCount}
      </Text>
      <ScrollView
        style={styles.list}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}>
        {announcements.map((announcement) => (
          <AnnouncementCard
            key={announcement.id}
            title={announcement.title}
            category={announcement.category}
            read={announcement.read}
            onMarkRead={() => toggleAnnouncementRead(announcement.id)}
          />
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flex: 1,
    marginTop: 24,
  },
  heading: {
    fontSize: 21,
    fontWeight: '700',
    marginBottom: 10,
    color: '#172B4D',
  },
  counter: {
    fontSize: 15,
    fontWeight: '600',
    marginBottom: 12,
    color: '#2563EB',
  },
  list: {
    flex: 1,
  },
  listContent: {
    paddingBottom: 24,
  },
});
