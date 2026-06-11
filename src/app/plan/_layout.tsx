import { getFont } from "@/presentation/utils/font.utils";
import { DARK_THEME } from "@/styles";
import { Stack } from "expo-router";

export default function Layout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: DARK_THEME.fillBack,
        },
        headerTitleStyle: {
          color: DARK_THEME.fgStrong,
          fontFamily: getFont("Outfit Regular"),
          fontWeight: "400",
        },
      }}
    >
      <Stack.Screen
        name="index"
        options={{
          title: "Plan",
          contentStyle: {
            backgroundColor: DARK_THEME.fillBack,
          },
        }}
      />
      <Stack.Screen
        name="routines"
        options={{
          title: "Routines",
          contentStyle: {
            backgroundColor: DARK_THEME.fillBack,
          },
        }}
      />
      <Stack.Screen
        name="sessions"
        options={{
          title: "Sessions",
          contentStyle: {
            backgroundColor: DARK_THEME.fillBack,
          },
        }}
      />
      <Stack.Screen
        name="exercises"
        options={{
          title: "Exercises",
          contentStyle: {
            backgroundColor: DARK_THEME.fillBack,
          },
        }}
      />
    </Stack>
  );
}
