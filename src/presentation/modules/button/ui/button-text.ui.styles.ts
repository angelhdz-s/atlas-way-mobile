import type { ButtonColorVariant } from '@/presentation/modules/button/ui/button.ui.types';
import { DARK_THEME, getThemeColors } from '@/styles';
import { StyleSheet } from 'react-native';

export function getButtonTextStyles(
  isDark: boolean,
  colorVariant?: keyof ButtonColorVariant['color']
) {
  const COLORS = getThemeColors(isDark);
  const styles = StyleSheet.create({
    primary: {
      color: DARK_THEME.fgStrong,
    },
    rest: {
      color: COLORS.fgStrong,
    },
  });

  return colorVariant === 'primary' ? styles.primary : styles.rest;
}
