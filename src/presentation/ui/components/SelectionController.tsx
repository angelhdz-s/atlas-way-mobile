import { View } from 'react-native';
import { twMerge } from 'tailwind-merge';
import { CheckButton } from './CheckButton';
import { Text } from './Text';

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
      <Text className="flex-1">{`${itemsSelected} elements selected`}</Text>
      <CheckButton checked={allSelected} />
    </View>
  );
}
