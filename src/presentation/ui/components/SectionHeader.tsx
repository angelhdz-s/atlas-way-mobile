import { Text } from "@/presentation/ui/components/Text";
import { View } from "react-native";

type Props = {
  title: string;
  children?: React.ReactNode;
};

export function SectionHeader({ title, children }: Props) {
  return (
    <View className="h-8 flex-row items-center">
      <Text className="flex-1 text-xl text-fg-strong">{title}</Text>
      {children}
    </View>
  );
}
