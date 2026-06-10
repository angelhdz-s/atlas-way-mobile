import { PageContainer } from "@/presentation/ui/components/PageContainer";
import { PageHeader } from "@/presentation/ui/components/PageHeader";
import { View } from "react-native";

export default function Exercises() {
  return (
    <View className="flex-1 bg-fill-back">
      <PageContainer>
        <PageHeader title="Your Exercises" description="Page description" />
      </PageContainer>
    </View>
  );
}
