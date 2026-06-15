import type {
  ButtonDefaultVariants,
  ButtonSizeVariant,
} from '@/presentation/modules/button/ui/button.ui.types';
import type { FontFamily } from '@/presentation/ui/presentation.ui.types';

export const BUTTON_DEFAULT_VARIANTS: ButtonDefaultVariants = {
  color: 'primary',
  size: 'lg',
};

export const BUTTON_ICON_STROKE_WIDTH = 1.5;
export const BUTTON_TEXT_FONT: FontFamily = 'Outfit Regular';

export const BUTTON_ICON_SIZES: Record<
  keyof ButtonSizeVariant['size'],
  number
> = {
  sm: 20,
  md: 24,
  lg: 28,
};

export const BUTTON_ICON_SIZE = BUTTON_ICON_SIZES.lg;
