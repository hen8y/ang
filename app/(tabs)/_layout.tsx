import { Tabs } from "expo-router";
import { Platform } from "react-native";

import { TabBarBackground } from "@/components/ui";
import { useColors } from "@/hooks";
import { Iconify } from "react-native-iconify";

export default function TabLayout() {
    const colors = useColors();

    return (
        <Tabs
            screenOptions={{
                tabBarActiveTintColor: colors.tint,
                headerShown: false,
                tabBarBackground: TabBarBackground,
                tabBarStyle: Platform.select({
                    ios: {
                        position: "absolute",
                    },
                    default: {},
                }),
            }}
        >
            <Tabs.Screen
                name="index"
                options={{
                    tabBarIcon: ({ color }) => (
                        <Iconify
                            icon="mdi:home-outline"
                            color={color}
                            size={24}
                        />
                    ),
                    tabBarShowLabel: false,
                }}
            />
        </Tabs>
    );
}
