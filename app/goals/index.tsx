import { Link } from "expo-router";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function GoalsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Finansal Hedefler</Text>
      <Text style={styles.description}>
        Tasarruf hedeflerinizi planlamak ve takip etmek için bu sayfayı
        kullanabilirsiniz.
      </Text>

      <View style={styles.linksContainer}>
        <Link href="/goals/new" asChild>
          <TouchableOpacity style={styles.linkButton}>
            <Text style={styles.linkText}>Yeni Hedef Oluştur</Text>
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
