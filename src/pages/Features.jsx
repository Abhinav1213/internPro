import React from "react";

const Features = () => {
  return (
    <div className="bg-gray-50 px-4 py-8 mt-5" id="Freatures">
      {/* Header Section */}
      <div className="text-center mb-8">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">
          Medium length section heading goes here
        </h1>
        <p className="mt-2 text-gray-600 max-w-2xl mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          varius enim in eros elementum tristique. Duis cursus, mi quis viverra
          ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.
        </p>
      </div>

      {/* Table Section */}
      <div className="overflow-x-auto">
        <table className="w-full border-collapse border border-gray-200">
          <thead>
            <tr className="bg-gray-100 text-left">
              <th className="px-3 py-2 sm:px-6 sm:py-3 border-b text-xs sm:text-sm font-semibold text-gray-700">
                Company Name
              </th>
              <th className="px-3 py-2 sm:px-6 sm:py-3 border-b text-xs sm:text-sm font-semibold text-gray-700">
                LTP
              </th>
              <th className="px-3 py-2 sm:px-6 sm:py-3 border-b text-xs sm:text-sm font-semibold text-gray-700">
                Change ↓
              </th>
              <th className="px-3 py-2 sm:px-6 sm:py-3 border-b text-xs sm:text-sm font-semibold text-gray-700">
                %Change
              </th>
            </tr>
          </thead>
          <tbody>
            {[...Array(5)].map((_, index) => (
              <tr key={index} className="hover:bg-gray-50">
                <td className="px-3 py-2 sm:px-6 sm:py-4 border-b">
                  <div className="flex items-center space-x-3 sm:space-x-4">
                    <div className="h-6 w-6 sm:h-8 sm:w-8 bg-gray-200 rounded-full" />
                    <span className="text-xs sm:text-sm text-gray-900">File name</span>
                  </div>
                </td>
                <td className="px-3 py-2 sm:px-6 sm:py-4 border-b text-xs sm:text-sm text-gray-700">
                  1/11/2050
                </td>
                <td className="px-3 py-2 sm:px-6 sm:py-4 border-b text-xs sm:text-sm text-gray-700">
                  1/11/2050
                </td>
                <td className="px-3 py-2 sm:px-6 sm:py-4 border-b text-xs sm:text-sm text-gray-700">
                  818 kb
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Features;
