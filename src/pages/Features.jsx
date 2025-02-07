import React from "react";

const Features = () => {
  return (
    <div
      className="bg-gradient-to-b from-white to-gray-100 px-4 py-8 mt-5"
      id="Features"
    >
      {/* Header Section */}
      <div className="text-center mb-8">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">
          Top Momentum Stocks by Network Clusters
        </h1>
        <p className="mt-2 text-gray-600 max-w-2xl mx-auto">
          Our clustering approach leverages network analysis to group stocks
          with similar momentum patterns, enabling targeted investment
          strategies with superior risk-adjusted returns.
        </p>
      </div>

      {/* Table Section */}
      <div className="overflow-x-auto">
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-100 text-left">
              <th className="px-4 py-3 border-b text-sm font-semibold text-gray-700">
                Cluster ID
              </th>
              <th className="px-4 py-3 border-b text-sm font-semibold text-gray-700">
                Top Momentum Stocks
              </th>
              <th className="px-4 py-3 border-b text-sm font-semibold text-gray-700">
                Average Return (%)
              </th>
              <th className="px-4 py-3 border-b text-sm font-semibold text-gray-700">
                Volatility (%)
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="hover:bg-gray-50">
              <td className="px-4 py-3 border-b text-gray-900">Cluster 1</td>
              <td className="px-4 py-3 border-b text-gray-700">
                Stock A, Stock B, Stock C
              </td>
              <td className="px-4 py-3 border-b text-gray-700">12.5</td>
              <td className="px-4 py-3 border-b text-gray-700">8.2</td>
            </tr>
            <tr className="hover:bg-gray-50">
              <td className="px-4 py-3 border-b text-gray-900">Cluster 2</td>
              <td className="px-4 py-3 border-b text-gray-700">
                Stock D, Stock E, Stock F
              </td>
              <td className="px-4 py-3 border-b text-gray-700">15.3</td>
              <td className="px-4 py-3 border-b text-gray-700">10.1</td>
            </tr>
            <tr className="hover:bg-gray-50">
              <td className="px-4 py-3 border-b text-gray-900">Cluster 3</td>
              <td className="px-4 py-3 border-b text-gray-700">
                Stock G, Stock H, Stock I
              </td>
              <td className="px-4 py-3 border-b text-gray-700">10.8</td>
              <td className="px-4 py-3 border-b text-gray-700">7.4</td>
            </tr>
            <tr className="hover:bg-gray-50">
              <td className="px-4 py-3 border-b text-gray-900">Cluster 4</td>
              <td className="px-4 py-3 border-b text-gray-700">
                Stock J, Stock K, Stock L
              </td>
              <td className="px-4 py-3 border-b text-gray-700">13.7</td>
              <td className="px-4 py-3 border-b text-gray-700">9.8</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Features;
