import { useEffect } from 'react';
import {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import { ANIMATED_DEFAULT_TRANSITION_DURATION } from '@/presentation/modules/animated/ui/animated.ui.constants';

type Props = {
  color: string;
  duration?: number;
  property?: 'color' | 'backgroundColor';
};

export function useColorTransition({
  color,
  duration = ANIMATED_DEFAULT_TRANSITION_DURATION,
  property = 'color',
}: Props) {
  const currentColor = useSharedValue(color);

  useEffect(() => {
    if (currentColor.value === color) return;
    currentColor.value = withTiming(color, {
      duration,
    });
  }, [color, currentColor, duration]);

  return useAnimatedStyle(() => {
    return {
      [property]: currentColor.value,
    };
  });
}
