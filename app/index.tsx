import { Link } from "expo-router";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Dashboard() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Dashboard</Text>
      <Text style={styles.description}>
        Bütçe yönetimi uygulamasına hoş geldiniz
      </Text>

      <View style={styles.linksContainer}>
        <Link href="/reports" asChild>
          <TouchableOpacity style={styles.linkButton}>
            <Text style={styles.linkText}>Raporları Görüntüle</Text>
          </TouchableOpacity>
        </Link>

        <Link href="/goals" asChild>
          <TouchableOpacity style={styles.linkButton}>
            <Text style={styles.linkText}>Finansal Hedefler</Text>
          </TouchableOpacity>
        </Link>

        <Link href="/categories" asChild>
          <TouchableOpacity style={styles.linkButton}>
            <Text style={styles.linkText}>Kategoriler</Text>
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
    marginTop: 20,
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
