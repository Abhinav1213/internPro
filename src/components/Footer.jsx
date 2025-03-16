import { Link } from "react-scroll";
import { useState } from "react";
import { IoLogoLinkedin } from "react-icons/io5";
import nav from "../data/nav.json";

function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}

const Footer = () => {
    const [navigation, setNavigation] = useState(nav);

    const handleSection = (item) => {
        const navi = navigation.map((e) => ({
            ...e,
            current: e.id === item.id,
        }));
        setNavigation(navi);
    };

    return (
        <footer className="bg-gray-100 border-t border-gray-300 py-12">
            <div className="max-w-7xl mx-auto px-6 lg:px-10">
                {/* Top Section */}
                <div className="flex flex-col md:flex-row items-center justify-between gap-5">
                    {/* Logo and Description */}
                    <div className="flex flex-col items-center md:items-start space-y-2">
                        <Link
                            to="/"
                            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                            className="flex items-center space-x-2"
                        >
                            <img
                                alt="Your Company"
                                src="/skylife.svg"
                                className="h-10 w-auto cursor-pointer rounded-lg"
                            />
                            <span className="text-lg font-semibold text-gray-900">
                                Skylife Research
                            </span>
                        </Link>
                    </div>

                    {/* Navigation Links */}
                    <div className="flex flex-wrap justify-center gap-6">
                        {navigation.map((item) => (
                            <Link
                                key={item.id}
                                to={item.name}
                                smooth={true}
                                offset={-70}
                                duration={500}
                                className="text-gray-700 hover:text-gray-900 text-sm font-medium transition-all duration-300"
                                onClick={() => handleSection(item)}
                            >
                                {item.name}
                            </Link>
                        ))}
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="mt-4 flex flex-col md:flex-row items-center justify-between text-sm text-gray-600">
                    <div className="text-center md:text-left">
                        © 2025 All rights reserved.
                    </div>

                    {/* Social Icons */}
                    <div className="flex gap-4 mt-4 md:mt-0">
                        <a
                            href="https://www.linkedin.com/in/kedu/"
                            className="text-gray-600 hover:text-blue-700 transition-all duration-300"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <IoLogoLinkedin className="w-7 h-7" />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
