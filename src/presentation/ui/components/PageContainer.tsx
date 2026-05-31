import { View } from "react-native";
import { twMerge } from "tailwind-merge";

type Props = {
  children?: React.ReactNode;
  className?: string;
};

export function PageContainer({ children, className }: Props) {
  return (
    <View className={twMerge("p-6 pt-12 size-full gap-4", className)}>
      {children}
    </View>
  );
}
