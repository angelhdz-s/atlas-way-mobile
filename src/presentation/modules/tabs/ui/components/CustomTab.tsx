import type { IconType } from '@/presentation/modules/icon/ui/components/Icons';
import { getThemeColors } from '@/styles';
import { Pressable, View } from 'react-native';
import Animated from 'react-native-reanimated';
import { twMerge } from 'tailwind-merge';
import { useUniwind } from 'uniwind';
import { AppText } from '@/presentation/ui/components/AppText';

type Props = {
  className?: string;
  label: string;
  Icon: IconType;
  active?: boolean;
  onPress?: () => void;
  onLongPress?: () => void;
};

export function CustomTab({
  className,
  Icon,
  label,
  active = false,
  onLongPress,
  onPress,
}: Props) {
  const { theme } = useUniwind();
  const COLORS = getThemeColors(theme === 'dark');

  return (
    // ToDo: bar slide animation
    <Pressable onPress={onPress} onLongPress={onLongPress}>
      <Animated.View
        className={twMerge(
          'relative items-center justify-center h-16 w-20',
          className
        )}
        style={{
          transitionProperty: 'opacity',
          transitionDuration: 300,
          opacity: active ? 1 : 0.5,
        }}
      >
        <Animated.View
          className={twMerge(
            'absolute top-0 left-1/2 -translate-x-1/2 h-0.5 rounded-md w-9'
          )}
          style={{
            transitionProperty: 'backgroundColor',
            transitionDuration: 200,
            backgroundColor: active ? COLORS.fgStrong : undefined,
          }}
        />
        <View>
          <Icon size={16} strokeWidth={1.5} className="text-fg-strong" />
        </View>
        <AppText className="text-sm text-fg-strong">{label}</AppText>
      </Animated.View>
    </Pressable>
  );
}
