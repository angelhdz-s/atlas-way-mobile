import { Text } from "@/presentation/ui/components/Text";
import { Bell as LBell } from "lucide-react-native";
import { View } from "react-native";
import { twMerge } from "tailwind-merge";
import { withUniwind } from "uniwind";

type Props = {
  className?: string;
};

const Bell = withUniwind(LBell);

export function LandingStackHeader({ className }: Props) {
  return (
    <View
      className={twMerge("flex-row items-center justify-between", className)}
    >
      <Text>angelhdzs15@gmail.com</Text>
      <View className="flex-row gap-4 items-center">
        <Bell className="text-fg-default" />
        <View className="size-10 bg-fill-back border border-bd-default rounded-full"></View>
      </View>
    </View>
  );
}
