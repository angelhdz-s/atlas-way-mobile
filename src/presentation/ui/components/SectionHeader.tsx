import { Text } from "./Text";

type Props = {
  title: string;
};

export function SectionHeader({ title }: Props) {
  return (
    <Text font="Outfit Medium" className="text-2xl text-fg-default">
      {title}
    </Text>
  );
}
