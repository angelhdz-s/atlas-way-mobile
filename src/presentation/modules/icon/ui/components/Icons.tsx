import { withUniwind } from 'uniwind';
import {
  Activity,
  ArrowRight,
  Calendar,
  ChartSpline,
  Check,
  ClipboardList,
  Dumbbell,
  Ellipsis,
  Flame,
  Home,
  Plus,
  Route,
  Search,
  SlidersHorizontal,
  Trophy,
  Weight,
} from 'lucide-react-native';

export const IconArrowRight = withUniwind(ArrowRight);
export const IconDumbbell = withUniwind(Dumbbell);
export const IconCheck = withUniwind(Check);
export const IconWeight = withUniwind(Weight);
export const IconFlame = withUniwind(Flame);
export const IconRoute = withUniwind(Route);
export const IconClipboardList = withUniwind(ClipboardList);
export const IconCalendar = withUniwind(Calendar);
export const IconHome = withUniwind(Home);
export const IconChartSpline = withUniwind(ChartSpline);
export const IconTrophy = withUniwind(Trophy);
export const IconActivity = withUniwind(Activity);
export const IconSearch = withUniwind(Search);
export const IconSlidersHorizontal = withUniwind(SlidersHorizontal);
export const IconEllipsis = withUniwind(Ellipsis);
export const IconPlus = withUniwind(Plus);

export type IconType = typeof IconArrowRight;
