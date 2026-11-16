import { StyleSheet, Text, View, useWindowDimensions } from 'react-native';

import AnnouncementPanel from '../components/AnnouncementPanel';
import SectionHeading from '../components/SectionHeading';

export default function HomeScreen() {
  const { width } = useWindowDimensions();
  const compact = width < 380;

  return (
    <View style={[styles.container, compact && styles.compactContainer]}>
      <SectionHeading
        title="Campus Connect"
        subtitle="One campus. Connected students."
        compact={compact}
      />
      <AnnouncementPanel />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch',
    paddingHorizontal: 24,
    paddingTop: 24,
    backgroundColor: '#F4F7FB',
    paddingBottom: 8,
  },
  compactContainer: {
    paddingHorizontal: 16,
    paddingTop: 16,
  },
});