import { PageHeaderDescription } from '@/presentation/modules/page/ui/components/PageHeaderDescription';
import { PageHeaderTitle } from '@/presentation/modules/page/ui/components/PageHeaderTitle';
import { View } from 'react-native';
import { twMerge } from 'tailwind-merge';
import type { ThemeName } from 'uniwind';

type Props = {
  title: string;
  className?: string;
  description?: string;
  lockedTheme?: ThemeName;
};

export function PageHeader({
  className,
  title,
  description,
  lockedTheme,
}: Props) {
  return (
    <View className={twMerge('gap-1', className)}>
      <PageHeaderTitle text={title} lockedTheme={lockedTheme} />
      {description && <PageHeaderDescription text={description} />}
    </View>
  );
}
