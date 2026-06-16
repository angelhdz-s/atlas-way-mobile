import { AppText } from '@/presentation/ui/components/AppText';
import { View } from 'react-native';
import { twMerge } from 'tailwind-merge';
import { CheckButton } from './CheckButton';

type Props = {
  className?: string;
  itemsSelected: number;
  isSelecting: boolean;
  allSelected: boolean;
};

export function SelectionController({
  className,
  allSelected,
  isSelecting,
  itemsSelected,
}: Props) {
  return (
    <View className={twMerge('flex-row px-2 h-10 items-center', className)}>
      <AppText className="flex-1">{`${itemsSelected} elements selected`}</AppText>
      <CheckButton checked={allSelected} />
    </View>
  );
}
