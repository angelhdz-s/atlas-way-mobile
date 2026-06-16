import { ANIMATED_DEFAULT_TRANSITION_DURATION } from '@/presentation/modules/animated/ui/animated.ui.constants';
import { useEffect } from 'react';
import {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

type Props = {
  color: string;
  duration?: number;
};

export function useColorTransition({
  color,
  duration = ANIMATED_DEFAULT_TRANSITION_DURATION,
}: Props) {
  const currentColor = useSharedValue(color);

  useEffect(() => {
    if (currentColor.value === color) return;
    currentColor.value = color;
  }, [color, currentColor]);

  return useAnimatedStyle(() => {
    return {
      color: withTiming(currentColor.value, {
        duration,
      }),
    };
  });
}
