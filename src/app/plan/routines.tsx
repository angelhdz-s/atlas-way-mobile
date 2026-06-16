import { IconButton } from '@/presentation/modules/button/ui/components/IconButton';
import { IconPlus } from '@/presentation/modules/icon/ui/components/Icons';
import { BottomActionBar } from '@/presentation/modules/layout/ui/components/BottomActionBar';
import { PageContainer } from '@/presentation/modules/page/ui/components/PageContainer';
import { PageHeader } from '@/presentation/modules/page/ui/components/PageHeader';
import { FilterBar } from '@/presentation/ui/components/FilterBar';
import { ListItem } from '@/presentation/ui/components/ListItem';
import { View } from 'react-native';

export default function Routines() {
  return (
    <View className="relative flex-1 bg-fill-back">
      <BottomActionBar className="items-end">
        <IconButton aria-label="Add Routine" Icon={IconPlus} />
      </BottomActionBar>
      <PageContainer>
        <PageHeader
          title="Your Routines"
          description="Workout sessions organized to fit your schedule"
        />

        <FilterBar />

        {/* Seleting Items */}

        {/* <SelectionController
          allSelected={false}
          isSelecting={true}
          itemsSelected={4}
        /> */}

        <View className="gap-2">
          <ListItem
            title="Push, Pull, Legs"
            description="Routine focused on push, pull and leg muscles 65as1das561d 5a1d56as1 5as1 51 ds5 s51 5s s515s15 a1a5s1 5asd"
            badge="Active"
            timeAgo="1 min ago"
          />
          <ListItem
            title="Running"
            description="Saturday and Sundays"
            badge="Inactive"
            badgeVariant="subtle"
            timeAgo="1 hr ago"
          />
          <ListItem
            title="Push, Pull, Legs"
            description="Routine focused on push, pull and leg muscles"
            badge="Active"
            timeAgo="1 day ago"
          />
        </View>
      </PageContainer>
    </View>
  );
}
