import { Text } from "@/presentation/ui/components/Text";
import { View } from "react-native";
import { twMerge } from "tailwind-merge";

type Variant = "default" | "subtle" | "success" | "info" | "danger";

const themeClassName: Record<Variant, string> = {
  default: "text-accent",
  success: "text-success",
  danger: "text-danger",
  info: "text-info",
  subtle: "text-fg-muted",
};

type Props = {
  className?: string;
  text: string;
  variant?: Variant;
};

export function Badge({ className, text, variant = "default" }: Props) {
  const variantClassName = themeClassName[variant] || "default";
  return (
    <View
      className={twMerge(
        "px-1.5 text-success rounded-full bg-fill-base",
        className,
      )}
    >
      <Text className={twMerge("text-sm", variantClassName)}>{text}</Text>
    </View>
  );
}
