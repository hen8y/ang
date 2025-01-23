import { useFonts } from "expo-font";
import { DefaultTheme, Theme, ThemeProvider } from "@react-navigation/native";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import "react-native-reanimated";
import "@/global.css";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import {
    configureReanimatedLogger,
    ReanimatedLogLevel,
} from "react-native-reanimated";
import { useColorScheme } from "react-native";
SplashScreen.preventAutoHideAsync();
const DarkTheme: Theme = {
    dark: true,
    colors: DefaultTheme.colors,
    fonts: {
        ...DefaultTheme.fonts,
    },
};

configureReanimatedLogger({
    level: ReanimatedLogLevel.warn,
    strict: false,
});

export default function RootLayout() {
    const [loaded, error] = useFonts({
        SpaceMono: require("@/assets/fonts/SpaceMono-Regular.ttf"),
    });
    const colorScheme = useColorScheme();
    useEffect(() => {
        if (error) throw error;
        if (loaded) {
            SplashScreen.hideAsync();
        }
    }, [error, loaded]);

    if (!loaded || error) return null;

    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
            <ThemeProvider
                value={colorScheme === "dark" ? DarkTheme : DefaultTheme}
            >
                <Stack>
                    <Stack.Screen
                        name="(tabs)"
                        options={{ headerShown: false }}
                    />
                    <Stack.Screen name="+not-found" />
                </Stack>
            </ThemeProvider>
        </GestureHandlerRootView>
    );
}
