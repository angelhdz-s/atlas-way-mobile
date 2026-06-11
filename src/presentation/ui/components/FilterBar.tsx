import {
  IconSearch,
  IconSlidersHorizontal,
} from '@/presentation/modules/icon/ui/components/Icons';
import { DARK_THEME } from '@/styles';
import { TextInput, View } from 'react-native';
import { twMerge } from 'tailwind-merge';

type Props = {
  className?: string;
};

export function FilterBar({ className }: Props) {
  return (
    <View className={twMerge('flex-row items-center gap-4', className)}>
      <View className="px-2 flex-row items-center gap-2 bg-fill-middle flex-1 rounded-lg">
        <IconSearch className="text-fg-muted" size={16} strokeWidth={1.5} />
        <TextInput
          placeholder="Search..."
          placeholderTextColor={DARK_THEME.fgMuted}
          className="text-fg-default min-h-10 flex-1"
        />
      </View>
      <IconSlidersHorizontal size={20} className="text-fg-strong" />
    </View>
  );
}
