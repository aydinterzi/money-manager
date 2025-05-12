import { StyleSheet, Text, View } from "react-native";

export default function AccountsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hesaplar</Text>
      <Text style={styles.description}>
        Banka hesaplarınızı ve nakit varlıklarınızı bu sayfadan
        yönetebilirsiniz.
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
