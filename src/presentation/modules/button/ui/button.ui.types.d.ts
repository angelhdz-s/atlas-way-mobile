import type { PressableProps } from 'react-native';
import type { ButtonVariantProps } from '@/presentation/modules/button/ui/button.ui.variants';

export type ButtonVariantsType = {
  color: {
    primary: string;
    outline: string;
    subtle: string;
    simple: string;
  };
  size: {
    sm: string;
    md: string;
    lg: string;
  };
  theme: {
    dark: string;
    light: string;
  };
};

type ButtonColorVariant = Pick<ButtonVariantsType, 'color'>;
type ButtonSizeVariant = Pick<ButtonVariantsType, 'size'>;

export type ButtonDefaultColorVariantKey = Record<
  keyof ButtonColorVariant,
  keyof ButtonVariantsType['color']
>;
export type ButtonSizeVariantKey = Record<
  keyof ButtonSizeVariant,
  keyof ButtonVariantsType['size']
>;

export type ButtonDefaultVariants = ButtonDefaultColorVariantKey &
  ButtonSizeVariantKey;

export type ButtonProps = PressableProps & {
  variant?: ButtonVariantProps;
};
