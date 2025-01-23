import { Text, TextProps } from "react-native";

type ThemedTextProps = TextProps & {
    className?: string;
    color?: string;
    content?: string | null | number;
};

export function ThemedText({
    className,
    content,
    color,
    ...props
}: ThemedTextProps): JSX.Element {
    const hasTextSize = className
        ?.split(" ")
        .some((c) =>
            /^text-(xs|sm|base|lg|xl|2xl|3xl|4xl|5xl|6xl|7xl)$/.test(c)
        );

    return (
        <Text
            className={` ${className}  ${
                hasTextSize ? hasTextSize : "text-lg"
            } ${color ? color : "text-theme"}`}
            {...(content ? { children: content } : props)}
        />
    );
}
