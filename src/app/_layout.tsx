import {
  IconHome,
  IconTrophy,
} from "@/presentation/modules/icon/ui/components/Icons";
import { getFont } from "@/presentation/utils/font.utils";
import { DARK_THEME } from "@/styles";
import { useFonts } from "expo-font";
import { Tabs } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import "../../global.css";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    "funnel-display-300": require("../../assets/fonts/funnel-display/FunnelDisplay-Light.ttf"),
    "funnel-display-400": require("../../assets/fonts/funnel-display/FunnelDisplay-Regular.ttf"),
    "funnel-display-500": require("../../assets/fonts/funnel-display/FunnelDisplay-Medium.ttf"),
    "funnel-display-600": require("../../assets/fonts/funnel-display/FunnelDisplay-SemiBold.ttf"),
    "funnel-display-700": require("../../assets/fonts/funnel-display/FunnelDisplay-Bold.ttf"),
    "funnel-display-800": require("../../assets/fonts/funnel-display/FunnelDisplay-ExtraBold.ttf"),
    "outfit-100": require("../../assets/fonts/outfit/Outfit-Thin.ttf"),
    "outfit-200": require("../../assets/fonts/outfit/Outfit-ExtraLight.ttf"),
    "outfit-300": require("../../assets/fonts/outfit/Outfit-Light.ttf"),
    "outfit-400": require("../../assets/fonts/outfit/Outfit-Regular.ttf"),
    "outfit-500": require("../../assets/fonts/outfit/Outfit-Medium.ttf"),
    "outfit-600": require("../../assets/fonts/outfit/Outfit-SemiBold.ttf"),
    "outfit-700": require("../../assets/fonts/outfit/Outfit-Bold.ttf"),
    "outfit-800": require("../../assets/fonts/outfit/Outfit-ExtraBold.ttf"),
    "outfit-900": require("../../assets/fonts/outfit/Outfit-Black.ttf"),
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }

  return (
    <SafeAreaProvider>
      <Tabs
        screenOptions={{
          tabBarStyle: {
            backgroundColor: DARK_THEME.fillMiddle,
            borderColor: DARK_THEME.fillMiddle,
            borderRadius: 32,
            marginBottom: 16,
            borderTopWidth: 0,
            elevation: 0,
            shadowOpacity: 0,
          },
          tabBarLabelStyle: {
            fontFamily: getFont("Outfit Regular"),
          },
          tabBarActiveTintColor: DARK_THEME.fgStrong,
          tabBarInactiveTintColor: DARK_THEME.fgMuted,
          animation: "shift",
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
        <Tabs.Screen
          name="index"
          options={{
            title: "Home",
            headerShown: false,
            tabBarIcon: ({ size, color }) => (
              <IconHome strokeWidth={1.5} size={size} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="plan"
          options={{
            title: "Plan",
            tabBarIcon: ({ size, color }) => (
              <IconTrophy strokeWidth={1.5} size={size} color={color} />
            ),
          }}
        />
      </Tabs>
    </SafeAreaProvider>
  );
}
