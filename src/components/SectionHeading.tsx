import { StyleSheet, Text, View } from 'react-native';

type SectionHeadingProps = {
  title: string;
  subtitle: string;
  compact?: boolean;
};

export default function SectionHeading({ title, subtitle, compact = false }: SectionHeadingProps) {
  return (
    <View style={styles.section}>
      <Text style={[styles.title, compact && styles.compactTitle]}>{title}</Text>
      <Text style={styles.subtitle}>{subtitle}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  section: {
    width: '100%',
    gap: 6,
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    color: '#172B4D',
  },
  compactTitle: {
    fontSize: 24,
  },
  subtitle: {
    fontSize: 15,
    color: '#526070',
  },
});
