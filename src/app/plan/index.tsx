import { View } from 'react-native';
import { BackgroundGradient } from '@/presentation/modules/decorative/ui/components/BackgroundGradient';
import {
  IconClipboardList,
  IconDumbbell,
  IconRoute,
} from '@/presentation/modules/icon/ui/components/Icons';
import { PageContainer } from '@/presentation/modules/page/ui/components/PageContainer';
import { PageHeader } from '@/presentation/modules/page/ui/components/PageHeader';
import { PlanCardLink } from '@/presentation/modules/plan/ui/components/PlanCardLink';
import { LandingStackHeader } from '@/presentation/ui/components/LandingStackHeader';

export default function Plan() {
  return (
    <View className="flex-1">
      <PageContainer className="relative flex-1" noHeader>
        <BackgroundGradient />
        <LandingStackHeader />
        <PageHeader
          title="Plan"
          description="Your routines, sessions and exercises"
        />

        <View className="gap-4">
          <PlanCardLink
            title="Routines"
            Icon={IconRoute}
            description="Organization of your sessions"
            href="/plan/routines"
            badge="3 routines"
          />
          <PlanCardLink
            title="Sessions"
            Icon={IconClipboardList}
            description="Organization of your exercises"
            href="/plan/sessions"
            badge="6 sessions"
          />
          <PlanCardLink
            title="Exercises"
            Icon={IconDumbbell}
            description="Definition of your exercise metrics"
            href="/plan/exercises"
            badge="18 exercises"
          />
        </View>
      </PageContainer>
    </View>
  );
}
