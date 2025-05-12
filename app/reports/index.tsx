import { Link } from "expo-router";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function ReportsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Raporlar</Text>
      <Text style={styles.description}>
        Mali durumunuzu analiz etmek için raporlar.
      </Text>

      <View style={styles.linksContainer}>
        <Link href="/reports/expenses" asChild>
          <TouchableOpacity style={styles.linkButton}>
            <Text style={styles.linkText}>Gider Raporları</Text>
          </TouchableOpacity>
        </Link>

        <Link href="/reports/income" asChild>
          <TouchableOpacity style={styles.linkButton}>
            <Text style={styles.linkText}>Gelir Raporları</Text>
          </TouchableOpacity>
        </Link>
      </View>
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
    marginBottom: 30,
  },
  linksContainer: {
    width: "100%",
    gap: 15,
  },
  linkButton: {
    backgroundColor: "#3498db",
    padding: 15,
    borderRadius: 5,
    alignItems: "center",
  },
  linkText: {
    color: "white",
    fontSize: 16,
    fontWeight: "600",
  },
});
