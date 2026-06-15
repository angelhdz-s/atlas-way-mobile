import type { VariantProps } from 'tailwind-variants';
import type { ButtonVariantsType } from '@/presentation/modules/button/ui/button.ui.types';
import { tv } from 'tailwind-variants';
import { BUTTON_DEFAULT_VARIANTS } from '@/presentation/modules/button/ui/button.ui.variants.constants';

export const buttonVariants = tv({
  base: 'rounded-full items-center justify-center active:scale-105 flex-row',
  variants: {
    size: {
      sm: 'h-10 px-4',
      md: 'h-11 px-5',
      lg: 'h-12 px-6',
    },
    color: {
      primary: 'bg-primary',
      outline: 'shadow-[inset_0_0_0_1px_var(--color-fill-top)]',
      subtle: 'bg-fill-top',
      simple: '',
    },
  } satisfies ButtonVariantsType,
  defaultVariants: BUTTON_DEFAULT_VARIANTS,
});

export type ButtonVariantProps = VariantProps<typeof buttonVariants>;
export type ButtonVariantColor = NonNullable<ButtonVariantProps['color']>;
export type ButtonVariantSize = NonNullable<ButtonVariantProps['size']>;
