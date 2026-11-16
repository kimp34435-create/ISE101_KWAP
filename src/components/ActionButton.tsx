import { Pressable, StyleSheet, Text } from 'react-native';

type ActionButtonProps = {
  label: string;
  onPress: () => void;
  disabled?: boolean;
};

export default function ActionButton({ label, onPress, disabled = false }: ActionButtonProps) {
  return (
    <Pressable
      accessibilityRole="button"
      accessibilityState={{ disabled }}
      disabled={disabled}
      onPress={onPress}
      style={({ pressed }) => [
        styles.button,
        pressed && styles.buttonPressed,
        disabled && styles.buttonDisabled,
      ]}>
      <Text style={styles.buttonText}>{label}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    minHeight: 48,
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 10,
    backgroundColor: '#174A7E',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonPressed: {
    opacity: 0.75,
  },
  buttonDisabled: {
    backgroundColor: '#718096',
  },
  buttonText: {
    color: '#FFFFFF',
    fontWeight: '600',
  },
});
