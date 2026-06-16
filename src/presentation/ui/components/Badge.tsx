import { AppText } from '@/presentation/ui/components/AppText';
import { View } from 'react-native';
import { twMerge } from 'tailwind-merge';

export type BadgeVariant = 'default' | 'subtle' | 'success' | 'info' | 'danger';

const themeClassName: Record<BadgeVariant, string> = {
  default: 'text-accent',
  success: 'text-success',
  danger: 'text-danger',
  info: 'text-info',
  subtle: 'text-fg-muted',
};

type Props = {
  className?: string;
  text: string;
  variant?: BadgeVariant;
};

export function Badge({ className, text, variant = 'default' }: Props) {
  const variantClassName = themeClassName[variant] || 'default';
  return (
    <View
      className={twMerge(
        'h-5.5 items-center justify-center px-1.5 text-success rounded-full bg-fill-top',
        className
      )}
    >
      <AppText className={twMerge('text-sm leading-tight', variantClassName)}>
        {text}
      </AppText>
    </View>
  );
}
