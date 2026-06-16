import type { ButtonVariantsType } from '@/presentation/modules/button/ui/button.ui.types';
import type { ButtonVariantProps } from '@/presentation/modules/button/ui/button.ui.variants';
import { tv } from 'tailwind-variants';
import {
  BUTTON_DEFAULT_VARIANTS,
  BUTTON_ICON_SIZE,
  BUTTON_ICON_SIZES,
} from '@/presentation/modules/button/ui/button.ui.variants.constants';

export const buttonIconVariants = tv({
  base: 'text-fg-strong',
  variants: {
    color: {
      primary: '',
      outline: '',
      subtle: '',
      simple: '',
    },
    size: {
      sm: '',
      md: '',
      lg: '',
    },
    theme: {
      dark: 'text-fg-strong-dark',
      light: 'text-fg-strong-light',
    },
  } satisfies ButtonVariantsType,
  compoundVariants: [
    {
      theme: 'dark',
      color: 'primary',
      class: 'text-fg-strong-dark',
    },
  ],
  defaultVariants: BUTTON_DEFAULT_VARIANTS,
});

export function getIconSize(size: ButtonVariantProps['size']): number {
  if (!size) return BUTTON_ICON_SIZE;
  const resultSize = BUTTON_ICON_SIZES[size];
  return resultSize ?? BUTTON_ICON_SIZE;
}
