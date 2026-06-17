import { View } from 'react-native';
import { AppText } from '@/presentation/ui/components/AppText';

type Props = {
  title: string;
  children?: React.ReactNode;
};

export function SectionHeader({ title, children }: Props) {
  return (
    <View className="h-8 flex-row items-center">
      <AppText className="flex-1 text-xl text-fg-strong">{title}</AppText>
      {children}
    </View>
  );
}
