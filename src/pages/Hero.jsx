export default function Hero() {
    return (
        <div className="relative px-6 py-2 lg:px-8 text-white overflow-hidden" id="Home">
            {/* Background Gradient - Light Rays Effect */}
            <div className="absolute inset-0 bg-black">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(255,255,255,0.4)_5%,rgba(20,20,20,1)_90%)] opacity-60"></div>
            </div>

            {/* Centered Content Section */}
            <div className="relative z-10 mx-auto max-w-7xl py-16 sm:py-20 lg:py-24 flex flex-col items-center text-center">

                {/* Title - Skylife Research */}
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight relative">
                    <span className="bg-clip-text text-transparent bg-gradient-to-br from-gray-100 via-gray-400 to-gray-700">
                        Skylife Research
                    </span>
                </h1>

                {/* Subtitle - Description */}
                <p className="text-lg sm:text-xl lg:text-2xl text-gray-400 mt-2 max-w-2xl">
                    Redefining portfolio management and quantitative investment strategies
                    using graph theory and network analysis
                </p>
            </div>
        </div>
    );
}
