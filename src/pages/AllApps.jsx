import { useEffect } from "react";
import AppCard from "../components/AppCard";
import { useState } from "react";

const AllApps = () => {
      const [appsData, setAppsData] = useState([]);
        //data fetch 
        useEffect(() => {
            fetch("/apps.json")
                .then(res => res.json())
                .then(data => setAppsData(data))
                .catch(err => console.log(err));
        }, []);
    return (
        <div className='bg-[#f5f5f5] '>
            <div className='text-center pt-4'>
                {/* top side  */}
                <h2 className='text-5xl font-bold'>Our All Applications</h2>
                <h4 className='mt-4 text-[#627382]'>
                    Explore All Apps on the Market developed by us. We code for Millions
                </h4>
            </div>
            <div className=" container mx-auto mt-6 p-5">
                {/* total apps and search bar  */}
                <div></div>

                {/* all apps  */}
                {/* 4-column Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
                    {appsData.map((app) => (
                        <AppCard key={app.id} app={app} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default AllApps;