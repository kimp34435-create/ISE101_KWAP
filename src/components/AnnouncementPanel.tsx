import { useState } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';

import { getUnreadAnnouncements } from '../services/announcementUtils';
import type { Announcement } from '../types/announcement';
import ActionButton from './ActionButton';
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

  const markAllAsRead = () => {
    setAnnouncements((currentAnnouncements) =>
      currentAnnouncements.map((announcement) => ({ ...announcement, read: true }))
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.listHeader}>
        <Text style={styles.heading}>Campus Announcements</Text>
        <Text style={styles.counter} accessibilityLiveRegion="polite">
          Total: {announcements.length} · Unread: {unreadCount}
        </Text>
        <ActionButton
          label="Mark all as read"
          onPress={markAllAsRead}
          disabled={unreadCount === 0}
        />
      </View>
      <FlatList
        style={styles.list}
        contentContainerStyle={styles.listContent}
        data={announcements}
        keyExtractor={(announcement) => announcement.id}
        renderItem={({ item: announcement }) => (
          <AnnouncementCard
            title={announcement.title}
            category={announcement.category}
            read={announcement.read}
            onMarkRead={() => toggleAnnouncementRead(announcement.id)}
          />
        )}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flex: 1,
    marginTop: 24,
    maxWidth: 640,
    alignSelf: 'center',
  },
  listHeader: {
    gap: 10,
    marginBottom: 8,
  },
  heading: {
    fontSize: 21,
    fontWeight: '700',
    color: '#172B4D',
  },
  counter: {
    fontSize: 15,
    fontWeight: '600',
    color: '#2563EB',
  },
  list: {
    flex: 1,
  },
  listContent: {
    paddingBottom: 16,
  },
});
