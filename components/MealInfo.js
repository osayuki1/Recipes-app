import { View, Text, StyleSheet } from 'react-native';

function MealInfo({ duration, complexity, affordability }) {
  return (
    <View style={styles.details}>
      <Text>{duration}mins</Text>
      <Text>{complexity.toUpperCase()}</Text>
      <Text>{affordability.toUpperCase()}</Text>
    </View>
  );
}

export default MealInfo;

const styles = StyleSheet.create({
  details: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 8,
    gap: 8,
  },
});
