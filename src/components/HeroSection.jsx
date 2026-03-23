
// ── Import your ellipse app icons from assets ──
import Ellipse24 from "../assets/Ellipse 24.png";
import Ellipse26 from "../assets/Ellipse 26.png";
import Ellipse25 from "../assets/Ellipse 25.png";
import Ellipse27 from "../assets/Ellipse 27.png";
import Ellipse28 from "../assets/Ellipse 28.png";
import Ellipse29 from "../assets/Ellipse 29.png";
import ip from '../assets/Iphone.png';
import playStore from '../assets/plyastore.jpg';
import appStore from '../assets/appStore.jfif';
// Google Play SVG logo
const GooglePlayIcon = () => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <path d="M3.18 1.07 13.36 12 3.18 22.93A2 2 0 0 1 2 21.14V2.86a2 2 0 0 1 1.18-1.79Z" fill="#EA4335" />
        <path d="m13.36 12 3.27 3.27-9.77 5.64L3.18 22.93 13.36 12Z" fill="#FBBC05" />
        <path d="M20.5 10.13a2 2 0 0 1 0 3.74l-3.87 2.4L13.36 12l3.27-3.27 3.87 2.4Z" fill="#FFCD42" />
        <path d="M6.86 3.09 16.63 8.73 13.36 12 3.18 1.07l3.68 2.02Z" fill="#34A853" />
    </svg>
);

// App Store SVG logo
const AppStoreIcon = () => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <rect width="24" height="24" rx="5" fill="#1A73E8" />
        <path
            d="M16.26 13.72h-2.1l1.05-1.82 1.05 1.82ZM8.5 16.5l1.05-1.82h5.9L16.5 16.5H8.5Zm3.5-9 5.25 9.09H6.75L12 7.5Z"
            fill="white"
        />
    </svg>
);

// Floating app icon positions (left side)
const leftIcons = [
    { src: Ellipse27, alt: "Stopwatch", top: "38%", left: "26%" },
    { src: Ellipse26, alt: "Check", top: "52%", left: "22%" },
    { src: Ellipse25, alt: "Power", top: "66%", left:"18%" },
];

// Floating app icon positions (right side)
const rightIcons = [
    { src: Ellipse24, alt: "Clock", top: "38%", right: "26%" },
    { src: Ellipse29, alt: "Trello", top: "52%", right: "22%" },
    { src: Ellipse28, alt: "Altcoin", top: "66%", right: "18%" },
];

const HeroSection = () => {
    return (
        <section className="relative bg-[#f0f0f0] overflow-hidden flex flex-col items-center">

            {/* ── Heading ── */}
            <div className="text-center sm:mt-10 px-4 z-10 relative">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#1a1a2e] leading-tight">
                    We Build
                </h1>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight">
                    <span className="text-[#6C5CE7]">Productive</span>{" "}
                    <span className="text-[#1a1a2e]">Apps</span>
                </h1>

                {/* Subtext */}
                <p className="mt-5 text-gray-500 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
                    At APP-SPHERE , we craft innovative apps designed to make everyday life simpler, smarter, and more exciting.
                    <br className="hidden sm:block" />
                    Our goal is to turn your ideas into digital experiences that truly make an impact.
                </p>

                {/* ── Buttons ── */}
                <div className="flex flex-wrap justify-center gap-4 mt-8">
                    {/* Google Play */}
                    <a
                        href="https://play.google.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2.5 bg-white hover:bg-gray-50 border border-gray-200 shadow-sm text-[#1a1a2e] font-semibold text-sm px-6 py-3 rounded-xl transition-all"
                    >
                        <img className="w-6 h-6 object-contain" src={playStore} alt="playStore" />
                        Google Play
                    </a>

                    {/* App Store */}
                    <a
                        href="https://www.apple.com/app-store/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2.5 bg-white hover:bg-gray-50 border border-gray-200 shadow-sm text-[#1a1a2e] font-semibold text-sm px-6 py-3 rounded-xl transition-all"
                    >
                        <img className="w-6 h-6 object-contain" src={appStore} alt="" />
                        App Store
                    </a>
                </div>
            </div>

            {/* ── Phone Mockup + Floating Icons ── */}
            <div className="relative w-full flex justify-center mt-10 z-10">

                {/* Left Floating Icons */}
                {leftIcons.map((icon, i) => (
                    <img
                        key={i}
                        src={icon.src}
                        alt={icon.alt}
                        className="absolute w-14 h-14 sm:w-16 sm:h-16 rounded-full shadow-lg object-cover hidden sm:block"
                        style={{ top: icon.top, left: icon.left }}
                    />
                ))}

                {/* Right Floating Icons */}
                {rightIcons.map((icon, i) => (
                    <img
                        key={i}
                        src={icon.src}
                        alt={icon.alt}
                        className="absolute w-14 h-14 sm:w-16 sm:h-16 rounded-full shadow-lg object-cover hidden sm:block"
                        style={{ top: icon.top, right: icon.right }}
                    />
                ))}

                {/* Phone Mockup */}
                <img src={ip}/>
            </div>

        </section>
    );
};

export default HeroSection;