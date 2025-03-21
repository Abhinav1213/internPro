import { useState, useEffect } from "react";

const StocksInfo = ({ data, setOpen }) => {
    const [relate, setRelate] = useState([[], [], [], []]);

    useEffect(() => {
        if (!data || data.length === 0) return;

        const clusters = [[], [], [], []];

        data.forEach((st) => {
            if (st.weight >= 0.7) {
                clusters[0].push(st);
            } else if (st.weight >= 0.65) {
                clusters[1].push(st);
            } else if (st.weight >= 0.6) {
                clusters[2].push(st);
            } else {
                clusters[3].push(st);
            }
        });

        setRelate(clusters);
    }, [data]);

    return (
        <div className="fixed inset-0 flex items-center justify-center z-100 bg-black bg-opacity-50 backdrop-blur-sm">
            {/* Modal Container */}
            <div className="bg-white p-2 rounded-lg shadow-lg w-full max-w-lg relative max-h-[80vh] overflow-y-auto">

                <div className=" flex items-center justify-between px-4 py-2 sticky top-0 bg-white z-10">
                    {/* Close Button - Perfectly Aligned to the Left */}
                    <button
                        className="text-gray-500 hover:text-gray-700 text-2xl"
                        onClick={() => setOpen(false)}
                    >
                        ✖
                    </button>

                    {/* Title - Centered Correctly */}
                    <h2 className="text-xl font-semibold text-gray-900 text-center flex-1">
                        Stock Clusters
                    </h2>
                </div>




                {/* Cluster List with Scrolling */}
                <div className="space-y-4">
                    {relate.map((cluster, index) => (
                        <div key={index} className="p-4 border rounded-md bg-gray-100">
                            <h3 className="font-semibold text-gray-800">
                                {index === 0
                                    ? "Highly Correlated (≥ 0.7)"
                                    : index === 1
                                        ? "Moderately Correlated (≥ 0.65)"
                                        : index === 2
                                            ? "Weakly Correlated (≥ 0.6)"
                                            : "Low Correlation (< 0.6)"}
                            </h3>
                            {cluster.length > 0 ? (
                                <ul className="mt-2 list-disc pl-5 text-gray-700 max-h-40 overflow-y-auto">
                                    {cluster.map((stock, i) => (
                                        <li key={i}>{stock.source} - {stock.target} ({stock.weight})</li>
                                    ))}
                                </ul>
                            ) : (
                                <p className="text-gray-500 text-sm">No stocks in this category.</p>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>

    );
};

export default StocksInfo;
