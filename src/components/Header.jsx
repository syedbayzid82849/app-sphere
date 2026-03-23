import { NavLink } from "react-router";

const Navbar = () => {
    return (
        <header className="w-full border-b border-gray-200 bg-white">
            <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

                {/* Logo */}
                <NavLink to="/" className="flex items-center gap-2">
                    <svg
                        width="36"
                        height="36"
                        viewBox="0 0 36 36"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <polygon
                            points="4,2 4,34 32,18"
                            fill="none"
                            stroke="#6C5CE7"
                            strokeWidth="3"
                            strokeLinejoin="round"
                        />
                        <polygon
                            points="4,10 4,26 18,18"
                            fill="#6C5CE7"
                        />
                    </svg>
                    <span className="text-[#6C5CE7] font-bold text-lg tracking-widest uppercase">
                        HERO.IO
                    </span>
                </NavLink>

                {/* Nav Links */}
                <nav className="flex items-center gap-8">
                    <NavLink
                        to="/"
                        className={({ isActive }) =>
                            isActive
                                ? "text-[#6C5CE7] font-semibold underline underline-offset-4 text-sm"
                                : "text-gray-700 font-medium text-sm hover:text-[#6C5CE7] transition-colors"
                        }
                    >
                        Home
                    </NavLink>
                    <NavLink
                        to="/apps"
                        className={({ isActive }) =>
                            isActive
                                ? "text-[#6C5CE7] font-semibold underline underline-offset-4 text-sm"
                                : "text-gray-700 font-medium text-sm hover:text-[#6C5CE7] transition-colors"
                        }
                    >
                        Apps
                    </NavLink>
                    <NavLink
                        to="/installation"
                        className={({ isActive }) =>
                            isActive
                                ? "text-[#6C5CE7] font-semibold underline underline-offset-4 text-sm"
                                : "text-gray-700 font-medium text-sm hover:text-[#6C5CE7] transition-colors"
                        }
                    >
                        Installation
                    </NavLink>
                </nav>

                {/* Contribute Button */}
                <a
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-[#6C5CE7] hover:bg-[#5a4bd1] text-white text-sm font-semibold px-5 py-2.5 rounded-lg transition-colors"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="white"
                    >
                        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 
              0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756
              -1.089-.745.083-.729.083-.729 1.205.084 1.84 1.237 1.84 1.237 1.07 1.834 2.807 1.304 
              3.492.997.108-.775.418-1.305.762-1.605-2.665-.3-5.466-1.332-5.466-5.93 
              0-1.31.468-2.382 1.236-3.222-.124-.303-.536-1.523.117-3.176 0 0 1.008-.322 
              3.3 1.23a11.52 11.52 0 0 1 3.003-.404c1.02.005 2.047.138 3.003.404 
              2.29-1.552 3.297-1.23 3.297-1.23.655 1.653.243 2.873.12 3.176.77.84 
              1.235 1.912 1.235 3.222 0 4.61-2.807 5.625-5.48 5.92.43.372.823 1.102.823 
              2.222 0 1.606-.015 2.896-.015 3.286 0 .322.216.694.825.576C20.565 21.795 
              24 17.295 24 12c0-6.63-5.37-12-12-12z" />
                    </svg>
                    Contribute
                </a>

            </div>
        </header>
    );
};

export default Navbar;