export type THEME_COLORS = {
  // Background Colors
  fillBack: string;
  fillBase: string;
  fillMiddle: string;
  fillFront: string;
  fillTop: string;

  // Foreground
  fgStrong: string;
  fgDefault: string;
  fgSubtle: string;
  fgMuted: string;

  // Borders
  bdStrong: string;
  bdDefault: string;
  bdMuted: string;

  // Status
  // Sucess / Complete
  success: string;
  successBd: string;
  successFill: string;

  // Danger / Cancel
  danger: string;
  dangerBd: string;
  dangerFill: string;

  // Info / Unread
  info: string;
  infoBd: string;
  infoFill: string;

  // Warning / To consider
  warning: string;
  warningBd: string;
  warningFill: string;

  /* Accessibility */
  focus: string;
};

export type LightDarkColor = {
  dark: string;
  light: string;
};
