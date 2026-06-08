import { StreakDay } from "@/presentation/modules/streak/ui/components/StreakDay";
import { PageContainer } from "@/presentation/ui/components/PageContainer";
import { PageHeader } from "@/presentation/ui/components/PageHeader";
import { SectionHeader } from "@/presentation/ui/components/SectionHeader";
import { Text } from "@/presentation/ui/components/Text";
import { DARK_THEME } from "@/styles";
import { Bell, Dumbbell, Flame } from "lucide-react-native";
import { Pressable, View } from "react-native";

export default function Index() {
  return (
        <LandingStackHeader />
      <PageHeader
        title="Hi, Angel"
        description="Start achieving your fit goals"
      />

      <View className="flex-row gap-2 items-center p-2 bg-fill-base rounded-2xl shadow-2xl shadow-fill-back/20">
        <View className="relative size-14 aspect-square items-center justify-center bg-fill-middle rounded-xl border border-bd-muted">
          <View className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <Flame color={DARK_THEME.fgMuted} size={32} strokeWidth={1.5} />
          </View>
        </View>
        <View className="flex-1 flex-row gap-1 pr-2">
          <StreakDay text="M" completed={true} />
          <StreakDay text="T" completed={true} />
          <StreakDay text="W" completed={true} />
          <StreakDay text="T" />
          <StreakDay text="F" />
          <StreakDay text="S" />
          <StreakDay text="S" />
        </View>
      </View>

      <View className="relative h-48 w-full bg-primary shadow-2xl shadow-fill-back/50 rounded-3xl p-4">
        <Dumbbell
          color={DARK_THEME.fgStrong}
          strokeWidth={0.3}
          size={196}
          style={{
            position: "absolute",
            right: 0,
            top: 0,
            bottom: 0,
            marginVertical: "auto",
            opacity: 0.5,
          }}
        />

        <View className="flex-1">
          <View className="flex-row gap-4 items-center">
            <View className="size-12 bg-primary-dark rounded-xl justify-center items-center">
              <Dumbbell
                color={DARK_THEME.fgStrong}
                strokeWidth={1.5}
                size={24}
              />
            </View>
            <View>
              <Text
                font="funnel-display-600"
                className="tracking-tight leading-none text-xl text-fg-strong"
              >
                Push Day
              </Text>
              <Text
                font="funnel-display-300"
                className="tracking-tight leading-none text-base text-fg-strong"
              >
                Tuesday, April 24
              </Text>
            </View>
          </View>
        </View>

        <Pressable className="rounded-full h-12 bg-fill-top items-center justify-center w-auto">
          <Text
            font="outfit-500"
            className="tracking-tight text-xl text-fg-strong w-auto"
          >
            {"Let's Train"}
          </Text>
        </Pressable>
      </View>

      <View className="mt-4">
        <SectionHeader title="Your Sessions" />
        <View></View>
      </View>
    </PageContainer>
  );
}
