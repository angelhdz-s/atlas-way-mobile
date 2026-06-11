import {
  IconArrowRight,
  IconType,
} from "@/presentation/modules/icon/ui/components/Icons";
import { Text } from "@/presentation/ui/components/Text";
import { View } from "react-native";
import { twMerge } from "tailwind-merge";

type Props = {
  className?: string;
  Icon: IconType;
  title: string;
  description: string;
};

export function LinkCard({ className, Icon, title, description }: Props) {
  return (
    <View
      className={twMerge(
        "bg-fill-middle p-4 gap-2 h-full rounded-2xl",
        className,
      )}
    >
      <View className="flex-row gap-2 items-center">
        <View>
          <Icon size={16} className="text-fg-default" />
        </View>
        <View className="flex-1">
          <Text className="text-fg-strong">{title}</Text>
        </View>
        <View>
          <IconArrowRight size={20} className="text-fg-default" />
        </View>
      </View>
      <View>
        <Text className="text-fg-default text-sm">{description}</Text>
      </View>
    </View>
  );
}
