import type { ButtonVariantsType } from '@/presentation/modules/button/ui/button.ui.types';
import { tv } from 'tailwind-variants';
import { BUTTON_DEFAULT_VARIANTS } from '@/presentation/modules/button/ui/button.ui.variants.constants';

export const buttonTextVariants = tv({
  base: 'text-fg-strong text-center',
  variants: {
    color: {
      primary: 'text-fg-strong-dark',
      outline: '',
      subtle: '',
      simple: '',
    },
    size: {
      sm: '',
      md: '',
      lg: '',
    },
  } satisfies ButtonVariantsType,
  defaultVariants: BUTTON_DEFAULT_VARIANTS,
});
