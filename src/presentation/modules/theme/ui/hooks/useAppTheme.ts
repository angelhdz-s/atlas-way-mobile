import { useUniwind } from 'uniwind';

export function useAppTheme() {
  const { theme } = useUniwind();
  const isDark = theme === 'dark';
  return {
    theme,
    isDark,
  };
}
