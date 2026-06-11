import type { TextProps } from "react-native";
import { Text as RNText } from "react-native";
import { twMerge } from "tailwind-merge";

import { FontFamily } from "@/presentation/ui/presentation.ui.types";
import { getFont } from "@/presentation/utils/font.utils";

type Props = TextProps & {
  className?: string;
  font?: FontFamily;
};

export function Text({
  className,
  children,
  font = "Outfit Regular",
  ...props
}: Props) {
  const fontFamily = getFont(font);
  return (
    <RNText
      {...props}
      className={twMerge("text-base text-fg-default tracking-tight", className)}
      style={{ fontFamily }}
    >
      {children}
    </RNText>
  );
}
