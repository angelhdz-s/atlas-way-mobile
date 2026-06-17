import type { ButtonProps } from '@/presentation/modules/button/ui/button.ui.types';
import type { ButtonVariantProps } from '@/presentation/modules/button/ui/button.ui.variants';
import type { IconType } from '@/presentation/modules/icon/ui/components/Icons';
import type { NonEmptyString } from '@/shared/shared.types';
import type { ThemeName } from 'uniwind';
import { getButtonColors } from '@/presentation/modules/button/ui/button-color.ui.styles';
import { getIconSize } from '@/presentation/modules/button/ui/button-icon.ui.variants';
import { BUTTON_ICON_STROKE_WIDTH } from '@/presentation/modules/button/ui/button.ui.variants.constants';
import { Button } from '@/presentation/modules/button/ui/components/Button';
import { useAppTheme } from '@/presentation/modules/theme/ui/hooks/useAppTheme';

type Props = ButtonProps & {
  Icon: IconType;
  'aria-label': NonEmptyString<string>;
  children?: never;
  iconSize?: ButtonVariantProps['size'];
  lockedTheme?: ThemeName;
};

export function IconButton({
  Icon,
  iconSize,
  lockedTheme,
  ...buttonProps
}: Props) {
  const { isDark } = useAppTheme();
  const colors = getButtonColors(buttonProps.variant?.color);
  const iconFinalSize = getIconSize(iconSize ?? buttonProps.variant?.size);
  const isThemeDark = lockedTheme ? lockedTheme === 'dark' : isDark;
  return (
    <Button {...buttonProps} className="aspect-square px-0">
      <Icon
        size={iconFinalSize}
        strokeWidth={BUTTON_ICON_STROKE_WIDTH}
        color={isThemeDark ? colors.dark : colors.light}
      />
    </Button>
  );
}
