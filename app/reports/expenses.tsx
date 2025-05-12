import { StyleSheet, Text, View } from "react-native";

export default function ExpensesReportScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Gider Raporları</Text>
      <Text style={styles.description}>
        Giderlerinizin detaylı analizi burada görüntülenecek.
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
