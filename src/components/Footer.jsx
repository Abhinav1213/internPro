import { Link } from "react-scroll";
import { useState } from "react";
import { IoLogoLinkedin } from "react-icons/io5";
import { FaSquareInstagram } from "react-icons/fa6";
import nav from "../data/nav.json"

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

const Footer = () => {
    const [navigation, setNavigation] = useState(nav);

    const handleSection = (item) => {
        const navi = navigation.map((e) => {
            if (e.id === item.id) {
                return { ...e, current: true }
            }
            else {
                return { ...e, current: false }
            }
        })
        setNavigation(navi)
    }
    return (
        <footer className="bg-gray-50 border-t border-gray-200 py-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Top Section */}
                <div className="flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0">
                    {/* Logo and Description */}
                    <div className="text-center md:text-left">
                        <div className="flex items-center justify-center md:justify-start space-x-2">
                            <Link to="/" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
                                <img alt="Your Company" src="/skylife.svg" className="h-8 w-auto cursor-pointer rounded-lg" />
                            </Link>
                            <span className="text-lg font-semibold text-gray-800">Skylife Research</span>
                        </div>
                        <p className="text-gray-600 text-sm mt-2">
                            Design amazing digital experiences that create more happy in the world.
                        </p>
                    </div>

                    {/* Navigation Links */}
                    <div className="flex flex-wrap justify-center space-x-4">
                        {navigation.map((item) => (
                            <Link
                                key={item.id}
                                to={item.name}
                                smooth={true}
                                offset={-70}
                                duration={500}
                                className="text-gray-600 hover:text-gray-900 text-sm font-medium cursor-pointer"
                                onClick={() => handleSection(item)}
                            >
                                {item.name}
                            </Link>
                        ))}
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="mt-8 flex flex-col md:flex-row items-center justify-between text-sm text-gray-500">
                    <div className="flex space-x-4 mt-4 md:mt-0">
                        <div className="flex space-x-4">
                            <a
                                href="https://www.linkedin.com/in/kedu/"
                                className="text-gray-500 hover:text-gray-800 transition-colors duration-300"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <IoLogoLinkedin className="w-6 h-6 text-blue-600 hover:text-blue-800 transition-colors duration-300" />

                            </a>
                        </div>

                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
