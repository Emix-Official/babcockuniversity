import { Stack } from "expo-router";

export default function HostelsLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
        contentStyle: { backgroundColor: "#F5F8FC" },
        animation: "slide_from_right",
      }}
    />
  );
}

