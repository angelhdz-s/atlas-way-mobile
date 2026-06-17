import { useAppTheme } from '@/presentation/modules/theme/ui/hooks/useAppTheme';
import { getFont } from '@/presentation/utils/font.utils';
import { getLightDarkColors } from '@/presentation/utils/style.utils';
import { DARK_THEME } from '@/styles';
import { Stack } from 'expo-router';

export default function Layout() {
  const { isDark } = useAppTheme();
  const backgroundColors = getLightDarkColors('fillBack');
  const backgroundColor = isDark
    ? backgroundColors.dark
    : backgroundColors.light;
  return (
    <Stack
      screenOptions={{
        headerTitleStyle: {
          color: DARK_THEME.fgStrong,
          fontFamily: getFont('Outfit Regular'),
          fontWeight: '400',
        },
      }}
    >
      <Stack.Screen
        name="index"
        options={{
          title: 'Plan',
          headerShown: false,
          contentStyle: {
            backgroundColor,
          },
        }}
      />
      <Stack.Screen
        name="routines"
        options={{
          title: 'Your Routines',
          headerTransparent: true,
          contentStyle: {
            backgroundColor,
          },
        }}
      />
      <Stack.Screen
        name="sessions"
        options={{
          title: 'Your Sessions',
          headerTransparent: true,
          contentStyle: {
            backgroundColor,
          },
        }}
      />
      <Stack.Screen
        name="exercises"
        options={{
          title: 'Your Exercises',
          headerTransparent: true,
          contentStyle: {
            backgroundColor,
          },
        }}
      />
    </Stack>
  );
}
