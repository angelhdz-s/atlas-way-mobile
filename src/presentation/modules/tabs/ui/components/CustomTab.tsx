import { IconType } from "@/presentation/modules/icon/ui/components/Icons";
import { Text } from "@/presentation/ui/components/Text";
import { Pressable, View } from "react-native";
import { twMerge } from "tailwind-merge";

type Props = {
  className?: string;
  label: string;
  Icon: IconType;
  active?: boolean;
  onPress?: () => void;
  onLongPress?: () => void;
};

export function CustomTab({
  className,
  Icon,
  label,
  active = false,
  onLongPress,
  onPress,
}: Props) {
  return (
    <Pressable onPress={onPress} onLongPress={onLongPress}>
      <View
        className={twMerge(
          "relative items-center justify-center h-16 w-20",
          className,
        )}
      >
        <View
          className={twMerge(
            "absolute top-0 left-1/2 -translate-x-1/2 h-0.5 rounded-md w-9",
            active && "bg-fg-strong",
          )}
        />
        <View>
          <Icon
            size={16}
            strokeWidth={1.5}
            className={twMerge(
              "",
              active ? "text-fg-strong" : "text-fg-subtle",
            )}
          />
        </View>
        <Text
          className={twMerge(
            "text-sm",
            active ? "text-fg-strong" : "text-fg-subtle",
          )}
        >
          {label}
        </Text>
      </View>
    </Pressable>
  );
}
