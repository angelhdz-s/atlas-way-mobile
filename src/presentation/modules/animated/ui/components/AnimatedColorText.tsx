import type { TextProps } from '@/presentation/ui/components/Text';
import { AnimatedText } from '@/presentation/modules/animated/ui/components/AnimatedText';
import { useColorTransition } from '@/presentation/modules/animated/ui/hooks/useColorTransition';
import { useAppTheme } from '@/presentation/modules/theme/ui/hooks/useAppTheme';

type Props = TextProps & {
  colors: {
    dark: string;
    light: string;
  };
};

export function AnimatedColorText({
  className,
  colors,
  children,
  style,
  ...restProps
}: Props) {
  const { isDark } = useAppTheme();
  const titleAnimatedColorStyles = useColorTransition({
    color: isDark ? colors.dark : colors.light,
  });

  return (
    <AnimatedText
      className={className}
      style={[titleAnimatedColorStyles, style]}
      {...restProps}
    >
      {children}
    </AnimatedText>
  );
}
