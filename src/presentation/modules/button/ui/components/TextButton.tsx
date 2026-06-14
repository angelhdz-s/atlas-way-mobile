import type { ButtonProps } from '@/presentation/modules/button/ui/button.ui.types';
import { twMerge } from 'tailwind-merge';
import { buttonTextVariants } from '@/presentation/modules/button/ui/button-text.ui.variants';
import { BUTTON_TEXT_FONT } from '@/presentation/modules/button/ui/button.ui.variants.constants';
import { Button } from '@/presentation/modules/button/ui/components/Button';
import { Text } from '@/presentation/ui/components/Text';

type Props = ButtonProps & {
  text: string;
  children?: never;
};

export function TextButton({ text, ...buttonProps }: Props) {
  const textVariantClassName = buttonTextVariants(buttonProps.variant);
  return (
    <Button {...buttonProps}>
      <Text
        font={BUTTON_TEXT_FONT}
        className={twMerge('', textVariantClassName)}
      >
        {text}
      </Text>
    </Button>
  );
}
