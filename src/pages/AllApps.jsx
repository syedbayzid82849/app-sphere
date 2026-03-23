import AppCard from "../components/AppCard";
import topApps from "../data/apps.json";

const AllApps = () => {
    return (
        <div className='bg-[#f5f5f5] '>
            <div className='text-center pt-4'>
                {/* top side  */}
                <h2 className='text-5xl font-bold'>Our All Applications</h2>
                <h4 className='mt-4 text-[#627382]'>
                    Explore All Apps on the Market developed by us. We code for Millions
                </h4>
            </div>
            <div className=" container mx-auto mt-6 border p-5">
                {/* total apps and search bar  */}
                <div></div>

                {/* all apps  */}
                {/* 4-column Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
                    {topApps.map((app) => (
                        <AppCard key={app.id} app={app} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default AllApps;