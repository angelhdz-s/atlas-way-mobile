import type { ButtonColorVariant } from '@/presentation/modules/button/ui/button.ui.types';
import { DARK_THEME, LIGHT_THEME } from '@/styles';
import { BUTTON_DEFAULT_VARIANTS } from '@/presentation/modules/button/ui/button.ui.variants.constants';

export function getButtonColors(
  colorVariant: keyof ButtonColorVariant['color'] = BUTTON_DEFAULT_VARIANTS.color
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
