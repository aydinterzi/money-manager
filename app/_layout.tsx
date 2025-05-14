import { ClerkProvider } from "@clerk/clerk-expo";
import { tokenCache } from "@clerk/clerk-expo/token-cache";
import { FontAwesome } from "@expo/vector-icons";
import { Drawer } from "expo-router/drawer";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { PaperProvider } from "react-native-paper";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function AppLayout() {
  const insets = useSafeAreaInsets();

  return (
    <ClerkProvider tokenCache={tokenCache}>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <PaperProvider>
          <Drawer
            screenOptions={{
              headerStyle: {
                backgroundColor: "#3498db",
              },
              headerTintColor: "#fff",
              drawerActiveTintColor: "#3498db",
              drawerStyle: {
                paddingTop: insets.top,
              },
            }}
          >
            <Drawer.Screen
              name="index"
              options={{
                title: "Dashboard",
                drawerIcon: ({ color }: { color: string }) => (
                  <FontAwesome name="home" size={24} color={color} />
                ),
              }}
            />
            <Drawer.Screen
              name="transactions"
              options={{
                title: "İşlemler",
                drawerIcon: ({ color }: { color: string }) => (
                  <FontAwesome name="exchange" size={24} color={color} />
                ),
              }}
            />
            <Drawer.Screen
              name="budget"
              options={{
                title: "Bütçe",
                drawerIcon: ({ color }: { color: string }) => (
                  <FontAwesome name="pie-chart" size={24} color={color} />
                ),
              }}
            />
            <Drawer.Screen
              name="accounts"
              options={{
                title: "Hesaplar",
                drawerIcon: ({ color }: { color: string }) => (
                  <FontAwesome name="bank" size={24} color={color} />
                ),
              }}
            />
            <Drawer.Screen
              name="calendar"
              options={{
                title: "Takvim",
                drawerIcon: ({ color }: { color: string }) => (
                  <FontAwesome name="calendar" size={24} color={color} />
                ),
              }}
            />
            <Drawer.Screen
              name="notifications"
              options={{
                title: "Bildirimler",
                drawerIcon: ({ color }: { color: string }) => (
                  <FontAwesome name="bell" size={24} color={color} />
                ),
              }}
            />
            <Drawer.Screen
              name="settings"
              options={{
                title: "Ayarlar",
                drawerIcon: ({ color }: { color: string }) => (
                  <FontAwesome name="cog" size={24} color={color} />
                ),
              }}
            />
          </Drawer>
        </PaperProvider>
      </GestureHandlerRootView>
    </ClerkProvider>
  );
}
