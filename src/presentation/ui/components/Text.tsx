import type { TextProps } from "react-native";
import { Text as RNText } from "react-native";
import { twMerge } from "tailwind-merge";

import { FontFamilty } from "@/presentation/ui/presentation.ui.types";

type Props = TextProps & {
  className?: string;
  font?: FontFamilty;
};

export function Text({
  className,
  children,
  font = "outfit-400",
  ...props
}: Props) {
  return (
    <RNText
      {...props}
      className={twMerge("text-base text-fg-default tracking-tight", className)}
      style={{ fontFamily: font }}
    >
      {children}
    </RNText>
  );
}
