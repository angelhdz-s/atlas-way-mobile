import type { FontFamily } from '@/presentation/ui/presentation.ui.types';
import type { TextProps as RNTextProps } from 'react-native';
import { Text as RNText } from 'react-native';
import { twMerge } from 'tailwind-merge';
import { getFont } from '@/presentation/utils/font.utils';

export type TextProps = RNTextProps & {
  className?: string;
  font?: FontFamily;
};

export function Text({
  className,
  children,
  font = 'Outfit Regular',
  style,
  ...props
}: TextProps) {
  const fontFamily = getFont(font);
  return (
    <RNText
      className={twMerge('text-base tracking-tight', className)}
      style={{ fontFamily, ...style }}
      {...props}
    >
      {children}
    </RNText>
  );
}
