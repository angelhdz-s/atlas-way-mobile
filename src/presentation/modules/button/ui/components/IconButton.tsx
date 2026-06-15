import type { NonEmptyString } from '@/shared/shared.types';
import type { IconType } from '@/presentation/modules/icon/ui/components/Icons';
import type { ButtonProps } from '@/presentation/modules/button/ui/button.ui.types';
import type { ButtonVariantProps } from '@/presentation/modules/button/ui/button.ui.variants';
import { Button } from '@/presentation/modules/button/ui/components/Button';
import { BUTTON_ICON_STROKE_WIDTH } from '@/presentation/modules/button/ui/button.ui.variants.constants';
import {
  buttonIconVariants,
  getIconSize,
} from '@/presentation/modules/button/ui/button-icon.ui.variants';

type Props = ButtonProps & {
  Icon: IconType;
  'aria-label': NonEmptyString<string>;
  children?: never;
  iconSize?: ButtonVariantProps['size'];
};

export function IconButton({ Icon, iconSize, ...buttonProps }: Props) {
  const iconClassName = buttonIconVariants(buttonProps.variant);
  const iconFinalSize = getIconSize(iconSize ?? buttonProps.variant?.size);
  return (
    <Button {...buttonProps} className="aspect-square px-0">
      <Icon
        size={iconFinalSize}
        strokeWidth={BUTTON_ICON_STROKE_WIDTH}
        className={iconClassName}
      />
    </Button>
  );
}
