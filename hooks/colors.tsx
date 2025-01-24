import { useColorScheme } from "react-native";
import * as colors from "@/settings/colors.json";

export function useColors() {
    const isDark = useColorScheme() === "dark";
    const themeColors = colors[isDark ? "dark" : "light"];
    return themeColors;
}
