import { TAB_BAR_MARGIN_BOTTOM_EXTRA } from '@/presentation/modules/tabs/ui/tabs.ui.constants';

export function getTarBarMarginBottom(inset: number): number {
  return inset + TAB_BAR_MARGIN_BOTTOM_EXTRA;
}
