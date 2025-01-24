import { View } from "react-native";
import ZichButton from "../ui/zich-button";
import { OnboardingSteperProps } from "@/constants/interfaces";

const OnboardingStepper = ({
    currentPage,
    onPressForward,
}: OnboardingSteperProps) => {
    return (
        <View className="absolute bottom-20 center w-full">
            <View className="px-3 w-full">
                <ZichButton
                    content="Get Started"
                    roundedFull
                    onPress={onPressForward}
                    textClassName="text-white text-center"
                    className="mt-20 max-w-60 mx-auto"
                />
            </View>
            <View className="flex-row mt-16 center mb-10 gap-2 w-full">
                {[0, 1, 2].map((i) => (
                    <View
                        key={i}
                        className={`h-2 rounded-full ${
                            currentPage === i
                                ? "bg-primary w-12"
                                : "bg-gray-300 w-2"
                        }`}
                    ></View>
                ))}
            </View>
        </View>
    );
};

export default OnboardingStepper;
