import { ChartBarIcon, ArrowTrendingUpIcon, CpuChipIcon, BriefcaseIcon } from "@heroicons/react/24/outline";
import ParticlesBg from "particles-bg";

const features = [
  {
    name: "Quantitative Research",
    description: (
      <>
        <ul className="list-disc ml-5">
          <li>
            Our research team specializes in exploring advanced concepts like Community Detection, Network Analysis, and Centrality Measures to uncover hidden patterns in financial markets.
          </li>
          <li>
            We utilize state-of-the-art algorithms such as Louvain and Newman methods to build comprehensive market graphs, offering unique insights into market structure and dynamics.
          </li>
        </ul>
      </>
    ),
    icon: ChartBarIcon,
  },
  {
    name: "Data-Driven Investment Strategies",
    description: (
      <>
        <ul className="list-disc ml-5">
          <li>
            Our proprietary trading models are designed to capitalize on market inefficiencies. Strategies include:
            <ul className="list-square ml-5">
              <li>
                <strong>Co-Integrated Pairs Arbitrage:</strong> Exploiting statistical relationships between stocks for mean reversion opportunities.
              </li>
              <li>
                <strong>Peripheral Stocks Strategy:</strong> Using graph theory to identify and capitalize on undervalued stocks on the market’s periphery.
              </li>
            </ul>
          </li>
        </ul>
      </>
    ),
    icon: ArrowTrendingUpIcon,
  },
  {
    name: "Innovative Tools and Technology",
    description: (
      <>
        <ul className="list-disc ml-5">
          <li>
            We integrate cutting-edge technologies like machine learning, GARCH models, and Relative Rotation Graphs (RRG) to provide actionable insights.
          </li>
          <li>
            Our robust backtesting engines ensure that every strategy is thoroughly validated for reliability and performance.
          </li>
        </ul>
      </>
    ),
    icon: CpuChipIcon,
  },
  {
    name: "Custom Portfolio Management",
    description: (
      <>
        <ul className="list-disc ml-5">
          <li>
            Skylife Research offers bespoke portfolio solutions tailored to each client’s goals and risk appetite.
          </li>
          <li>
            Our emphasis on risk-adjusted returns ensures sustainable growth over time.
          </li>
        </ul>
      </>
    ),
    icon: BriefcaseIcon, // Replace with available icon
  },
];



export default function AboutUs() {
  return (
    <div className=" z-10 py-14 sm:py-14">
      <div
        className="bg-gradient-to-b from-white to-gray-100 shadow-[0_10px_20px_rgba(0,0,0,0.1)] py-14 sm:py-14 mx-auto max-w-7xl px-6 lg:px-8"
        id="About"
      >
        <div className="mx-auto max-w-7xl">
          {/* What We Do Section */}
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-base/7 font-semibold text-indigo-600">What We Do</h2>
            <p className="mt-2 text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl lg:text-balance">
              About Us
            </p>
          </div>

          {/* Our Core Technologies Section */}
          <div className="mx-auto mt-10 max-w-4xl lg:text-left">
            <h3 className="text-xl font-semibold text-gray-900">Our Core Technologies</h3>
            <ul className="mt-4 space-y-4 text-sm text-gray-600">
              <li>
                <strong>Network Analysis:</strong> Creating market maps to identify clusters, central stocks, and peripheral opportunities.
              </li>
              <li>
                <strong>Machine Learning:</strong> Using predictive models to identify trends and anomalies.
              </li>
              <li>
                <strong>AWS-Powered Infrastructure:</strong> Scalable cloud-based solutions for efficient data storage and processing.
              </li>
              <li>
                <strong>Historical Data Integration:</strong> Leveraging Angel One data to build comprehensive models and trading strategies.
              </li>
            </ul>
          </div>

          {/* Features Section */}
          <div className="mx-auto mt-16 max-w-5xl sm:mt-20 lg:mt-24 px-4 sm:px-6 lg:px-8">
            <dl className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {features.map((feature) => (
                <div
                  key={feature.name}
                  className="p-6 bg-white rounded-lg shadow-md 
               hover:shadow-2xl hover:scale-105 hover:bg-gray-100 
               transition-transform duration-300 ease-in-out
               flex flex-col justify-between h-auto"
                >
                  <dt className="flex items-center justify-center text-base font-semibold text-gray-900">
                    <div className="flex items-center justify-center h-12 w-12 rounded-full bg-indigo-600 mr-4">
                      <feature.icon aria-hidden="true" className="h-6 w-6 text-white" />
                    </div>
                    {feature.name}
                  </dt>
                  <dd className="mt-4 text-sm text-gray-600 leading-relaxed flex-grow">
                    {feature.description}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </div>


  );
}
