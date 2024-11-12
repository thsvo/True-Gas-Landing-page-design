import React from "react";

const Benefit = () => {
  return (
    <div className="bg-gray-200 px-2 py-10">
      <div id="features" className="mx-auto max-w-6xl">
        {/* <p className="text-center text-base font-semibold leading-7 text-primary-500">
          Features
        </p> */}
        <h2 className="text-center font-display text-3xl font-bold tracking-tight text-[#0b8a2d] md:text-4xl">
          Benefits of Partnering with True Gas
        </h2>
        <ul className="mt-16 grid grid-cols-1 gap-6 text-center text-slate-700 md:grid-cols-3">
          <li className="rounded-xl bg-white px-6 py-8 shadow-sm">
            <img
              src="https://www.svgrepo.com/show/530438/ddos-protection.svg"
              alt=""
              className="mx-auto h-10 w-10"
            />

            <p className="mt-1.5 text-sm leading-6 text-secondary-500">
              Partnering with True Gas can help you expand your business and
              increase revenue by tapping into a rapidly growing market.
            </p>
          </li>
          <li className="rounded-xl bg-white px-6 py-8 shadow-sm">
            <img
              src="https://www.svgrepo.com/show/530442/port-detection.svg"
              alt=""
              className="mx-auto h-10 w-10"
            />

            <p className="mt-1.5 text-sm leading-6 text-secondary-500">
              Get consistent access to high-quality LPG cylinders, backed by our
              commitment to safety and reliability.
            </p>
          </li>
          <li className="rounded-xl bg-white px-6 py-8 shadow-sm">
            <img
              src="https://www.svgrepo.com/show/530444/availability.svg"
              alt=""
              className="mx-auto h-10 w-10"
            />

            <p className="mt-1.5 text-sm leading-6 text-secondary-500">
              Receive marketing materials, operational guidance, and customer
              support to help you succeed as a True Gas dealer.
            </p>
          </li>
          <li className="rounded-xl bg-white px-6 py-8 shadow-sm">
            <a href="/pricing" className="group">
              <img
                src="https://www.svgrepo.com/show/530440/machine-vision.svg"
                alt=""
                className="mx-auto h-10 w-10"
              />

              <p className="mt-1.5 text-sm leading-6 text-secondary-500">
                Steady Supply & Quality Assurance
              </p>
            </a>
          </li>
          <li className="rounded-xl bg-white px-6 py-8 shadow-sm">
            <a href="/templates" className="group">
              <img
                src="https://www.svgrepo.com/show/530450/page-analysis.svg"
                alt=""
                className="mx-auto h-10 w-10"
              />

              <p className="mt-1.5 text-sm leading-6 text-secondary-500">
                Bring convenience and energy solutions to underserved or remote
                areas, making a positive difference in your community.
              </p>
            </a>
          </li>
          <li className="rounded-xl bg-white px-6 py-8 shadow-sm">
            <a href="/download" className="group">
              <img
                src="https://www.svgrepo.com/show/530453/mail-reception.svg"
                alt=""
                className="mx-auto h-10 w-10"
              />

              <p className="mt-1.5 text-sm leading-6 text-secondary-500">
                Marketing & Support
              </p>
            </a>
          </li>
        </ul>
      </div>
   
    </div>
  );
};

export default Benefit;
