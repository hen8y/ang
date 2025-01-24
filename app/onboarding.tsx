import { StepOne, StepThree, StepTwo } from "@/components/onboarding";
import { ThemedText } from "@/components/theme";
import { router } from "expo-router";
import { useRef, useState } from "react";
import { Animated, Easing, Pressable, View } from "react-native";
import Swiper from "react-native-swiper";

export interface OnboardingPageProps {
    onPressForward: () => void;
    onPressBack?: () => void;
    onPressSkip: () => void;
}

export default function Index(): JSX.Element | null {
    const swiperRef = useRef<Swiper>(null);
    const [currentPage, setCurrentPage] = useState<number>(0);
    const scaleAnim = useRef(new Animated.Value(1)).current;

    const handleSkipOrComplete = () => {
        Animated.timing(scaleAnim, {
            toValue: 0.001,
            duration: 600,
            easing: Easing.bezier(0.4, 0, 0.2, 1),
            useNativeDriver: true,
        }).start(() => {
            router.replace("/register");
        });
    };

    return (
        <View className="flex-1 pt-20 bg-white">
            <Animated.View
                style={{ flex: 1, transform: [{ scale: scaleAnim }] }}
            >
                <Pressable
                    className="ml-auto px-4"
                    onPress={handleSkipOrComplete}
                >
                    <ThemedText
                        content="SKIP"
                        color="text-gray-500"
                        className="font-semibold"
                    />
                </Pressable>

                <Swiper
                    ref={swiperRef}
                    loop={false}
                    showsPagination={false}
                    onIndexChanged={(index) => setCurrentPage(index)}
                    style={{
                        marginTop: 60,
                    }}
                >
                    <StepOne
                        onPressForward={() => swiperRef.current?.scrollBy(1)}
                    />
                    <StepTwo
                        onPressForward={() => swiperRef.current?.scrollBy(1)}
                    />
                    <StepThree onPressForward={handleSkipOrComplete} />
                </Swiper>
            </Animated.View>
        </View>
    );
}
