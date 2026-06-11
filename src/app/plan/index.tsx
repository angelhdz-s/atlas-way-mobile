import { PageContainer } from "@/presentation/ui/components/PageContainer";
import { PageHeader } from "@/presentation/ui/components/PageHeader";
import { View } from "react-native";

export default function Plan() {
  return (
    <View>
      <PageContainer>
        <PageHeader title="Plan" description="Page description" />
      </PageContainer>
    </View>
  );
}
