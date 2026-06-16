import type { IconType } from '@/presentation/modules/icon/ui/components/Icons';
import { IconArrowRight } from '@/presentation/modules/icon/ui/components/Icons';
import { AppText } from '@/presentation/ui/components/AppText';
import { View } from 'react-native';
import { twMerge } from 'tailwind-merge';

type Props = {
  className?: string;
  Icon: IconType;
  title: string;
  description: string;
};

export function LinkCard({ className, Icon, title, description }: Props) {
  return (
    <View
      className={twMerge(
        'bg-fill-middle p-4 gap-2 h-full rounded-2xl',
        className
      )}
    >
      <View className="flex-row gap-2 items-center">
        <View>
          <Icon size={16} className="text-fg-default" />
        </View>
        <View className="flex-1">
          <AppText className="text-fg-strong">{title}</AppText>
        </View>
        <View>
          <IconArrowRight size={20} className="text-fg-default" />
        </View>
      </View>
      <View>
        <AppText className="text-fg-default text-sm">{description}</AppText>
      </View>
    </View>
  );
}
