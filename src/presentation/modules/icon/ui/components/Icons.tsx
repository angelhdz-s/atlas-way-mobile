import {
    ArrowRight,
    Calendar,
    Check,
    ClipboardList,
    Dumbbell,
    Flame,
    Route,
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

export type IconType = typeof IconArrowRight;
