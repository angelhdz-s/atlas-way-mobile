import type { ThemeName } from 'uniwind';
import type { ButtonProps } from '@/presentation/modules/button/ui/button.ui.types';
import { getButtonColors } from '@/presentation/modules/button/ui/button-color.ui.styles';
import { buttonTextVariants } from '@/presentation/modules/button/ui/button-text.ui.variants';
import { BUTTON_TEXT_FONT } from '@/presentation/modules/button/ui/button.ui.variants.constants';
import { Button } from '@/presentation/modules/button/ui/components/Button';
import { AppText } from '@/presentation/ui/components/AppText';

type Props = ButtonProps & {
  text: string;
  children?: never;
  lockedTheme?: ThemeName;
};

export function TextButton({ text, lockedTheme, ...buttonProps }: Props) {
  const colors = getButtonColors(buttonProps.variant?.color);
  const textClassName = buttonTextVariants(buttonProps.variant);
  return (
    <Button {...buttonProps}>
      <AppText
        font={BUTTON_TEXT_FONT}
        className={textClassName}
        colors={colors}
      >
        {text}
      </AppText>
    </Button>
  );
}
