import { DARK_THEME } from '@/styles';
import { Stack } from 'expo-router';
import { getFont } from '@/presentation/utils/font.utils';

export default function Layout() {
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
        }}
      />
      <Stack.Screen
        name="routines"
        options={{
          title: 'Your Routines',
          headerTransparent: true,
        }}
      />
      <Stack.Screen
        name="sessions"
        options={{
          title: 'Your Sessions',
          headerTransparent: true,
        }}
      />
      <Stack.Screen
        name="exercises"
        options={{
          title: 'Your Exercises',
          headerTransparent: true,
        }}
      />
    </Stack>
  );
}
