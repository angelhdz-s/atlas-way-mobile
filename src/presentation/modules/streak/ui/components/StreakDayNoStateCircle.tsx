import { useColorTransition } from '@/presentation/modules/animated/ui/hooks/useColorTransition';
import { useAppTheme } from '@/presentation/modules/theme/ui/hooks/useAppTheme';
import { getLightDarkColors } from '@/presentation/utils/style.utils';
import Animated from 'react-native-reanimated';

type Props = {
  className?: string;
};

export function StreakDayNoStateCircle({ className }: Props) {
  const { isDark } = useAppTheme();
  const backgroundColors = getLightDarkColors('fillTop');

  const animatedStyles = useColorTransition({
    color: isDark ? backgroundColors.dark : backgroundColors.light,
    property: 'backgroundColor',
  });
  return (
    <Animated.View className="size-5 rounded-full" style={animatedStyles} />
  );
}
