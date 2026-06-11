import { IconCheck } from '@/presentation/modules/icon/ui/components/Icons';
import { Pressable, View } from 'react-native';
import { twMerge } from 'tailwind-merge';

type Props = {
  className?: string;
  onPress?: () => void;
  onLongPress?: () => void;
  checked?: boolean;
};

export function CheckButton({
  className,
  onLongPress,
  onPress,
  checked = false,
}: Props) {
  return (
    <Pressable
      onPress={onPress}
      onLongPress={onLongPress}
      className={twMerge('size-8 justify-center items-center', className)}
    >
      <View
        className={twMerge(
          'size-6 justify-center items-center rounded-full',
          checked
            ? 'bg-accent'
            : 'shadow-[inset_0_0_0_1px_var(--color-fill-top),0_0_0_1px_var(--color-fill-top)]'
        )}
      >
        {checked && <IconCheck size={16} className="text-fill-back" />}
      </View>
    </Pressable>
  );
}
