import { StreakDayNoStateCircle } from '@/presentation/modules/streak/ui/components/StreakDayNoStateCircle';
import { AppText } from '@/presentation/ui/components/AppText';
import { Check } from 'lucide-react-native';
import { View } from 'react-native';
import { twMerge } from 'tailwind-merge';
import { withUniwind } from 'uniwind';

type Props = {
  completed?: boolean;
  text: string;
};

const IconCheck = withUniwind(Check);

export function StreakDay({ text, completed = false }: Props) {
  const className = completed ? 'text-fg-default' : 'text-fg-default';
  return (
    <View className={twMerge('justify-center items-center rounded-3xl')}>
      <AppText className={twMerge('text-center text-sm', className)}>
        {text}
      </AppText>
      {completed ? (
        <View className="bg-primary rounded-full size-5 justify-center items-center">
          <IconCheck
            strokeWidth={2}
            size={16}
            className="text-fg-strong-dark"
          />
        </View>
      ) : (
        <StreakDayNoStateCircle />
      )}
    </View>
  );
}
