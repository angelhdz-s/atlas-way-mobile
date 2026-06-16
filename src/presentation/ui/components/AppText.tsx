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
  className,
  font,
  lockedTheme,
  children,
  colors = {
    dark: DARK_THEME.fgDefault,
    light: LIGHT_THEME.fgStrong,
  },
}: Props) {
  if (lockedTheme !== undefined)
    return (
      <Text
        font={font}
        className={className}
        style={{
          color: lockedTheme === 'dark' ? colors.dark : colors.light,
        }}
      >
        {children}
      </Text>
    );

  return (
    <AnimatedColorText font={font} className={className} colors={colors}>
      {children}
    </AnimatedColorText>
  );
}
