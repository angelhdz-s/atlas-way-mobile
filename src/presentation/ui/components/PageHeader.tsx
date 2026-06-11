import { Text } from "@/presentation/ui/components/Text";
import { View } from "react-native";
import { twMerge } from "tailwind-merge";

type Props = {
  title: string;
  className?: string;
  description?: string;
};

export function PageHeader({ className, title, description }: Props) {
  return (
    <View className={twMerge("gap-1", className)}>
      <Text font="FunnelDisplay SemiBold" className="text-3xl text-fg-strong">
        {title}
      </Text>
      {description && <Text>{description}</Text>}
    </View>
  );
}
