import type { ButtonProps } from '@/presentation/modules/button/ui/button.ui.types';
import type { GestureResponderEvent } from 'react-native';
import { Easing, useSharedValue, withTiming } from 'react-native-reanimated';
import { twMerge } from 'tailwind-merge';
import { AnimatedButton } from '@/presentation/modules/animated/ui/components/AnimatedButton';
import { BUTTON_ANIMATION_DURATION } from '@/presentation/modules/button/ui/button.constants';
import { buttonVariants } from '@/presentation/modules/button/ui/button.ui.variants';

type Props = ButtonProps;

export function Button({
  children,
  variant,
  className,
  onPressIn,
  onPressOut,
  ...restProps
}: Props) {
  const scale = useSharedValue(1);
  const buttonVariantClassName = buttonVariants(variant);

  const handleAnimationPressIn = (e: GestureResponderEvent) => {
    scale.value = withTiming(0.9, {
      duration: BUTTON_ANIMATION_DURATION,
      easing: Easing.inOut(Easing.quad),
    });
    onPressIn?.(e);
  };

  const handleAnimationPressOut = (e: GestureResponderEvent) => {
    scale.value = withTiming(1, {
      duration: BUTTON_ANIMATION_DURATION,
      easing: Easing.inOut(Easing.quad),
    });
    onPressOut?.(e);
  };

  return (
    <AnimatedButton
      className={twMerge(buttonVariantClassName, className)}
      onPressIn={handleAnimationPressIn}
      onPressOut={handleAnimationPressOut}
      {...restProps}
      style={{
        transform: [{ scale }],
      }}
    >
      {children}
    </AnimatedButton>
  );
}
