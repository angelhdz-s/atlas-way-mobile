import type { ButtonColorVariant } from '@/presentation/modules/button/ui/button.ui.types';
import { BUTTON_DEFAULT_VARIANTS } from '@/presentation/modules/button/ui/button.ui.variants.constants';
import { DARK_THEME, LIGHT_THEME } from '@/styles';

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
