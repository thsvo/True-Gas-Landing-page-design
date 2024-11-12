export default function Component() {
  return (
    <div className="lg:w-4/5 mx-auto p-4 bg-gray-100">
    {/* Header */}
    <div className="bg-[#0B8A2D] rounded-t-lg p-4 md:p-6 flex flex-col md:flex-row justify-between items-center mb-6 md:mb-8">
      <div className="flex items-center gap-4 mb-4 md:mb-0">
        <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold text-white">True Gas</h1>
        <span className="bg-[#D84315] text-white px-2 md:px-4 py-1 rounded-md text-lg md:text-2xl italic">
          Pricing
        </span>
      </div>
      <div className="w-12 h-12 md:w-16 md:h-16">
        <div className="w-full h-full rounded-full bg-gradient-to-br from-orange-500 via-yellow-400 to-green-400 p-1 md:p-2">
          <div className="w-full h-full rounded-full bg-white/90" />
        </div>
      </div>
    </div>

      {/* Pricing Table */}

      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-[#0B8A2D] text-white">
              <th className="p-4 text-left border border-gray-300">QUANTITY</th>
              <th className="p-4 text-center border border-gray-300 relative">
                <span>11KG</span>
                {/* <img
                    src="/placeholder.svg?height=100&width=50"
                    alt="11KG Gas Cylinder"
                    className="absolute left-1/2 transform -translate-x-1/2 translate-y-1/4"
                  /> */}
              </th>
              <th className="p-4 text-center border border-gray-300 relative">
                <span>14KG</span>
                {/* <img
                    src="/placeholder.svg?height=120&width=60"
                    alt="14KG Gas Cylinder"
                    className="absolute left-1/2 transform -translate-x-1/2 translate-y-1/4"
                  /> */}
              </th>
              <th className="p-4 text-center border border-gray-300 relative">
                <span>45KG</span>
                {/* <img
                    src="/placeholder.svg?height=140&width=70"
                    alt="45KG Gas Cylinder"
                    className="absolute left-1/2 transform -translate-x-1/2 translate-y-1/4"
                  /> */}
              </th>
            </tr>
          </thead>
          <tbody className="bg-gray-100">
            <tr>
              <td className="p-4 border border-gray-300">20 - 30</td>
              <td className="p-4 border border-gray-300 text-center">
                $2,900.00
              </td>
              <td className="p-4 border border-gray-300 text-center">
                $3,400.00
              </td>
              <td className="p-4 border border-gray-300 text-center">
                $12,000.00
                <br />
                <span className="text-sm">(minimum 10)</span>
              </td>
            </tr>
            <tr>
              <td className="p-4 border border-gray-300">31- 49</td>
              <td className="p-4 border border-gray-300 text-center">
                $2,800.00
              </td>
              <td className="p-4 border border-gray-300 text-center">
                $3,300.00
              </td>
              <td className="p-4 border border-gray-300 text-center">
                $11,500.00
              </td>
            </tr>
            <tr>
              <td className="p-4 border border-gray-300">50 -70</td>
              <td className="p-4 border border-gray-300 text-center">
                $2,700.00
              </td>
              <td className="p-4 border border-gray-300 text-center">
                $3,200.00
              </td>
              <td className="p-4 border border-gray-300 text-center">-</td>
            </tr>
            <tr>
              <td className="p-4 border border-gray-300">71 -100</td>
              <td className="p-4 border border-gray-300 text-center">
                $2,600.00
              </td>
              <td className="p-4 border border-gray-300 text-center">
                $3,100.00
              </td>
              <td className="p-4 border border-gray-300 text-center">-</td>
            </tr>
            <tr>
              <td className="p-4 border border-gray-300">Over 100</td>
              <td className="p-4 border border-gray-300 text-center">-</td>
              <td className="p-4 border border-gray-300 text-center">
                $3,000.00
              </td>
              <td className="p-4 border border-gray-300 text-center">-</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
