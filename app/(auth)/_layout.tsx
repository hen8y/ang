import { useColors } from "@/hooks";
import { ThemedText } from "@/components/theme";
import { Stack } from "expo-router";
import { View } from "react-native";

export default function AuthLayout(): JSX.Element {
    const colors = useColors();
    return (
        <Stack>
            <Stack.Screen name="login" options={{ headerShown: false }} />
            <Stack.Screen name="register" options={{ headerShown: false }} />
        </Stack>
    );
}
