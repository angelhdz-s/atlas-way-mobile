import type { ButtonColorVariant } from '@/presentation/modules/button/ui/button.ui.types';
import { DARK_THEME, LIGHT_THEME } from '@/styles';

export function getButtonTextStyles(
  colorVariant?: keyof ButtonColorVariant['color']
) {
  const darkColor = DARK_THEME.fgStrong;
  const lightColor = LIGHT_THEME.fgStrong;

  if (colorVariant === 'primary')
    return {
      dark: darkColor,
      light: darkColor,
    };

  return {
    dark: darkColor,
    light: lightColor,
  };
}
