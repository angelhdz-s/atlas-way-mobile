import { Text } from "./Text";

type Props = {
  title: string;
};

export function SectionHeader({ title }: Props) {
  return (
    <Text font="outfit-500" className="text-2xl text-fg-default">
      {title}
    </Text>
  );
}
