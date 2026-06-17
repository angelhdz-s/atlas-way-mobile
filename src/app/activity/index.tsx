import { PageContainer } from '@/presentation/modules/page/ui/components/PageContainer';
import { PageHeader } from '@/presentation/modules/page/ui/components/PageHeader';
import { ScreenContainer } from '@/presentation/ui/components/ScreenContainer';

export default function Activity() {
  return (
    <ScreenContainer>
      <PageContainer>
        <PageHeader title="Your Activity" description="Page description" />
      </PageContainer>
    </ScreenContainer>
  );
}
