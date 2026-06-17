import type { THEME_COLORS } from '@/style.types';

/* Brand Colors */
export const BRAND_COLORS = {
  primary: '#bd1e01',
  primaryDark: '#771b0a',
  secondary: '#bc7700',
  tertiary: '#eb5e31',
  accent: '#e6a737',
} as const;

/* Font Families */
export const FONTS = {
  funnelDisplayRegular: 'FunnelDisplay-Regular',
} as const;

/* Dark Theme Colors */
export const DARK_THEME: THEME_COLORS = {
  /* Background */
  fillBack: '#0a0a0a',
  fillBase: '#0e0e0e',
  fillMiddle: '#131313',
  fillFront: '#171717',
  fillTop: '#1a1a1a',

  /* Foreground */
  fgStrong: '#fafafa',
  fgDefault: '#c0c0c0',
  fgSubtle: '#a0a0a0',
  fgMuted: '#707070',

  /* Borders */
  bdStrong: '#272727',
  bdDefault: '#202020',
  bdMuted: '#1a1a1a',

  /* Status */
  success: '#00c951',
  successBd: '#0bbc3f',
  successFill: '#07480f',

  danger: '#ff3c45',
  dangerBd: '#130a11',
  dangerFill: '#730005',

  info: '#3694ff',
  infoBd: '#1d5bb9',
  infoFill: '#112b62',

  warning: '#efef1c',
  warningBd: '#bcaf20',
  warningFill: '#5c550c',

  /* Accessibility */
  focus: '#fff',
} as const;

/* Light Theme Colors */
export const LIGHT_THEME: THEME_COLORS = {
  /* Background */
  fillBack: '#f8f8ff',
  fillBase: '#fcfcff',
  fillMiddle: '#eaeafa',
  fillFront: '#e8e8fa',
  fillTop: '#e4e4fa',

  /* Foreground */
  fgStrong: '#050505',
  fgDefault: '#2a2a2a',
  fgSubtle: '#4a4a4a',
  fgMuted: '#6a6a6a',

  /* Borders */
  bdStrong: '#d0d0d0',
  bdDefault: '#d9d9d9',
  bdMuted: '#e0e0e0',

  /* Status */
  success: '#369a00',
  successBd: '#33be17',
  successFill: '#a2fe70',

  danger: '#ba0000',
  dangerBd: '#ef1e1e',
  dangerFill: '#ff6e6e',

  info: '#2f5dd0',
  infoBd: '#7e80ff',
  infoFill: '#b2a9ff',

  warning: '#869800',
  warningBd: '#bfc500',
  warningFill: '#e6f97b',

  /* Accessibility */
  focus: '#000',
} as const;

/* Helper to get colors by theme */
export const getThemeColors = (isDark: boolean): THEME_COLORS => {
  return isDark ? DARK_THEME : LIGHT_THEME;
};
