import React, { useEffect, useState } from "react";

const Features = () => {
  const [stocks, setStocks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchStocks = async () => {
      try {
        const response = await fetch(
          "http://ec2-65-2-166-230.ap-south-1.compute.amazonaws.com:8000/stocks-list",
          {
            method: "GET",
            headers: {
              Authorization: `Bearer ${import.meta.env.VITE_API_TOKEN}`,
              "Content-Type": "application/json",
            },
          }
        );
        if (!response.ok) {
          throw new Error("Failed to fetch stock data");
        }
        const data = await response.json();
        const processedData = data.map(stock => ({
          ...stock,
          date: stock.date.split("T")[0],
          stocks: stock.stocks.split(", ").map(st => (st.split("-")[0])).join(", "),
          returns_21days: String(stock.returns_21days * 100),
          returns_7days: String(stock.returns_7days * 100),
        }));
        processedData.sort((a, b) => new Date(b.date) - new Date(a.date));
        const shownData =processedData.slice(0,Math.min(7,processedData.length));
        setStocks(shownData);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchStocks();
  }, []);

  return (
    <div
      className="bg-gradient-to-b from-white to-gray-100 px-4 py-10"
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
        {loading ? (
          <p className="text-center text-gray-700">Loading...</p>
        ) : error ? (
          <p className="text-center text-red-500">{error}</p>
        ) : (
          <table className="w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-100 text-left">
                <th className="px-4 py-3 border-b text-center text-sm font-semibold text-gray-700">
                  Date
                </th>
                <th className="px-4 py-3 text-center border-b text-sm font-semibold text-gray-700">
                  Top Momentum Stocks
                </th>
                <th className="px-4 py-3 border-b text-center text-sm font-semibold text-gray-700">
                  21 days return (%)
                </th>
                <th className="px-4 py-3 border-b text-center text-sm font-semibold text-gray-700">
                  7 days return (%)
                </th>
              </tr>
            </thead>
            <tbody>
              {stocks.map((stock, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="px-4 py-3 border-b text-center text-gray-900 text-xs md:text-lg">
                    {stock.date}
                  </td>
                  <td className="px-4 py-3 border-b text-center text-gray-700 text-xs md:text-lg">
                    {stock.stocks}
                  </td>
                  <td className="px-4 py-3 border-b text-center text-gray-700 text-xs md:text-lg">
                    {stock.returns_21days.slice(0, stock.returns_21days.indexOf(".") + 3)}
                  </td>
                  <td className="px-4 py-3 border-b text-center text-gray-700 text-xs md:text-lg">
                    {stock.returns_7days.slice(0, stock.returns_7days.indexOf(".") + 3)}
                  </td>
                </tr>
              ))}

            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default Features;
