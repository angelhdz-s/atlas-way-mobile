import { AnimatedColorText } from '@/presentation/modules/animated/ui/components/AnimatedColorText';
import { Text, type TextProps } from '@/presentation/ui/components/Text';
import { DARK_THEME, LIGHT_THEME } from '@/styles';
import type { ThemeName } from 'uniwind';

type Props = TextProps & {
  lockedTheme?: ThemeName;
  colors?: {
    dark: string;
    light: string;
  };
};

export function AppText({
  lockedTheme,
  colors = {
    dark: DARK_THEME.fgDefault,
    light: LIGHT_THEME.fgStrong,
  },
  children,
  ...restProps
}: Props) {
  if (lockedTheme !== undefined)
    return (
      <Text
        style={{
          color: lockedTheme === 'dark' ? colors.dark : colors.light,
        }}
        {...restProps}
      >
        {children}
      </Text>
    );

  return (
    <AnimatedColorText colors={colors} {...restProps}>
      {children}
    </AnimatedColorText>
  );
}
