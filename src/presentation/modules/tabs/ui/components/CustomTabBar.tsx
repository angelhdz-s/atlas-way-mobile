import type { BottomTabBarProps } from 'expo-router/build/react-navigation/bottom-tabs';
import type { IconType } from '@/presentation/modules/icon/ui/components/Icons';
import { View } from 'react-native';
import { twMerge } from 'tailwind-merge';
import {
  IconActivity,
  IconChartSpline,
  IconHome,
  IconTrophy,
} from '@/presentation/modules/icon/ui/components/Icons';
import { CustomTab } from '@/presentation/modules/tabs/ui/components/CustomTab';
import { TAB_BAR_HEIGHT } from '@/presentation/modules/tabs/ui/tabs.ui.constants';
import { getTarBarMarginBottom } from '@/presentation/modules/tabs/ui/tabs.ui.utils';

type Props = {
  className?: string;
};

type Tabs = 'index' | 'plan' | 'progress' | 'activity';

const icons: Record<Tabs, IconType> = {
  activity: IconActivity,
  index: IconHome,
  plan: IconTrophy,
  progress: IconChartSpline,
};

export function CustomTabBar({
  className,
  descriptors,
  insets,
  navigation,
  state,
}: Props & BottomTabBarProps) {
  return (
    <View
      className={twMerge(
        'absolute shrink-0 w-auto bottom-0 left-0 right-0',
        className
      )}
      style={{
        marginBottom: getTarBarMarginBottom(insets.bottom),
        height: TAB_BAR_HEIGHT,
      }}
    >
      <View className="self-center shadow-2xl shadow-fill-back-dark border border-bd-muted shrink-0 rounded-full bg-fill-middle flex-row items-center justify-center px-2">
        {state.routes.map((r, i) => {
          const focused = state.index === i;

          const options = descriptors[r.key].options;

          const label =
            typeof options.tabBarLabel === 'string'
              ? options.tabBarLabel
              : (options.title ?? r.name);

          const onPress = () => {
            const event = navigation.emit({
              target: r.key,
              type: 'tabPress',
              canPreventDefault: true,
            });

            if (!focused && !event.defaultPrevented) {
              navigation.navigate(r.name, r.params);
            }
          };

          return (
            <CustomTab
              key={r.key}
              Icon={icons[r.name as never] ?? IconHome}
              label={label}
              active={focused}
              onPress={onPress}
            />
          );
        })}
      </View>
    </View>
  );
}
