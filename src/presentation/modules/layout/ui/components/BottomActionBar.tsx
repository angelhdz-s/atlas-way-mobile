import { View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { twMerge } from 'tailwind-merge';
import { TAB_BAR_HEIGHT } from '@/presentation/modules/tabs/ui/tabs.ui.constants';
import { getTarBarMarginBottom } from '@/presentation/modules/tabs/ui/tabs.ui.utils';

type Props = {
  className?: string;
  children?: React.ReactNode;
};

export function BottomActionBar({ className, children }: Props) {
  const insets = useSafeAreaInsets();
  return (
    <View
      className={twMerge('absolute left-4 right-4 z-1', className)}
      style={{
        bottom: getTarBarMarginBottom(insets.bottom) + TAB_BAR_HEIGHT + 16,
      }}
    >
      {children}
    </View>
  );
}
