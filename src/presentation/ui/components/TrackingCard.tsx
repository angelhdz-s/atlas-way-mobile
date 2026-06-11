import { Text } from "@/presentation/ui/components/Text";
import { ArrowRight, Dumbbell } from "lucide-react-native";
import { View } from "react-native";
import { twMerge } from "tailwind-merge";
import { withUniwind } from "uniwind";

type Props = {
  className?: string;
};

const IconDumbbell = withUniwind(Dumbbell);
const IconArrowRight = withUniwind(ArrowRight);

export function TrackingCard({ className }: Props) {
  return (
    <View className={twMerge("bg-primary rounded-[20px] p-4 gap-2", className)}>
      <View className="flex-row">
        <Text className="flex-1 text-sm">Today</Text>
        <Text className="text-sm">May 27, 2026</Text>
      </View>
      <View className="flex-row items-center">
        <View className="flex-row items-center flex-1 gap-2">
          <View className="items-center justify-center size-9 bg-primary-dark rounded-lg">
            <IconDumbbell
              size={20}
              strokeWidth={1.5}
              className="text-fg-strong"
            />
          </View>
          <View>
            <Text className="text-sm leading-tight">Push, Pull, Legs</Text>
            <Text
              className="text-lg leading-tight text-fg-strong"
              font="FunnelDisplay Bold"
            >
              Push Day
            </Text>
          </View>
        </View>
        <View className="size-8">
          <IconArrowRight size={24} className="text-fg-strong" />
        </View>
      </View>
    </View>
  );
}
