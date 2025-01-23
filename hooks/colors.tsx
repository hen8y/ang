import { useColorScheme } from "react-native";
import { Colors } from "@/constants";

export function useColors() {
    const isDark = useColorScheme() === "dark";
    const themeColors = Colors[isDark ? "dark" : "light"];
    return themeColors;
}
