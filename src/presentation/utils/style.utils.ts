import type { LightDarkColor, THEME_COLORS } from '@/style.types';
import { DARK_THEME, LIGHT_THEME } from '@/styles';

/**
 * @description Utility function to get those colors with the same color key in the light/dark themes
 */
export function getLightDarkColors(
  colorKey: keyof THEME_COLORS
): LightDarkColor {
  const dark = DARK_THEME[colorKey] ?? DARK_THEME.fgDefault;
  const light = LIGHT_THEME[colorKey] ?? LIGHT_THEME.fgDefault;

  return {
    dark,
    light,
  };
}
