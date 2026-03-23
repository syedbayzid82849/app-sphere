import { useNavigate } from "react-router";
import appsData from "../data/apps.json";
import AppCard from "./AppCard";

const TopAppsSection = () => {
    const navigate = useNavigate();
    const topApps = appsData.slice(0, 8);

    return (
        <section className="flex flex-col mx-auto px-4 sm:px-6 py-14">
            {/* Section Header */}

            <h2 className="text-[48px] mx-auto font-bold text-[#1a1a2e]">
                Top Apps
            </h2>
            <h4 className="text-2xl mx-auto text-[#627382] mb-10" >
                Explore All Trending Apps on the Market developed by us
            </h4>


            {/* 4-column Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
                {topApps.map((app) => (
                    <AppCard key={app.id} app={app} />
                ))}
            </div>
            <button
                onClick={() => navigate("/apps")}
                className="mt-5 text-sm font-semibold text-[#6C5CE7] border border-[#6C5CE7] px-4 py-2 rounded-lg hover:bg-[#6C5CE7] hover:text-white transition-colors"
            >
                Show All
            </button> 
        </section>
    );
};

export default TopAppsSection;