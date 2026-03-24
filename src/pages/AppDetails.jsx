import { useState, useEffect } from "react";
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer,
    Cell,
} from "recharts";
import toast from "react-hot-toast";
import { useNavigate, useParams } from "react-router";
import Loading from "../components/loading";
import appNotFound from "../assets/appNotFound.png";
import { addToStoreDB, getStoredApp } from "../utility/addToDB";

// Helper: format numbers
const formatNum = (n) => {
    if (n >= 1000000) return (n / 1000000).toFixed(1) + "M";
    if (n >= 1000) return (n / 1000).toFixed(1) + "K";
    return n;
};

export default function AppDetails() {
    const [installed, setInstalled] = useState(false);
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const { id } = useParams();
    const appId = parseInt(id);

    const navigate = useNavigate();


    // ✅ Fetch data
    useEffect(() => {
        fetch("/apps.json")
            .then((res) => res.json())
            .then((data) => {
                setData(data);
                setLoading(false);
            })
            .catch((err) => {
                console.log(err);
                setError("Failed to load data");
                setLoading(false);
            });
    }, []);

    // ✅ Find app
    const app = data.find((app) => app.id === appId);

    useEffect(() => {
        if (app) {
            const storedApps = getStoredApp();
            setInstalled(storedApps.includes(app.id));
        }
    }, [app]);

    // ✅ Loading state
    if (loading) {
        return <Loading />;
    }

    // ✅ Error state
    if (error) {
        return (
            <div className="flex justify-center items-center h-screen text-red-500">
                {error}
            </div>
        );
    }

    // ✅ Not found state
    if (!app) {
        return (
            <div className="text-center flex flex-col justify-center items-center m-20">
                <img src={appNotFound} alt="appNotFound.png" />
                <h1 className="text-5xl font-semibold">OPPS!! APP NOT FOUND</h1>
                <h4 className="text-[#627382] mt-2 mb-4">The App you are requesting is not found on our system.  please try another apps</h4>
                <button
                    onClick={() => navigate("/apps")}
                    className="px-8 py-3 bg-purple-500 hover:bg-purple-600 active:scale-95 
             text-white font-semibold text-base rounded-xl 
             transition-all duration-200 cursor-pointer"
                >
                    Go Back!
                </button>
            </div>
        );
    }

    // ✅ Chart data
    const chartData = [...app.ratings].reverse();

    const handleInstall = () => {
        addToStoreDB(app.id);
        toast.success("App installed successfully!");
        setInstalled(true);
    };

    return (
        <div className="max-w-4xl mx-auto px-4 py-8">

            {/* App Info */}
            <div className="bg-white rounded-2xl border p-6 flex flex-col sm:flex-row gap-6 mb-6">
                <img
                    src={app.image}
                    alt={app.title}
                    className="w-28 h-28 rounded-xl object-contain"
                />

                <div className="flex-1">
                    <h1 className="text-2xl font-medium mb-1">{app.title}</h1>
                    <p className="text-sm text-emerald-600 mb-5">
                        Developed by <span className="font-medium">{app.companyName}</span>
                    </p>

                    {/* Stats */}
                    <div className="flex gap-8 mb-6">
                        <div>
                            <p className="text-xs text-gray-500">Downloads</p>
                            <p className="text-xl font-medium">{formatNum(app.downloads)}</p>
                        </div>
                        <div>
                            <p className="text-xs text-gray-500">Rating</p>
                            <p className="text-xl">⭐ {app.ratingAvg}</p>
                        </div>
                        <div>
                            <p className="text-xs text-gray-500">Reviews</p>
                            <p className="text-xl">{formatNum(app.reviews)}</p>
                        </div>
                    </div>

                    <button
                        onClick={handleInstall}
                        disabled={installed}
                        className={`px-6 py-2 rounded text-white transition-all ${installed
                                ? "bg-gray-400 cursor-not-allowed"
                                : "bg-emerald-600 hover:bg-emerald-700 cursor-pointer"
                            }`}
                    >
                        {installed ? "Installed" : `Install (${app.size} MB)`}
                    </button>

                </div>
            </div>

            {/* Chart */}
            <div className="bg-white rounded-2xl border p-6 mb-6">
                <h2 className="mb-4 font-medium">Ratings</h2>
                <ResponsiveContainer width="100%" height={220}>
                    <BarChart data={chartData} layout="vertical">
                        <XAxis type="number" hide />
                        <YAxis type="category" dataKey="name" />
                        <Tooltip />
                        <Bar dataKey="count">
                            {chartData.map((_, i) => (
                                <Cell key={i} fill="#F59E0B" />
                            ))}
                        </Bar>
                    </BarChart>
                </ResponsiveContainer>
            </div>

            {/* Description */}
            <div className="bg-white rounded-2xl border p-6">
                <h2 className="mb-4 font-medium">Description</h2>
                <p className="text-sm text-gray-600">{app.description}</p>
            </div>
        </div>
    );
}