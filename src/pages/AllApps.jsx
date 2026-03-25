import { useEffect, useState } from "react";
import AppCard from "../components/AppCard";

const AllApps = () => {
    const [appsData, setAppsData] = useState([]);
    const [search, setSearch] = useState("");

    useEffect(() => {
        fetch("/apps.json")
            .then(res => res.json())
            .then(data => setAppsData(data))
            .catch(err => console.log(err));
    }, []);

    // Live search filter
    const filteredApps = appsData.filter((app) =>
        app.title.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className='bg-[#f5f5f5]'>
            <div className='bg-[#f5f5f5] container mx-auto'>
                <div className='text-center pt-4'>
                    <h2 className='text-5xl font-bold'>Our All Applications</h2>
                    <h4 className='mt-4 text-[#627382]'>
                        Explore All Apps on the Market developed by us. We code for Millions
                    </h4>
                </div>

                <div className="mt-6 p-5">
                    {/* Count + Search Row */}
                    <div className="flex items-center justify-between mb-6">
                        <p className="text-base font-bold text-[#0f1e2d]">
                            {filteredApps.length} Apps Found
                        </p>

                        <input
                            type="text"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            placeholder="Search apps..."
                            className="border border-gray-300 rounded-lg px-4 py-2 text-sm text-gray-600 bg-white outline-none focus:border-blue-400 w-64"
                        />
                    </div>

                    {/* Grid or No App Found */}
                    {filteredApps.length === 0 ? (
                        <div className="text-center py-20">
                            <p className="text-4xl mb-3">📭</p>
                            <h3 className="text-xl font-semibold text-gray-700">No App Found</h3>
                            <p className="text-gray-400 text-sm mt-2">Try searching with a different keyword</p>
                        </div>
                    ) : (
                        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
                            {filteredApps.map((app) => (
                                <AppCard key={app.id} app={app} />
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default AllApps;