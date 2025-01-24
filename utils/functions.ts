import AsyncStorage from "@react-native-async-storage/async-storage";

export async function checkOnboarding(): Promise<boolean> {
    try {
        console.log("Checking onboarding status...");
        const value = await AsyncStorage.getItem("hasSeenOnboarding");
        return value === "true";
    } catch (error) {
        console.error("Error in checkOnboarding:", error);
        return false;
    }
}

export const setOnboarding = async (value: boolean) => {
    await AsyncStorage.setItem("hasSeenOnboarding", value.toString());
};

export const truncateString = (str: string, maxLength: number) => {
    return str.length > maxLength ? str.substring(0, maxLength) + "..." : str;
};

export const formatNumber = (num: number | string) => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};
