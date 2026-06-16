import { useHeaderHeight } from 'expo-router/build/react-navigation';
import { ScrollView } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { twMerge } from 'tailwind-merge';

type Props = {
  children?: React.ReactNode;
  className?: string;
  noHeader?: boolean;
};

export function PageContainer({
  children,
  className,
  noHeader = false,
}: Props) {
  const insets = useSafeAreaInsets();
  const headerHeight = useHeaderHeight();
  const paddingTop = noHeader ? insets.top : headerHeight;
  return (
    <ScrollView
      className={twMerge('size-full px-2 gap-4', className)}
      style={{
        paddingBottom: insets.bottom,
        paddingTop: paddingTop + 8,
      }}
      contentContainerClassName="gap-4 pb-40"
    >
      {children}
    </ScrollView>
  );
}
