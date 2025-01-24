import { OnboardingPageProps } from "@/constants/interfaces";
import { Image } from "expo-image";
import { Dimensions, View } from "react-native";

import { ThemedText } from "../theme";
import OnboardingStepper from "./stepper";

export default function StepTwo({
    onPressForward,
}: OnboardingPageProps): JSX.Element {
    const { width } = Dimensions.get("window");
    return (
        <View className="flex-1">
            <View
                className="mx-auto center"
                style={{ width: width * 0.8, height: width * 0.8 }}
            >
                <Image
                    source={require("@/assets/images/onboarding/polygon.png")}
                    style={{
                        width: "100%",
                        height: width * 0.7,
                        borderRadius: 30,
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
                currentPage={1}
            />
        </View>
    );
}
