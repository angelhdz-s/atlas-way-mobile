import type { ThemeName } from 'uniwind';
import { DARK_THEME, LIGHT_THEME } from '@/styles';
import { AppText } from '@/presentation/ui/components/AppText';

type Props = {
  className?: string;
  text: string;
  lockedTheme?: ThemeName;
};

export function PageHeaderDescription({ className, text, lockedTheme }: Props) {
  const darkColor = DARK_THEME.fgDefault;
  const lightColor = LIGHT_THEME.fgDefault;

  return (
    <AppText
      className={className}
      colors={{
        dark: darkColor,
        light: lightColor,
      }}
      lockedTheme={lockedTheme}
    >
      {text}
    </AppText>
  );
}
