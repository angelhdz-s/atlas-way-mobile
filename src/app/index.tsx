import { LandingStackHeader } from "@/presentation/ui/components/LandingStackHeader";
import { PageContainer } from "@/presentation/ui/components/PageContainer";
import { PageHeader } from "@/presentation/ui/components/PageHeader";
import { SectionHeader } from "@/presentation/ui/components/SectionHeader";
import { StreakBar } from "@/presentation/ui/components/StreakBar";

export default function Index() {
  return (
        <LandingStackHeader />
      <PageHeader
        title="Hi, Angel"
        description="Start achieving your fit goals"
      />

        <StreakBar className="w-fit self-center" />

      <View className="mt-4">
        <SectionHeader title="Your Sessions" />
        <View></View>
      </View>
    </PageContainer>
  );
}
