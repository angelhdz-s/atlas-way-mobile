import type { IconType } from '@/presentation/modules/icon/ui/components/Icons';
import type { ButtonProps } from '@/presentation/modules/button/ui/button.ui.types';
import type { ButtonVariantProps } from '@/presentation/modules/button/ui/button.ui.variants';
import { View } from 'react-native';
import { twMerge } from 'tailwind-merge';
import { Text } from '@/presentation/ui/components/Text';
import { buttonTextVariants } from '@/presentation/modules/button/ui/button-text.ui.variants';
import {
  buttonIconVariants,
  getIconSize,
} from '@/presentation/modules/button/ui/button-icon.ui.variants';
import { Button } from '@/presentation/modules/button/ui/components/Button';
import {
  BUTTON_ICON_STROKE_WIDTH,
  BUTTON_TEXT_FONT,
} from '@/presentation/modules/button/ui/button.ui.variants.constants';

type Props = ButtonProps & {
  textCentered?: boolean;
  text: string;
  iconSize?: ButtonVariantProps['size'];
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
  ...buttonProps
}: Props) {
  const textClassName = buttonTextVariants(buttonProps.variant);
  const iconClassName = buttonIconVariants(buttonProps.variant);
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
              className={iconClassName}
            />
          )}
        </View>
      )}
      <View className={twMerge(textCentered && 'flex-1')}>
        <Text font={BUTTON_TEXT_FONT} className={textClassName}>
          {text}
        </Text>
      </View>
      {(textCentered || RightIcon) && (
        <View style={{ width: iconFinalSize, height: iconFinalSize }}>
          {RightIcon && (
            <RightIcon
              strokeWidth={BUTTON_ICON_STROKE_WIDTH}
              size={iconFinalSize}
              className={iconClassName}
            />
          )}
        </View>
      )}
    </Button>
  );
}
