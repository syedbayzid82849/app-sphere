
const Loading = () => {
    return (
        <div className="flex flex-col justify-center items-center h-screen gap-4">
            <img
                src="../assets/logo.png"
                alt="Loading..."
                className="w-20 h-20 animate-spin"
            />
            <p className="text-gray-500 text-sm">Loading app details...</p>
        </div>
    );
};

export default Loading;