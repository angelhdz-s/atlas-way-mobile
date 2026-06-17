import type { ThemeName } from 'uniwind';

type GerLightDarkColorsProps = {
  darkColor: string;
  lightColor: string;
  lockedTheme?: ThemeName;
};

/**
 * @description Utility function for theme locked components. Verifies if a theme is locked, if isn't, returns the current app theme
 */
export function getLockedLightDarkColors({
  darkColor,
  lightColor,
  lockedTheme,
}: GerLightDarkColorsProps): {
  dark: string;
  light: string;
} {
  const defaultColors = {
    dark: darkColor,
    light: lightColor,
  };
  if (!lockedTheme) return defaultColors;

  if (lockedTheme === 'dark')
    return {
      ...defaultColors,
      light: darkColor,
    };

  return {
    ...defaultColors,
    dark: lightColor,
  };
}
