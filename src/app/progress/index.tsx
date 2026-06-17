import { PageContainer } from '@/presentation/modules/page/ui/components/PageContainer';
import { PageHeader } from '@/presentation/modules/page/ui/components/PageHeader';
import { ScreenContainer } from '@/presentation/ui/components/ScreenContainer';

export default function Progress() {
  return (
    <ScreenContainer>
      <PageContainer>
        <PageHeader title="Your Progress" description="Page description" />
      </PageContainer>
    </ScreenContainer>
  );
}
