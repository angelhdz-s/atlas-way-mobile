import { ScrollView } from "react-native";
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
    <ScrollView
      className={twMerge("size-full px-2 gap-4", className)}
      style={{ paddingBottom: insets.bottom, paddingTop: insets.top }}
      contentContainerClassName="gap-4 pb-40"
    >
      {children}
    </ScrollView>
  );
}
