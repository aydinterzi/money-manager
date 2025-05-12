import { Stack } from "expo-router";

export default function CategoriesLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          headerTitle: "Kategoriler",
        }}
      />
      <Stack.Screen
        name="new"
        options={{
          headerTitle: "Yeni Kategori",
        }}
      />
      <Stack.Screen
        name="edit"
        options={{
          headerTitle: "Kategori Düzenle",
        }}
      />
    </Stack>
  );
}
