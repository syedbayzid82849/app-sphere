import { Link } from "react-router";

const Footer = () => {
    return (
        <footer className="bg-[#0a1628] text-white relative overflow-hidden">

            {/* Background grid lines decoration */}
            <div className="absolute inset-0 opacity-[0.04]"
                style={{
                    backgroundImage: `linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)`,
                    backgroundSize: "60px 60px"
                }}
            />

            {/* Glowing accent top border */}
            <div className="w-full h-[2px] bg-gradient-to-r from-transparent via-blue-500 to-transparent" />

            <div className="relative px-6 md:px-12 lg:px-20 pt-12 pb-6">

                {/* Main Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">

                    {/* Brand Column */}
                    <div className="flex flex-col gap-4">
                        <Link to="/" className="flex items-center gap-2 w-fit">
                            <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <polygon points="4,2 4,34 32,18" fill="none" stroke="#4a6fa5" strokeWidth="3" strokeLinejoin="round" />
                                <polygon points="4,10 4,26 18,18" fill="#4a6fa5" />
                            </svg>
                            <span className="text-white font-bold text-xl tracking-widest uppercase">APP-SPHERE</span>
                        </Link>
                        <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
                            Discover the best apps on the market. Curated, reviewed, and trusted by millions worldwide.
                        </p>
                        {/* Social Icons */}
                        <div className="flex items-center gap-3 mt-1">
                            <a href="#" className="w-9 h-9 rounded-full bg-white/10 hover:bg-blue-500/30 hover:border-blue-500 border border-white/10 flex items-center justify-center transition-all duration-300">
                                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="white">
                                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.737-8.835L2.25 2.25h6.856l4.261 5.638 4.877-5.638zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                                </svg>
                            </a>
                            <a href="#" className="w-9 h-9 rounded-full bg-white/10 hover:bg-blue-500/30 hover:border-blue-500 border border-white/10 flex items-center justify-center transition-all duration-300">
                                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="white">
                                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                </svg>
                            </a>
                            <a href="#" className="w-9 h-9 rounded-full bg-white/10 hover:bg-blue-500/30 hover:border-blue-500 border border-white/10 flex items-center justify-center transition-all duration-300">
                                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="white">
                                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                                </svg>
                            </a>
                            <a href="https://github.com" target="_blank" rel="noreferrer" className="w-9 h-9 rounded-full bg-white/10 hover:bg-blue-500/30 hover:border-blue-500 border border-white/10 flex items-center justify-center transition-all duration-300">
                                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="white">
                                    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                                </svg>
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-white font-semibold text-sm uppercase tracking-widest mb-5 flex items-center gap-2">
                            <span className="w-4 h-[2px] bg-blue-500 inline-block"></span>
                            Quick Links
                        </h3>
                        <ul className="flex flex-col gap-3">
                            {[
                                { label: "Home", to: "/" },
                                { label: "All Apps", to: "/apps" },
                                { label: "My Installation", to: "/installation" },
                            ].map((link) => (
                                <li key={link.to}>
                                    <Link
                                        to={link.to}
                                        className="text-gray-400 hover:text-white text-sm transition-colors duration-200 flex items-center gap-2 group"
                                    >
                                        <span className="w-0 group-hover:w-3 h-[1px] bg-blue-400 transition-all duration-300 inline-block"></span>
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Newsletter / CTA */}
                    <div>
                        <h3 className="text-white font-semibold text-sm uppercase tracking-widest mb-5 flex items-center gap-2">
                            <span className="w-4 h-[2px] bg-blue-500 inline-block"></span>
                            Stay Updated
                        </h3>
                        <p className="text-gray-400 text-sm mb-4">
                            Get notified about new apps and updates.
                        </p>
                        <div className="flex gap-2">
                            <input
                                type="email"
                                placeholder="your@email.com"
                                className="flex-1 bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-sm text-white placeholder-gray-500 outline-none focus:border-blue-500 transition-colors"
                            />
                            <button className="bg-blue-600 hover:bg-blue-500 transition-colors px-4 py-2 rounded-lg text-sm font-medium text-white cursor-pointer">
                                Join
                            </button>
                        </div>

                        {/* Store Badges */}
                        <div className="flex gap-3 mt-5">
                            <a href="#" className="flex items-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg px-3 py-2 transition-all duration-200">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="white">
                                    <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.7 9.05 7.4c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.39-1.32 2.76-2.54 3.99zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
                                </svg>
                                <span className="text-xs text-gray-300">App Store</span>
                            </a>
                            <a href="#" className="flex items-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg px-3 py-2 transition-all duration-200">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="white">
                                    <path d="M3.18 23.76c.37.21.8.22 1.19.04l12.12-6.97-2.69-2.7-10.62 9.63zm-1.13-19.7C1.77 4.43 1.5 4.96 1.5 5.64v12.72c0 .68.27 1.21.55 1.58l.09.08L9.43 12v-.18L2.14 4.0l-.09.06zM20.37 10.6l-2.56-1.47-3.03 3.03 3.03 3.03 2.59-1.49c.74-.42.74-1.1 0-1.52l-.03-.58zm-17.19 12.4L12.06 12 3.18 2.24C2.79 2.06 2.36 2.07 1.99 2.3L1.9 2.4l9.14 9.54-9.14 9.54.09.08c.38.24.81.25 1.19.04z" />
                                </svg>
                                <span className="text-xs text-gray-300">Play Store</span>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-white/10 pt-5 flex flex-col md:flex-row items-center justify-between gap-3">
                    <p className="text-gray-500 text-xs">
                        © 2025 HERO.IO — All rights reserved.
                    </p>
                    <div className="flex gap-5">
                        <a href="#" className="text-gray-500 hover:text-gray-300 text-xs transition-colors">Privacy Policy</a>
                        <a href="#" className="text-gray-500 hover:text-gray-300 text-xs transition-colors">Terms of Service</a>
                        <a href="#" className="text-gray-500 hover:text-gray-300 text-xs transition-colors">Contact</a>
                    </div>
                </div>

            </div>
        </footer>
    );
};

export default Footer;