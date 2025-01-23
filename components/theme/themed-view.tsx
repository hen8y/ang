import { Dispatch, SetStateAction } from "react";
import { ScrollView, View, ViewProps } from "react-native";
import Spinner from "react-native-loading-spinner-overlay";
type ThemedViewProps = ViewProps & {
    className?: string;
    isLoading?: boolean;
    setIsLoading?: Dispatch<SetStateAction<boolean>>;
    theme?: "mild" | "normal";
    scrollEnabled?: boolean;
};

export function ThemedView({
    className,
    isLoading,
    setIsLoading,
    scrollEnabled = true,
    theme = "normal",
    ...props
}: ThemedViewProps): JSX.Element {
    return (
        <View className="flex-1 center">
            <Spinner
                visible={isLoading}
                textStyle={{ color: "#fff" }}
                overlayColor="rgba(0, 0, 0, 0.5)"
            />
            <ScrollView
                scrollEnabled={scrollEnabled}
                className={`${
                    theme === "mild" ? "container-mild" : "container"
                } ${className}`}
                {...props}
            />
        </View>
    );
}
