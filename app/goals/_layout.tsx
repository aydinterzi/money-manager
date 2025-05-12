import { Stack } from "expo-router";

export default function GoalsLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          headerTitle: "Finansal Hedefler",
        }}
      />
      <Stack.Screen
        name="new"
        options={{
          headerTitle: "Yeni Hedef Oluştur",
        }}
      />
      <Stack.Screen
        name="[id]"
        options={{
          headerTitle: "Hedef Detayı",
        }}
      />
    </Stack>
  );
}
