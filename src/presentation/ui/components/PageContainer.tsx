import { View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { twMerge } from "tailwind-merge";

type Props = {
  children?: React.ReactNode;
  className?: string;
  noHeader?: boolean;
};

export function PageContainer({ children, className, noHeader }: Props) {
  const insets = useSafeAreaInsets();
  return (
    <View
      className={twMerge("px-2 size-full gap-4", className)}
      style={{ paddingBottom: insets.bottom, paddingTop: insets.top }}
    >
      {children}
    </View>
  );
}
