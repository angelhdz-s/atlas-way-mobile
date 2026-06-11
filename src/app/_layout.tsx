import { CustomTabBar } from "@/presentation/modules/tabs/ui/components/CustomTabBar";
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
          headerShown: false,
        }}
        tabBar={(props) => <CustomTabBar {...props} />}
      >
        <Tabs.Screen name="index" options={{ title: "Home" }} />
        <Tabs.Screen name="progress" options={{ title: "Progress" }} />
        <Tabs.Screen name="activity" options={{ title: "Activity" }} />
        <Tabs.Screen name="plan" options={{ title: "Plan" }} />
      </Tabs>
    </SafeAreaProvider>
  );
}
