import { checkOnboarding } from "@/utils/functions";
import { router } from "expo-router";
import { useEffect } from "react";

export default function Index() {
    useEffect(() => {
        async function initApp() {
            try {
                const hasSeen = await checkOnboarding();
                if (!hasSeen) {
                    router.replace("/onboarding");
                } else {
                    router.replace("/(auth)/login");
                }
            } catch (err) {
                console.error("Error fetching onboarding status:", err);
            }
        }
        initApp();
    }, []);

    return null;
    // return <Redirect href="/(dashboard)/(tabs)/home" />;
}
