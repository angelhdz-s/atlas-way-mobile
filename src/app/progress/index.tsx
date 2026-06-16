import { PageContainer } from '@/presentation/modules/page/ui/components/PageContainer';
import { PageHeader } from '@/presentation/modules/page/ui/components/PageHeader';
import { View } from 'react-native';

export default function Progress() {
  return (
    <View className="flex-1 bg-fill-back">
      <PageContainer>
        <PageHeader title="Your Progress" description="Page description" />
      </PageContainer>
    </View>
  );
}
