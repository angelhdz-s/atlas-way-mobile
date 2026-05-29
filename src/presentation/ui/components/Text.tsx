import type { TextProps } from "react-native";
import { Text as RNText } from "react-native";

import { twMerge } from "tailwind-merge";

type Props = TextProps & {
  className?: string;
};

export function Text({ className, children, ...props }: Props) {
  return (
    <RNText
      {...props}
      className={twMerge("text-base text-fg-default", className)}
      style={{ fontFamily: "outfit-400" }}
    >
      {children}
    </RNText>
  );
}
