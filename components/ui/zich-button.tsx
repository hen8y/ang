import { TouchableOpacity, useColorScheme } from "react-native";
import { Text } from "react-native";

export interface ZichButtonProps {
    content: string;
    isLoading?: boolean;
    onPress: () => void;
    className?: string;
    roundedFull?: boolean;
    theme?: string;
    textClassName?: string;
    customPadding?: string;
}

export default function ZichButton({
    content,
    isLoading,
    onPress,
    className,
    roundedFull,
    theme,
    textClassName,
    customPadding,
}: ZichButtonProps): JSX.Element {
    const isDark = useColorScheme() === "dark";
    const backgroundColor = theme ?? "bg-primary";
    const loadingColor = isLoading
        ? isDark
            ? "bg-neutral-600"
            : "bg-neutral-500"
        : backgroundColor;
    return (
        <TouchableOpacity
            activeOpacity={0.7}
            onPress={onPress}
            className={`
                ${loadingColor} w-full btn
                ${roundedFull ? "rounded-full" : "rounded-lg"}
                ${className}
                ${customPadding ?? "p-4"}
            `}
            disabled={isLoading}
        >
            <Text
                className={`${
                    isLoading ? "text-neutral-700" : textClassName
                } font-semibold text-lg`}
            >
                {content}
            </Text>
        </TouchableOpacity>
    );
}
