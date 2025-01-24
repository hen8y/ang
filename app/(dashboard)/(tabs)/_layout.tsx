import { Tabs } from "expo-router";
import { Platform } from "react-native";

import { TabBarBackground } from "@/components/ui";
import { useColors } from "@/hooks";
import { Iconify } from "react-native-iconify";
import { PlatformPressable } from "@react-navigation/elements";
import { ThemedHeader } from "@/components/theme";

export default function TabLayout() {
    const colors = useColors();

    return (
        <Tabs
            screenOptions={{
                tabBarActiveTintColor: colors.tint,
                tabBarBackground: TabBarBackground,
                tabBarButton: (props) => (
                    <PlatformPressable
                        {...props}
                        android_ripple={{ color: "transparent" }}
                    />
                ),
                tabBarStyle: Platform.select({
                    ios: {
                        position: "absolute",
                        height: 80,
                    },
                    android: {
                        height: 60,
                    },
                    default: {},
                }),
            }}
        >
            <Tabs.Screen
                name="index"
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Iconify
                            icon="mdi:home-outline"
                            color={focused ? colors.primary : colors.tabIcon}
                            size={24}
                            stroke={focused ? "#ddd" : colors.tabIcon}
                            strokeWidth={focused ? 0.01 : 1}
                        />
                    ),
                    tabBarShowLabel: false,
                    header: () => {
                        return <ThemedHeader title="Ang" showTitle />;
                    },
                }}
            />
        </Tabs>
    );
}
