import { IconEllipsis } from '@/presentation/modules/icon/ui/components/Icons';
import { Pressable, View } from 'react-native';
import { twMerge } from 'tailwind-merge';
import { Badge, BadgeVariant } from './Badge';
import { CheckButton } from './CheckButton';
import { Text } from './Text';

type Props = {
  className?: string;
  title: string;
  description?: string;
  timeAgo?: string;
  onLongPress?: () => void;
  onPress?: () => void;
  isSelecting?: boolean;
  isSelected?: boolean;
} & (
  | {
      badge: string;
      badgeVariant?: BadgeVariant;
    }
  | {
      badge?: never;
      badgeVariant?: never;
    }
);

export function ListItem({
  className,
  title,
  badge,
  badgeVariant,
  description,
  timeAgo,
  onLongPress,
  onPress,
  isSelected,
  isSelecting,
}: Props) {
  return (
    <Pressable
      onPress={onPress}
      onLongPress={onLongPress}
      className={twMerge(
        'flex-row gap-2 py-1 px-2 active:bg-fill-middle rounded-lg',
        isSelected && 'bg-fill-middle',
        className
      )}
    >
      <View className="flex-1 overflow-hidden">
        <View className="flex-row gap-2">
          <Text className="text-fg-strong">{title}</Text>
          {badge && (
            <Badge
              className="shrink-0"
              text={badge}
              variant={badgeVariant ?? 'default'}
            />
          )}
        </View>
        {description && (
          <Text
            numberOfLines={1}
            ellipsizeMode="tail"
            className="shrink text-sm text-fg-default whitespace-nowrap"
          >
            {description}
          </Text>
        )}
        {timeAgo && (
          <Text className="text-sm text-fg-muted" font="Outfit Light">
            {timeAgo}
          </Text>
        )}
      </View>
      <View className={twMerge(isSelecting && 'items-center justify-center')}>
        {isSelecting ? (
          <CheckButton checked={isSelected} className="self-center" />
        ) : (
          <IconEllipsis className="text-fg-strong" />
        )}
      </View>
    </Pressable>
  );
}
