

export default function Signup() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-500 to-pink-500 p-4 md:p-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
          {/* Left Column */}
          <div className="text-white space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Ready To Promote Your New Business With Howdy?
            </h1>
            <p className="text-lg md:text-xl opacity-90">
              Curabitur quam etsum lacus etsumis nulatis etsumised vitae nisledita varius loremis seditum netsum aliquam.
            </p>
            <div className="space-y-4">
              {[
                "Increase brand awareness and sales.",
                "Rank higher on Google search engine.",
                "Double your actual website traffic.",
                "Outrank your competitors.",
              ].map((benefit) => (
                <div key={benefit} className="flex items-center gap-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-300 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-lg">{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column */}
          <div className="lg:justify-self-end w-full max-w-md">
            <div className="bg-white rounded-lg shadow-md p-6 w-full">
              <h2 className="text-2xl font-bold text-center mb-6">
                Get Your 30 Days Free Trial
              </h2>
              <form className="space-y-4">
                <div>
                  <input
                    type="text"
                    placeholder="Full Name*"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Email*"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                </div>
                <div>
                  <select
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                    defaultValue=""
                  >
                    <option value="" disabled>Choose Package*</option>
                    <option value="basic">Basic Package</option>
                    <option value="pro">Pro Package</option>
                    <option value="enterprise">Enterprise Package</option>
                  </select>
                </div>
                <button
                  type="submit"
                  className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-2 px-4 rounded-md transition duration-300"
                >
                  REGISTER NOW
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}