import {
  IconActivity,
  IconChartSpline,
  IconHome,
  IconTrophy,
  IconType,
} from "@/presentation/modules/icon/ui/components/Icons";
import { CustomTab } from "@/presentation/modules/tabs/ui/components/CustomTab";
import { BottomTabBarProps } from "expo-router/build/react-navigation/bottom-tabs";
import { View } from "react-native";

type Props = {
  className?: string;
};

type Tabs = "index" | "plan" | "progress" | "activity";

const icons: Record<Tabs, IconType> = {
  activity: IconActivity,
  index: IconHome,
  plan: IconTrophy,
  progress: IconChartSpline,
};

export function CustomTabBar({
  className,
  descriptors,
  insets,
  navigation,
  state,
}: Props & BottomTabBarProps) {
  return (
    <View
      className="absolute bottom-0 left-2 right-2 h-16 rounded-full bg-fill-middle flex-row items-center justify-center px-2"
      style={{ marginBottom: insets.bottom }}
    >
      {state.routes.map((r, i) => {
        const focused = state.index === i;

        const options = descriptors[r.key].options;

        const label =
          typeof options.tabBarLabel === "string"
            ? options.tabBarLabel
            : (options.title ?? r.name);

        const onPress = () => {
          const event = navigation.emit({
            target: r.key,
            type: "tabPress",
            canPreventDefault: true,
          });

          if (!focused && !event.defaultPrevented) {
            navigation.navigate(r.name, r.params);
          }
        };

        return (
          <CustomTab
            key={r.key}
            Icon={icons[r.name as never] ?? IconHome}
            label={label}
            active={focused}
            onPress={onPress}
          />
        );
      })}
    </View>
  );
}
