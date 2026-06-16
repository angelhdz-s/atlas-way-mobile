import type { IconType } from '@/presentation/modules/icon/ui/components/Icons';
import { IconArrowRight } from '@/presentation/modules/icon/ui/components/Icons';
import { AppText } from '@/presentation/ui/components/AppText';
import { Badge } from '@/presentation/ui/components/Badge';
import { View } from 'react-native';
import { twMerge } from 'tailwind-merge';

type Props = {
  className?: string;
  Icon: IconType;
  title: string;
  badge?: string;
};

export function LinkBar({ className, Icon, title, badge }: Props) {
  return (
    <View
      className={twMerge(
        'bg-fill-middle rounded-xl p-1 flex-row items-center h-12',
        className
      )}
    >
      <View className="size-8 justify-center items-center">
        <Icon size={16} className="text-fg-default" />
      </View>
      <View className="flex-1 flex-row gap-2">
        <AppText>Weight</AppText>
        {badge && <Badge text={badge} />}
      </View>
      <View className="size-8 items-center justify-center">
        <IconArrowRight size={20} className="text-fg-default" />
      </View>
    </View>
  );
}
