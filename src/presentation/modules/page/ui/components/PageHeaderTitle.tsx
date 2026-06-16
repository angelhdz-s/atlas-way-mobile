import { AppText } from '@/presentation/ui/components/AppText';
import { DARK_THEME, LIGHT_THEME } from '@/styles';
import { twMerge } from 'tailwind-merge';
import type { ThemeName } from 'uniwind';

type Props = {
  text: string;
  className?: string;
  lockedTheme?: ThemeName;
};

export function PageHeaderTitle({ className, text, lockedTheme }: Props) {
  const darkColor = DARK_THEME.fgStrong;
  const lightColor = LIGHT_THEME.fgStrong;

  return (
    <AppText
      font="FunnelDisplay SemiBold"
      className={twMerge('text-3xl', className)}
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
