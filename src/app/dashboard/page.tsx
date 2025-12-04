
import ActivityOverview from "@/components/dashboard/ActivityOverview";
import MainAction from "@/components/dashboard/MainAction";
import WelcomeSection from "@/components/dashboard/WelcomeSection";
import Navbar from "@/components/Navbar";

function DashboardPage() {
  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto pt-24 py-8 px-6">
        <WelcomeSection />
        <MainAction />
        <ActivityOverview />
      </div>
    </>
  );
}

export default DashboardPage;
