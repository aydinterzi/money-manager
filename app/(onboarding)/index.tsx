import { useRouter } from "expo-router";
import { Button, StyleSheet, Text, View } from "react-native";

export default function OnboardingScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Uygulamamıza Hoş Geldiniz!</Text>
      <Text style={styles.subtitle}>
        Bu uygulama ile harcamalarınızı kolayca takip edebilir, bütçenizi
        yönetebilir ve finansal hedeflerinize ulaşabilirsiniz.
      </Text>
      <Button
        title="Keşfetmeye Başla"
        onPress={() => {
          // TODO: Onboarding tamamlandı olarak işaretle (AsyncStorage kullanılabilir)
          // Sonrasında (auth) grubuna veya ana uygulamaya yönlendir
          router.replace("/(auth)/sign-in"); // Şimdilik direkt sign-in'e yönlendiriyoruz
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  subtitle: {
    fontSize: 16,
    textAlign: "center",
    marginBottom: 30,
    color: "#666",
  },
});
