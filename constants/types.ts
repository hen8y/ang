import {
    Dispatch,
    PropsWithChildren,
    ReactElement,
    SetStateAction,
} from "react";
import { TextProps, ViewProps } from "react-native";

export type ParallaxScrollViewTypes = PropsWithChildren<{
    headerImage: ReactElement;
    headerBackgroundColor: { dark: string; light: string };
}>;

export type ThemedTextProps = TextProps & {
    className?: string;
    color?: string;
    content?: string | null | number;
};

export type ThemedViewProps = ViewProps & {
    className?: string;
    isLoading?: boolean;
    setIsLoading?: Dispatch<SetStateAction<boolean>>;
    theme?: "mild" | "normal";
    scrollEnabled?: boolean;
};
