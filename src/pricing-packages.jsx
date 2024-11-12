export default function Prices() {
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
  
        {/* Packages */}
        <div className="space-y-6">
          {/* Starter Package */}
          <div className="relative">
            <div className="bg-[#0B8A2D] rounded-lg p-4 md:p-6 md:pl-32 flex flex-col md:flex-row justify-between items-start md:items-center">
              <div className="mb-4 md:mb-0">
                <h2 className="text-2xl md:text-3xl font-bold text-white">Starter Package</h2>
                <p className="text-white/90 text-base md:text-xl">
                  Includes 20 Gas Cylinder & Shipment Delivery.
                </p>
              </div>
              <div className="flex flex-col md:flex-row items-start md:items-center gap-2 md:gap-4">
                <span className="text-white font-medium">11kg X 20</span>
                <div className="bg-[#D84315] text-white px-3 md:px-4 py-1 md:py-2 rounded-md">
                  <span className="text-xl md:text-2xl font-bold">$132,000</span>
                </div>
              </div>
            </div>
            {/* <img
              src="/placeholder.svg?height=120&width=60"
              alt="11kg Gas Cylinder"
              className="absolute left-4 bottom-4 h-24 md:h-32 hidden md:block"
            /> */}
          </div>
  
          {/* Go Getter Package */}
          <div className="relative">
            <div className="bg-[#0B8A2D] rounded-lg p-4 md:p-6 md:pl-32 flex flex-col md:flex-row justify-between items-start md:items-center">
              <div className="mb-4 md:mb-0">
                <h2 className="text-2xl md:text-3xl font-bold text-white">Go Getter Package</h2>
                <p className="text-white/90 text-base md:text-xl">
                  Includes 50 Gas Cylinder & Shipment Delivery.
                </p>
              </div>
              <div className="flex flex-col md:flex-row items-start md:items-center gap-2 md:gap-4">
                <div className="text-left md:text-right text-white font-medium">
                  <div>11kg X 30</div>
                  <div>14kg X 20</div>
                </div>
                <div className="bg-[#D84315] text-white px-3 md:px-4 py-1 md:py-2 rounded-md">
                  <span className="text-xl md:text-2xl font-bold">$320,000</span>
                </div>
              </div>
            </div>
            {/* <div className="absolute left-4 bottom-4 flex gap-2 hidden md:flex">
              <img
                src="/placeholder.svg?height=120&width=60"
                alt="11kg Gas Cylinder"
                className="h-24 md:h-32"
              />
              <img
                src="/placeholder.svg?height=140&width=70"
                alt="14kg Gas Cylinder"
                className="h-24 md:h-32"
              />
            </div> */}
          </div>
  
          {/* Boss Gas Package */}
          <div className="relative">
            <div className="bg-[#0B8A2D] rounded-lg p-4 md:p-6 md:pl-32 flex flex-col md:flex-row justify-between items-start md:items-center">
              <div className="mb-4 md:mb-0">
                <h2 className="text-2xl md:text-3xl font-bold text-white">Boss Gas Package</h2>
                <p className="text-white/90 text-base md:text-xl">
                  Includes 100 Gas Cylinder & Shipment Delivery.
                </p>
              </div>
              <div className="flex flex-col md:flex-row items-start md:items-center gap-2 md:gap-4">
                <div className="text-left md:text-right text-white font-medium">
                  <div>11kg X 70</div>
                  <div>14kg X 30</div>
                </div>
                <div className="bg-[#D84315] text-white px-3 md:px-4 py-1 md:py-2 rounded-md">
                  <span className="text-xl md:text-2xl font-bold">$595,000</span>
                </div>
              </div>
            </div>
            {/* <div className="absolute left-4 bottom-4 flex gap-2 hidden md:flex">
              <img
                src="/placeholder.svg?height=120&width=60"
                alt="11kg Gas Cylinder"
                className="h-24 md:h-32"
              />
              <img
                src="/placeholder.svg?height=140&width=70"
                alt="14kg Gas Cylinder"
                className="h-24 md:h-32"
              />
            </div> */}
          </div>
        </div>
  
        {/* Contact Information */}
        <div className="mt-6 md:mt-8 text-center text-base md:text-xl text-gray-700">
          For more information contact us at{" "}
          <span className="font-bold">+ 1 876 567- 6069</span>
        </div>
        <br /> <br /> <br /> <br /> <br /> <br />
      </div>
    )
  }