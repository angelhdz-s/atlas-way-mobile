import type {
  FontFamily,
  FontFamilyStyleNames,
} from '@/presentation/ui/presentation.ui.types';

const Fonts: Record<FontFamily, FontFamilyStyleNames> = {
  'Outfit Thin': 'outfit-100',
  'Outfit ExtraLight': 'outfit-200',
  'Outfit Light': 'outfit-300',
  'Outfit Regular': 'outfit-400',
  'Outfit Medium': 'outfit-500',
  'Outfit SemiBold': 'outfit-600',
  'Outfit Bold': 'outfit-700',
  'Outfit ExtraBold': 'outfit-800',
  'Outfit Black': 'outfit-900',
  'FunnelDisplay Light': 'funnel-display-300',
  'FunnelDisplay Regular': 'funnel-display-400',
  'FunnelDisplay Medium': 'funnel-display-500',
  'FunnelDisplay SemiBold': 'funnel-display-600',
  'FunnelDisplay Bold': 'funnel-display-700',
  'FunnelDisplay ExtraBold': 'funnel-display-800',
};

export function getFont(font: FontFamily): FontFamilyStyleNames {
  return Fonts[font];
}
