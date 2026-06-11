import { StreakDay } from "@/presentation/modules/streak/ui/components/StreakDay";
import { Text } from "@/presentation/ui/components/Text";
import { Flame } from "lucide-react-native";
import { View } from "react-native";
import { twMerge } from "tailwind-merge";
import { withUniwind } from "uniwind";

type Props = {
  className?: string;
};

const IconFlame = withUniwind(Flame);

export function StreakBar({ className }: Props) {
  return (
    <View
      className={twMerge(
        "shrink-0 w-auto flex-row gap-2 items-center bg-fill-base rounded-2xl shadow-2xl shadow-fill-back/20",
        className,
      )}
    >
      <View className="shrink-0 w-auto flex-row gap-2 items-center p-2">
        <View className="size-8 items-center justify-center">
          <IconFlame strokeWidth={1.5} size={20} className="text-fg-default" />
        </View>
        <View className="">
          <Text className="leading-none" font="Outfit Medium">
            54
          </Text>
          <Text className="leading-none text-sm" font="Outfit Light">
            days
          </Text>
        </View>
      </View>
      <View className="w-px h-8 bg-bd-default"></View>
      <View className="shrink-0 w-auto flex-row gap-1 p-2">
        <StreakDay text="M" completed={true} />
        <StreakDay text="T" completed={true} />
        <StreakDay text="W" completed={true} />
        <StreakDay text="T" />
        <StreakDay text="F" />
        <StreakDay text="S" />
        <StreakDay text="S" />
      </View>
    </View>
  );
}
