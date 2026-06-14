import type { ButtonProps } from '@/presentation/modules/button/ui/button.ui.types';
import { Pressable } from 'react-native';
import { twMerge } from 'tailwind-merge';
import { buttonVariants } from '@/presentation/modules/button/ui/button.ui.variants';

type Props = ButtonProps;

export function Button({ children, variant, className, ...restProps }: Props) {
  const buttonVariantClassName = buttonVariants(variant);
  return (
    <Pressable
      className={twMerge(buttonVariantClassName, className)}
      {...restProps}
    >
      {children}
    </Pressable>
  );
}
