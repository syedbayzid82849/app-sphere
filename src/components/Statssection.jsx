import { useEffect } from "react";
import { useState } from "react";

const StatsSection = () => {
    const [appsData, setAppsData] = useState([]);
    //data fetch 
    useEffect(() => {
        fetch("/apps.json")
            .then(res => res.json())
            .then(data => setAppsData(data))
            .catch(err => console.log(err));
    }, []);
    // Calculate stats dynamically from JSON data
    const totalDownloads = appsData.reduce((sum, app) => sum + app.downloads, 0);
    const totalReviews = appsData.reduce((sum, app) => sum + app.reviews, 0);
    const activeApps = appsData.length;

    const formatDownloads = (num) => {
        if (num >= 1_000_000) return (num / 1_000_000).toFixed(1) + "M";
        if (num >= 1_000) return (num / 1_000).toFixed(0) + "K";
        return num;
    };

    const formatReviews = (num) => {
        if (num >= 1_000_000) return (num / 1_000_000).toFixed(1) + "M";
        if (num >= 1_000) return (num / 1_000).toFixed(0) + "K";
        return num;
    };

    const stats = [
        {
            label: "Total Downloads",
            value: formatDownloads(totalDownloads),
            sub: "21% More Than Last Month",
        },
        {
            label: "Total Reviews",
            value: formatReviews(totalReviews),
            sub: "46% More Than Last Month",
        },
        {
            label: "Active Apps",
            value: activeApps + "+",
            sub: "31 More Will Launch",
        },
    ];

    return (
        <section className="bg-gradient-to-r from-[#7c3aed] via-[#8b5cf6] to-[#a855f7] py-14 px-4">
            {/* Heading */}
            <h2 className="text-center text-white text-2xl sm:text-3xl lg:text-4xl font-bold mb-10">
                Trusted By Millions, Built For You
            </h2>

            {/* Stats Cards */}
            <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-4 text-white text-center sm:text-left">
                {stats.map((stat, i) => (
                    <div key={i} className={`px-6 ${i !== stats.length - 1 ? "sm:border-r sm:border-white/20" : ""}`}>
                        <p className="text-white/70 text-sm mb-1">{stat.label}</p>
                        <p className="text-5xl sm:text-6xl font-extrabold tracking-tight my-2">
                            {stat.value}
                        </p>
                        <p className="text-white/70 text-sm">{stat.sub}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default StatsSection;