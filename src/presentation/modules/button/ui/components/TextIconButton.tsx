import type { ButtonProps } from '@/presentation/modules/button/ui/button.ui.types';
import type { ButtonVariantProps } from '@/presentation/modules/button/ui/button.ui.variants';
import type { IconType } from '@/presentation/modules/icon/ui/components/Icons';
import type { ThemeName } from 'uniwind';
import { View } from 'react-native';
import { twMerge } from 'tailwind-merge';
import { getButtonColors } from '@/presentation/modules/button/ui/button-color.ui.styles';
import { getIconSize } from '@/presentation/modules/button/ui/button-icon.ui.variants';
import {
  BUTTON_ICON_STROKE_WIDTH,
  BUTTON_TEXT_FONT,
} from '@/presentation/modules/button/ui/button.ui.variants.constants';
import { Button } from '@/presentation/modules/button/ui/components/Button';
import { useAppTheme } from '@/presentation/modules/theme/ui/hooks/useAppTheme';
import { AppText } from '@/presentation/ui/components/AppText';

type Props = ButtonProps & {
  textCentered?: boolean;
  text: string;
  iconSize?: ButtonVariantProps['size'];
  lockedTheme?: ThemeName;
} & (
    | {
        LeftIcon: IconType;
        RightIcon?: never;
      }
    | {
        LeftIcon?: never;
        RightIcon: IconType;
      }
    | {
        LeftIcon: IconType;
        RightIcon: IconType;
      }
  );

export function TextIconButton({
  text,
  LeftIcon,
  RightIcon,
  textCentered = false,
  className,
  iconSize,
  lockedTheme,
  ...buttonProps
}: Props) {
  const { isDark } = useAppTheme();
  const colors = getButtonColors(buttonProps.variant?.color);
  const isThemeDark =
    lockedTheme === undefined ? isDark : lockedTheme === 'dark';
  const iconFinalSize = getIconSize(iconSize ?? buttonProps.variant?.size);
  return (
    <Button
      className={twMerge(
        LeftIcon !== undefined && 'pl-3',
        RightIcon !== undefined && 'pr-3',
        className
      )}
      {...buttonProps}
    >
      {(textCentered || LeftIcon) && (
        <View style={{ width: iconFinalSize, height: iconFinalSize }}>
          {LeftIcon && (
            <LeftIcon
              strokeWidth={BUTTON_ICON_STROKE_WIDTH}
              size={iconFinalSize}
              color={isThemeDark ? colors.dark : colors.dark}
            />
          )}
        </View>
      )}
      <View className={twMerge(textCentered && 'flex-1')}>
        <AppText
          font={BUTTON_TEXT_FONT}
          colors={colors}
          lockedTheme={lockedTheme}
        >
          {text}
        </AppText>
      </View>
      {(textCentered || RightIcon) && (
        <View style={{ width: iconFinalSize, height: iconFinalSize }}>
          {RightIcon && (
            <RightIcon
              strokeWidth={BUTTON_ICON_STROKE_WIDTH}
              size={iconFinalSize}
              color={isThemeDark ? colors.dark : colors.dark}
            />
          )}
        </View>
      )}
    </Button>
  );
}
