import { AppText } from '@/presentation/ui/components/AppText';
import { getLightDarkColors } from '@/presentation/utils/style.utils';
import { ArrowRight, Dumbbell } from 'lucide-react-native';
import { View } from 'react-native';
import { twMerge } from 'tailwind-merge';
import { withUniwind } from 'uniwind';

type Props = {
  className?: string;
};

const IconDumbbell = withUniwind(Dumbbell);
const IconArrowRight = withUniwind(ArrowRight);

export function TrackingCard({ className }: Props) {
  const strongColors = getLightDarkColors('fgStrong');
  return (
    <View className={twMerge('bg-primary rounded-[20px] p-4 gap-2', className)}>
      <View className="flex-row">
        <AppText className="flex-1 text-sm" lockedTheme="dark">
          Today
        </AppText>
        <AppText className="text-sm" lockedTheme="dark">
          May 27, 2026
        </AppText>
      </View>
      <View className="flex-row items-center">
        <View className="flex-row items-center flex-1 gap-2">
          <View className="items-center justify-center size-9 bg-primary-dark rounded-lg">
            <IconDumbbell
              size={20}
              strokeWidth={1.5}
              className="text-fg-strong-dark"
            />
          </View>
          <View>
            <AppText className="text-sm leading-tight" lockedTheme="dark">
              Push, Pull, Legs
            </AppText>
            <AppText
              className="text-lg leading-tight"
              font="FunnelDisplay Bold"
              lockedTheme="dark"
              colors={strongColors}
            >
              Push Day
            </AppText>
          </View>
        </View>
        <View className="size-8">
          <IconArrowRight size={24} className="text-fg-strong-dark" />
        </View>
      </View>
    </View>
  );
}
