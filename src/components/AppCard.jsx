import { useNavigate } from "react-router";

const AppCard = ({app}) => {

    const navigate = useNavigate();

    const formatDownloads = (num) => {
        if (num >= 1_000_000) return (num / 1_000_000).toFixed(0) + "M";
        if (num >= 1_000) return (num / 1_000).toFixed(0) + "K";
        return num;
    };

    return (
        <div
            onClick={() => navigate(`/apps/${app.id}`)}
            className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow cursor-pointer"
        >
            {/* App Image */}
            <div className="w-full aspect-square bg-gray-100 overflow-hidden">
                <img
                    src={app.image}
                    alt={app.title}
                    className="w-full h-full object-cover"
                />
            </div>

            {/* Title */}
            <div className="px-3 pt-3 pb-2">
                <h3 className="text-[#1a1a2e] font-bold text-sm text-center truncate">
                    {app.title}
                </h3>
            </div>

            {/* Bottom: Downloads + Rating */}
            <div className="flex items-center justify-between px-3 pb-3">
                {/* Downloads */}
                <div className="flex items-center gap-1 bg-gray-100 text-gray-600 text-xs font-semibold px-2 py-1 rounded-lg">
                    <span className="text-green-500">↓</span>
                    {formatDownloads(app.downloads)}
                </div>

                {/* Rating */}
                <div className="flex items-center gap-1 bg-gray-100 text-gray-700 text-xs font-semibold px-2 py-1 rounded-lg">
                    <span className="text-blue-500">★</span>
                    {app.ratingAvg}
                </div>
            </div>
        </div>
    );
};

export default AppCard;