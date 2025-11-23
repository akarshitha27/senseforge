import { getUserOnboardingStatus } from "@/actions/user";
import { redirect } from "next/navigation";
import DashboardView from "./_components/dasboard-view";
import { getIndustryInsights } from "@/actions/dashboard";
import Layout from "./_components/layout";

const IndustryInsightsPage = async () => {
    const { isOnboarded } = await getUserOnboardingStatus();
    const insights = await getIndustryInsights();

    if (!isOnboarded) {
        redirect("/onboarding");
    }

    return (
        <Layout>
            <div className="container mx-auto">
                <DashboardView insights={insights} />
            </div>
        </Layout>
    );
};

export default IndustryInsightsPage;



