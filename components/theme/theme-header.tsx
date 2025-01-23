import { useColors } from "@/hooks";
import { Platform, StatusBar, Text, useColorScheme, View } from "react-native";

export interface HeaderProps {
    title?: string;
    showTitle?: boolean;
    rightIcon?: JSX.Element | null;
    leftIcon?: JSX.Element | null;
    theme?: string;
}

export function ThemedHeader({
    showTitle = true,
    title,
    rightIcon,
    leftIcon,
    theme = "bg-theme",
}: HeaderProps): JSX.Element {
    const colors = useColors();
    return (
        <>
            <StatusBar
                barStyle={
                    useColorScheme() === "dark"
                        ? "light-content"
                        : "dark-content"
                }
                backgroundColor={colors.theme}
            />
            <View
                className={`relative justify-between flex-row items-center px-4 pb-2 ${theme} ${
                    Platform.OS === "ios" ? "pt-16 min-h-20 pb-3" : "h-20 pt-2"
                }`}
            >
                {leftIcon && leftIcon}

                <View
                    className={`${
                        leftIcon &&
                        `absolute left-0 right-0 
                        ${Platform.OS === "ios" && "top-16 pt-2"}`
                    } items-center`}
                >
                    {showTitle && (
                        <Text className="text-2xl font-semibold text-theme">
                            {title}
                        </Text>
                    )}
                </View>

                {rightIcon && rightIcon}
            </View>
        </>
    );
}
