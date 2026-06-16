import { View } from 'react-native';
import { twMerge } from 'tailwind-merge';

type Props = {
  className?: string;
};

export function BackgroundGradient({ className }: Props) {
  return (
    <View
      className={twMerge(
        'z-0 absolute w-[110%] -left-5 -top-20 h-90 bg-linear-350 from-50% to-100% from-fill-back to-fill-base',
        className
      )}
    />
  );
}
