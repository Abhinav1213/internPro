'use client'

import Graph from '../assets/graph.gif'

export default function Hero() {
    return (
        <div className="bg-white mb-5" id="Home">
            {/* Main Container */}
            <div className="px-6 pt-2 lg:px-8 bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
                {/* Content Section */}
                <div className="mx-auto max-w-7xl py-8 sm:py-12 lg:py-16 xl:py-20">
                    <div className="flex flex-col sm:flex-row items-center sm:items-start justify-between space-y-8 sm:space-y-0">
                        {/* Left Section */}
                        <div className="flex-2 sm:mr-8 text-center sm:text-left">
                            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
                                Skylife Research
                            </h1>
                        </div>
                        {/* Right Section */}
                        <div className="flex-none sm:w-1/3 text-center sm:text-right">
                            <p className="text-base sm:text-lg lg:text-xl text-gray-400">
                                Redefining portfolio management and quantitative investment strategies using graph theory and network analysis

                            </p>
                        </div>
                    </div>
                </div>
                {/* Animated Background Glow */}
                <div
                    aria-hidden="true"
                    className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl animate-spin-slow"
                >
                    <div
                        style={{
                            clipPath:
                                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                        }}
                        className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-indigo-700 to-purple-900 opacity-40 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
                    />
                </div>
            </div>
        </div>
    )
}
