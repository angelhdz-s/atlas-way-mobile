import { IconButton } from '@/presentation/modules/button/ui/components/IconButton';
import {
  IconMoon,
  IconSun,
} from '@/presentation/modules/icon/ui/components/Icons';
import { useAppTheme } from '@/presentation/modules/theme/ui/hooks/useAppTheme';
import { AppText } from '@/presentation/ui/components/AppText';
import { DARK_THEME, LIGHT_THEME } from '@/styles';
import { View } from 'react-native';
import { twMerge } from 'tailwind-merge';
import type { ThemeName } from 'uniwind';
import { Uniwind } from 'uniwind';

type Props = {
  className?: string;
  lockedTheme?: ThemeName;
};

export function LandingStackHeader({ className, lockedTheme }: Props) {
  const { isDark } = useAppTheme();
  const colors = {
    light: LIGHT_THEME.fgDefault,
    dark: DARK_THEME.fgDefault,
  };
  const handleToggleTheme = () => {
    Uniwind.setTheme(isDark ? 'light' : 'dark');
  };

  return (
    <View
      className={twMerge('flex-row items-center justify-between', className)}
    >
      <AppText colors={colors} lockedTheme={lockedTheme}>
        angelhdzs15@gmail.com
      </AppText>
      <View className="flex-row gap-4 items-center">
        <IconButton
          onPress={handleToggleTheme}
          Icon={isDark ? IconSun : IconMoon}
          aria-label="Switch theme"
          variant={{
            size: 'sm',
            color: 'simple',
          }}
          lockedTheme={lockedTheme}
        />
        <View className="size-10 bg-fill-back border border-bd-default rounded-full"></View>
      </View>
    </View>
  );
}
