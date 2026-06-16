import { getFont } from '@/presentation/utils/font.utils';
import { DARK_THEME } from '@/styles';
import { Stack } from 'expo-router';

export default function Layout() {
  return (
    <Stack
      screenOptions={{
        headerTransparent: true,
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
          title: 'Progress',
          contentStyle: {
            backgroundColor: DARK_THEME.fillBack,
          },
        }}
      />
    </Stack>
  );
}
