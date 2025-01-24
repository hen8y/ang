import { OnboardingPageProps } from "@/constants/interfaces";
import { Image } from "expo-image";
import { Dimensions, View } from "react-native";

import { ThemedText } from "../theme";
import OnboardingStepper from "./stepper";

export default function StepOne({
    onPressForward,
}: OnboardingPageProps): JSX.Element {
    const { width } = Dimensions.get("window");
    return (
        <View className="flex-1">
            <View
                className="mx-auto shadow-md shadow-neutral-300 center"
                style={{
                    width: width * 0.8,
                }}
            >
                <Image
                    source={require("@/assets/images/onboarding/etherum.png")}
                    style={{
                        width: "100%",
                        height: width * 0.6,
                        borderRadius: 50,
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
                currentPage={0}
            />
        </View>
    );
}
