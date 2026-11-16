import { Pressable, StyleSheet, Text, View } from 'react-native';

import type { Announcement } from '../types/announcement';

type AnnouncementCardProps = Pick<Announcement, 'title' | 'category' | 'read'> & {
  onMarkRead: () => void;
};

export default function AnnouncementCard({
  title,
  category,
  read,
  onMarkRead,
}: AnnouncementCardProps) {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.category}>Category: {category}</Text>
      <Text style={styles.status}>Status: {read ? 'Read' : 'Unread'}</Text>
      <Pressable
        accessibilityRole="button"
        accessibilityLabel={`${read ? 'Mark as unread' : 'Mark as read'}: ${title}`}
        onPress={onMarkRead}
        style={({ pressed }) => [styles.button, pressed && styles.buttonPressed]}>
        <Text style={styles.buttonText}>{read ? 'Mark as Unread' : 'Mark as Read'}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFFFFF',
    padding: 18,
    marginVertical: 8,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#DCE3EC',
    gap: 4,
  },
  title: {
    fontSize: 17,
    fontWeight: '700',
    color: '#172B4D',
  },
  category: {
    fontSize: 14,
    color: '#526579',
  },
  status: {
    fontSize: 14,
    color: '#526579',
  },
  button: {
    minHeight: 48,
    backgroundColor: '#2563EB',
    paddingHorizontal: 12,
    paddingVertical: 12,
    marginTop: 8,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonPressed: {
    opacity: 0.75,
  },
  buttonText: {
    color: '#FFFFFF',
    fontWeight: '600',
  },
});
