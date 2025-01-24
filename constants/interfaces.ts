export interface OnboardingPageProps {
    onPressForward: () => void;
}
export interface OnboardingSteperProps {
    currentPage: number;
    onPressForward: () => void;
}
export interface ThemedHeaderProps {
    title?: string;
    showTitle?: boolean;
    rightIcon?: JSX.Element | null;
    leftIcon?: JSX.Element | null;
    theme?: string;
}
