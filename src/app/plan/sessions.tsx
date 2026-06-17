import { PageContainer } from '@/presentation/modules/page/ui/components/PageContainer';
import { PageHeader } from '@/presentation/modules/page/ui/components/PageHeader';
import { ScreenContainer } from '@/presentation/ui/components/ScreenContainer';

export default function Sessions() {
  return (
    <ScreenContainer>
      <PageContainer>
        <PageHeader title="Your Sessions" description="Page description" />
      </PageContainer>
    </ScreenContainer>
  );
}
