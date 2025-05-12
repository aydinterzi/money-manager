import { Stack } from "expo-router";

export default function ReportsLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          headerTitle: "Raporlar",
        }}
      />
      <Stack.Screen
        name="expenses"
        options={{
          headerTitle: "Gider Raporları",
        }}
      />
      <Stack.Screen
        name="income"
        options={{
          headerTitle: "Gelir Raporları",
        }}
      />
    </Stack>
  );
}
