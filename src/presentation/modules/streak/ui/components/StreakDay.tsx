import { Text } from "@/presentation/ui/components/Text";
import { DARK_THEME } from "@/styles";
import { Check, Circle } from "lucide-react-native";
import { View } from "react-native";
import { twMerge } from "tailwind-merge";

type Props = {
  completed?: boolean;
  text: string;
};

export function StreakDay({ text, completed = false }: Props) {
  const color = completed ? DARK_THEME.fgStrong : DARK_THEME.fillMiddle;
  const className = completed ? "text-fg-default" : "text-fg-default";
  return (
    <View
      className={twMerge(
        "justify-center gap-1 items-center p-1 rounded-3xl flex-1",
      )}
    >
      <Text className={twMerge("w-8 text-center text-xs", className)}>
        {text}
      </Text>
      {completed ? (
        <View className="bg-linear-135 from-50% to-150% from-primary to-fill-base rounded-full size-7 justify-center items-center">
          <Check color={color} strokeWidth={2} size={20} />
        </View>
      ) : (
        <Circle fill={color} color={color} size={28} strokeWidth={1.5} />
      )}
    </View>
  );
}
