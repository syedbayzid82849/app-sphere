import error from "../assets/error.png"
import { useNavigate } from 'react-router';

const ErrorPage = () => {
    const navigate = useNavigate();
    return (
        <div className="text-center flex flex-col justify-center items-center my-20">
            <img className="w-80" src={error} alt="appNotFound.png" />
            <h1 className="text-5xl font-semibold">OPPS!! APP NOT FOUND</h1>
            <h4 className="text-[#627382] mt-2 mb-4">The App you are requesting is not found on our system.  please try another apps</h4>
            <button
                onClick={() => navigate("/")}
                className="px-8 py-3 bg-purple-500 hover:bg-purple-600 active:scale-95 
                     text-white font-semibold text-base rounded-xl 
                     transition-all duration-200 cursor-pointer"
            >
                Go Back!
            </button>
        </div>
    );
};

export default ErrorPage;