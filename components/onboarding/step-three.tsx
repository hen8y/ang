import { OnboardingPageProps } from "@/constants/interfaces";
import { Image } from "expo-image";
import { Dimensions, View } from "react-native";

import { ThemedText } from "../theme";
import OnboardingStepper from "./stepper";

export default function StepThree({
    onPressForward,
}: OnboardingPageProps): JSX.Element {
    const { width } = Dimensions.get("window");
    return (
        <View className="flex-1">
            <View
                className="border-white mx-auto shadow-md border-4 shadow-neutral-300 center rounded-full"
                style={{ width: width * 0.8, height: width * 0.8 }}
            >
                <Image
                    source={require("@/assets/images/onboarding/solana.png")}
                    style={{
                        width: "100%",
                        height: "100%",
                        borderRadius: 999,
                    }}
                />
            </View>

            <View className="mt-12 gap-y-4 w-full px-8 mx-auto">
                <ThemedText
                    content="Create your own bank account"
                    className="text-4xl font-bold text-center"
                />
                <ThemedText
                    content="Lorem ipsum dolor sit amet consectetur adipisicing elit Lorem ipsum dolor sit amet consectetur adipisicing elit"
                    className="text-center"
                    color="text-gray-500"
                />
            </View>

            <OnboardingStepper
                onPressForward={onPressForward}
                currentPage={2}
            />
        </View>
    );
}
