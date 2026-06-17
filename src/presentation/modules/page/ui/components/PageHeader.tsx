import type { ThemeName } from 'uniwind';
import { View } from 'react-native';
import { twMerge } from 'tailwind-merge';
import { PageHeaderDescription } from '@/presentation/modules/page/ui/components/PageHeaderDescription';
import { PageHeaderTitle } from '@/presentation/modules/page/ui/components/PageHeaderTitle';

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
      <PageHeaderTitle
        text={title}
        lockedTheme={lockedTheme}
        className="text-fg-strong"
      />
      {description && (
        <PageHeaderDescription text={description} lockedTheme={lockedTheme} />
      )}
    </View>
  );
}
