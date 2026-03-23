import { Link } from "react-router";

const Footer = () => {
    return (
        <footer className="bg-[#0a1628] text-white">
            <div className=" px-6 pt-8 pb-4">

                {/* Top Row: Logo + Social Links */}
                <div className="flex items-start justify-between">

                    {/* Logo */}
                    <Link to="/" className="flex items-center gap-2">
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
                                stroke="#4a6fa5"
                                strokeWidth="3"
                                strokeLinejoin="round"
                            />
                            <polygon
                                points="4,10 4,26 18,18"
                                fill="#4a6fa5"
                            />
                        </svg>
                        <span className="text-white font-bold text-lg tracking-widest uppercase">
                            HERO.IO
                        </span>
                    </Link>

                    {/* Social Links */}
                    <div className="flex flex-col items-end gap-3">
                        <span className="text-white font-semibold text-base">Social Links</span>
                        <div className="flex items-center gap-3">

                            {/* X (Twitter) */}
                            <a
                                href="#"
                                className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="white">
                                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.737-8.835L2.25 2.25h6.856l4.261 5.638 4.877-5.638zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                                </svg>
                            </a>

                            {/* LinkedIn */}
                            <a
                                href="#"
                                className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="white">
                                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                </svg>
                            </a>

                            {/* Facebook */}
                            <a
                                href="#"
                                className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="white">
                                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                                </svg>
                            </a>

                        </div>
                    </div>
                </div>

                {/* Divider */}
                <div className="border-t border-white/10 mt-6 mb-4"></div>

                {/* Copyright */}
                <p className="text-center text-gray-400 text-sm">
                    Copyright © 2025 - All right reserved
                </p>

            </div>
        </footer>
    );
};

export default Footer;