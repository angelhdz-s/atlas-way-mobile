import { TextButton } from '@/presentation/modules/button/ui/components/TextButton';
import {
  IconCalendar,
  IconClipboardList,
  IconDumbbell,
  IconFlame,
  IconRoute,
  IconWeight,
} from '@/presentation/modules/icon/ui/components/Icons';
import { PageContainer } from '@/presentation/modules/page/ui/components/PageContainer';
import { PageHeader } from '@/presentation/modules/page/ui/components/PageHeader';
import { AppText } from '@/presentation/ui/components/AppText';
import { LandingStackHeader } from '@/presentation/ui/components/LandingStackHeader';
import { LinkBar } from '@/presentation/ui/components/LinkBar';
import { LinkCard } from '@/presentation/ui/components/LinkCard';
import { SectionHeader } from '@/presentation/ui/components/SectionHeader';
import { StreakBar } from '@/presentation/ui/components/StreakBar';
import { TrackingCard } from '@/presentation/ui/components/TrackingCard';
import { Link } from 'expo-router';
import { Pressable, View } from 'react-native';
import { twMerge } from 'tailwind-merge';

export default function Index() {
  return (
    <View className="flex-1 relative bg-fill-back">
      <View>
        <PageContainer className="relative bg-fill-back" noHeader>
          <View className="absolute w-[110%] h-86 z-0 -top-20 -left-4 mx-auto bg-linear-180 from-60% to-150% from-primary to-primary-dark" />
          <LandingStackHeader lockedTheme="dark" />
          <PageHeader
            title="Hi, Angel"
            description="Start achieving your fit goals"
            lockedTheme="dark"
          />

          <StreakBar className="w-fit self-center" />

          <Link asChild href={'/plan'} push>
            <Pressable className="bg-primary rounded-3xl">
              {({ pressed }) => (
                <TrackingCard className={twMerge(pressed && 'opacity-50')} />
              )}
            </Pressable>
          </Link>

          <View className="gap-4">
            <SectionHeader title="Your Performance">
              <AppText className="text-fg-strong">See More</AppText>
            </SectionHeader>
            <View className="gap-2">
              <LinkBar
                title="Weight"
                badge="+20% this month"
                Icon={IconWeight}
              />
              <LinkBar
                title="Sessions Done"
                badge="100% this month"
                Icon={IconFlame}
              />
              <LinkBar
                title="Weight"
                badge="+20% this month"
                Icon={IconDumbbell}
              />
            </View>
          </View>

          <View className="gap-4">
            <SectionHeader title="Your Plan" />
            <View className="gap-2">
              <View className="justify-between flex-row gap-2">
                <LinkCard
                  title="Routines"
                  description="Organization of your sessions"
                  Icon={IconRoute}
                  className="w-[49%]"
                />
                <LinkCard
                  title="Sessions"
                  description="Exercise organization of a training day"
                  Icon={IconClipboardList}
                  className="w-[49%]"
                />
              </View>
              <View className="justify-between flex-row gap-2">
                <LinkCard
                  title="Exercises"
                  description="Exercises based on muscles you want to train"
                  Icon={IconDumbbell}
                  className="w-[49%]"
                />
                <LinkCard
                  title="Calendar"
                  description="Organization of your sessions"
                  Icon={IconCalendar}
                  className="w-[49%]"
                />
              </View>
            </View>
          </View>
          <TextButton text="Hello world" />
        </PageContainer>
      </View>
    </View>
  );
}
