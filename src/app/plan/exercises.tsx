import { View } from 'react-native';
import { PageContainer } from '@/presentation/modules/page/ui/components/PageContainer';
import { PageHeader } from '@/presentation/modules/page/ui/components/PageHeader';

export default function Exercises() {
  return (
    <View className="flex-1 bg-fill-back">
      <PageContainer>
        <PageHeader title="Your Exercises" description="Page description" />
      </PageContainer>
    </View>
  );
}
