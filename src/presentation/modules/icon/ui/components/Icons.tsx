import {
    Activity,
    ArrowRight,
    Calendar,
    ChartSpline,
    Check,
    ClipboardList,
    Dumbbell,
    Flame,
    Home,
    Route,
    Trophy,
    Weight,
} from "lucide-react-native";
import { withUniwind } from "uniwind";

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

export type IconType = typeof IconArrowRight;
