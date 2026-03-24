import { useState, useEffect } from "react";
import { getStoredApp } from "../utility/addToDB";
import toast from "react-hot-toast";

const formatNum = (n) => {
    if (n >= 1000000) return (n / 1000000).toFixed(1) + "M";
    if (n >= 1000) return (n / 1000).toFixed(1) + "K";
    return n;
};

export default function InstalledApp() {
    const [installedApps, setInstalledApps] = useState([]);
    const [sortOrder, setSortOrder] = useState("default");

    useEffect(() => {
        fetch("/apps.json")
            .then((res) => res.json())
            .then((allApps) => {
                const storedIds = getStoredApp(); // [1, 3, 5]
                const matched = allApps.filter((app) =>
                    storedIds.includes(app.id)
                );
                setInstalledApps(matched);
            });
    }, []);

    // Sort logic
    const getSortedApps = () => {
        const apps = [...installedApps];
        if (sortOrder === "high-low") {
            return apps.sort((a, b) => b.downloads - a.downloads);
        } else if (sortOrder === "low-high") {
            return apps.sort((a, b) => a.downloads - b.downloads);
        }
        return apps;
    };

    // Uninstall handler
    const handleUninstall = (id) => {
        // Remove from localStorage
        const stored = getStoredApp();
        const updated = stored.filter((appId) => appId !== id);
        localStorage.setItem("installedApps", JSON.stringify(updated));

        // Remove from UI
        setInstalledApps((prev) => prev.filter((app) => app.id !== id));
        toast.success("App uninstalled successfully!");
    };

    const sortedApps = getSortedApps();

    return (
        <div className="min-h-screen bg-gray-100 px-4 py-10">

            {/* Title Section */}
            <div className="text-center mb-10">
                <h1 className="text-4xl font-bold text-[#0f1e2d] mb-2">
                    Your Installed Apps
                </h1>
                <p className="text-gray-500 text-sm">
                    Explore All Trending Apps on the Market developed by us
                </p>
            </div>

            {/* Count + Sort Row */}
            <div className="max-w-4xl mx-auto flex items-center justify-between mb-6">
                <p className="text-base font-bold text-[#0f1e2d]">
                    {sortedApps.length} Apps Found
                </p>

                <select
                    value={sortOrder}
                    onChange={(e) => setSortOrder(e.target.value)}
                    className="border border-gray-300 rounded-lg px-4 py-2 text-sm text-gray-600 bg-white cursor-pointer outline-none"
                >
                    <option value="default">Sort By Size</option>
                    <option value="high-low">High - Low</option>
                    <option value="low-high">Low - High</option>
                </select>
            </div>

            {/* App List */}
            <div className="max-w-4xl mx-auto flex flex-col gap-3">
                {sortedApps.length === 0 ? (
                    <div className="text-center py-20 text-gray-400 text-lg">
                        No apps installed yet.
                    </div>
                ) : (
                    sortedApps.map((app) => (
                        <div
                            key={app.id}
                            className="bg-white rounded-2xl px-5 py-4 flex items-center gap-4"
                        >
                            {/* App Image */}
                            <img
                                src={app.image}
                                alt={app.title}
                                className="w-16 h-16 rounded-xl object-contain bg-gray-100 flex-shrink-0"
                            />

                            {/* App Info */}
                            <div className="flex-1">
                                <h3 className="text-base font-semibold text-[#0f1e2d] mb-1">
                                    {app.title}
                                </h3>
                                <div className="flex items-center gap-3 text-sm">
                                    <span className="flex items-center gap-1 text-emerald-500 font-medium">
                                        ↓ {formatNum(app.downloads)}
                                    </span>
                                    <span className="flex items-center gap-1 text-amber-400 font-medium">
                                        ★ {app.ratingAvg}
                                    </span>
                                    <span className="text-gray-400">
                                        {app.size} MB
                                    </span>
                                </div>
                            </div>

                            {/* Uninstall Button */}
                            <button
                                onClick={() => handleUninstall(app.id)}
                                className="bg-emerald-500 hover:bg-emerald-600 active:scale-95 text-white text-sm font-medium px-5 py-2 rounded-lg transition-all cursor-pointer"
                            >
                                Uninstall
                            </button>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
}