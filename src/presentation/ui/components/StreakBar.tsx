import { useColorTransition } from '@/presentation/modules/animated/ui/hooks/useColorTransition';
import { StreakDay } from '@/presentation/modules/streak/ui/components/StreakDay';
import { useAppTheme } from '@/presentation/modules/theme/ui/hooks/useAppTheme';
import { AppText } from '@/presentation/ui/components/AppText';
import { getLightDarkColors } from '@/presentation/utils/style.utils';
import { Flame } from 'lucide-react-native';
import { View } from 'react-native';
import Animated from 'react-native-reanimated';
import { twMerge } from 'tailwind-merge';
import { withUniwind } from 'uniwind';

type Props = {
  className?: string;
};

const IconFlame = withUniwind(Flame);

export function StreakBar({ className }: Props) {
  const { isDark } = useAppTheme();
  const bgBaseColors = getLightDarkColors('fillBase');
  const animatedBackgroundColorStyle = useColorTransition({
    color: isDark ? bgBaseColors.dark : bgBaseColors.light,
    property: 'backgroundColor',
  });
  return (
    <Animated.View
      className={twMerge(
        'shrink-0 w-auto flex-row gap-2 items-center rounded-2xl shadow-2xl shadow-fill-back/20',
        className
      )}
      style={animatedBackgroundColorStyle}
    >
      <View className="shrink-0 w-auto flex-row gap-2 items-center p-2">
        <View className="size-8 items-center justify-center">
          <IconFlame strokeWidth={1.5} size={20} className="text-fg-default" />
        </View>
        <View className="">
          <AppText className="leading-none" font="Outfit Medium">
            54
          </AppText>
          <AppText className="leading-none text-sm" font="Outfit Light">
            days
          </AppText>
        </View>
      </View>
      <View className="w-px h-8 bg-bd-default"></View>
      <View className="shrink-0 w-auto flex-row gap-1 p-2">
        <StreakDay text="M" completed={true} />
        <StreakDay text="T" completed={true} />
        <StreakDay text="W" completed={true} />
        <StreakDay text="T" />
        <StreakDay text="F" />
        <StreakDay text="S" />
        <StreakDay text="S" />
      </View>
    </Animated.View>
  );
}
