import Animated from 'react-native-reanimated';
import { twMerge } from 'tailwind-merge';
import { useColorTransition } from '@/presentation/modules/animated/ui/hooks/useColorTransition';
import { useAppTheme } from '@/presentation/modules/theme/ui/hooks/useAppTheme';
import { getLightDarkColors } from '@/presentation/utils/style.utils';

type Props = {
  className?: string;
  children: React.ReactNode;
};

export function ScreenContainer({ className, children }: Props) {
  const { isDark } = useAppTheme();
  const backgroundColors = getLightDarkColors('fillBack');
  const color = isDark ? backgroundColors.dark : backgroundColors.light;
  const animatedStyles = useColorTransition({
    color,
    property: 'backgroundColor',
  });
  return (
    <Animated.View
      className={twMerge('flex-1', className)}
      style={animatedStyles}
    >
      {children}
    </Animated.View>
  );
}
