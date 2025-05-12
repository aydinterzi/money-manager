import { StyleSheet, Text, View } from "react-native";

export default function NewGoalScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Yeni Hedef Oluştur</Text>
      <Text style={styles.description}>
        Finansal hedef oluşturma formu burada olacak.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  description: {
    fontSize: 16,
    textAlign: "center",
  },
});
