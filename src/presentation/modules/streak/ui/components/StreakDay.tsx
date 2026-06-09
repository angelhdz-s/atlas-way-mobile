import { Text } from "@/presentation/ui/components/Text";
import { DARK_THEME } from "@/styles";
import { Check, Circle } from "lucide-react-native";
import { View } from "react-native";
import { twMerge } from "tailwind-merge";
import { withUniwind } from "uniwind";

type Props = {
  completed?: boolean;
  text: string;
};

const IconCheck = withUniwind(Check);
const IconCircle = withUniwind(Circle);

export function StreakDay({ text, completed = false }: Props) {
  const color = completed ? DARK_THEME.fgStrong : DARK_THEME.fillMiddle;
  const className = completed ? "text-fg-default" : "text-fg-default";
  return (
    <View className={twMerge("justify-center items-center rounded-3xl")}>
      <Text className={twMerge("text-center text-sm", className)}>{text}</Text>
      {completed ? (
        <View className="bg-primary rounded-full size-5 justify-center items-center">
          <IconCheck strokeWidth={2} size={16} className="text-fg-strong" />
        </View>
      ) : (
        <View className="bg-fill-top size-5 rounded-full" />
      )}
    </View>
  );
}
