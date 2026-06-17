import type { IconType } from '@/presentation/modules/icon/ui/components/Icons';
import type { RoutePath } from 'expo-router';
import { Link } from 'expo-router';
import { Pressable, View } from 'react-native';
import { twMerge } from 'tailwind-merge';
import { IconArrowRight } from '@/presentation/modules/icon/ui/components/Icons';
import { AppText } from '@/presentation/ui/components/AppText';

type Props = {
  className?: string;
  href: RoutePath;
  title: string;
  description: string;
  badge?: string;
  Icon: IconType;
};

export function PlanCardLink({
  className,
  description,
  href,
  title,
  badge,
  Icon,
}: Props) {
  return (
    <Link asChild href={href}>
      <Pressable>
        <View
          className={twMerge(
            'bg-fill-middle p-2 rounded-2xl flex-row',
            className
          )}
        >
          <View className="size-8 justify-center items-center">
            <Icon size={16} className="text-fg-default" />
          </View>
          <View className="flex-1">
            <View className="flex-row items-center h-8">
              <AppText className="flex-1 text-fg-strong">{title}</AppText>
              {badge && <AppText className="text-accent">{badge}</AppText>}
            </View>
            <AppText className="">{description}</AppText>
          </View>
          <View className="size-8 justify-center items-center">
            <IconArrowRight size={20} className="text-fg-default" />
          </View>
        </View>
      </Pressable>
    </Link>
  );
}
