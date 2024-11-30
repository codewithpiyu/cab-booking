import React from "react";

const Contact = () => {
  return (
    <div className="bg-primary text-black sm:min-h-[600px] sm:grid sm-place-item-center duration-300 pt-24 pb-10 sm-pb-0">
      <div className="container">
        <div className="grid grid-cols-1 sm-grid-cols-2 place-items-center justify-between">
          <div className="space-y-5 sm:p-16 pb-6">
            <h1 data-aos="fade-up" className="text-2xl sm:text-3xl font-bold">
              BEST OF CITY
            </h1>
            <h1 data-aos="fade-up" className="text-3xl sm:text-4xl font-bold">
              TRUSTED CAB SERVICES IN NEW YORK
            </h1>
            <p data-aos="fade-up" className="leading-8 tracking-wide">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
              ipsam corporis ad consequatur similique ex repellendus, beatae
              iure ea odio facilis reiciendis quibusdam nostrum culpa
              perspiciatis provident itaque nesciunt dolores.
            </p>
            <button className="bg-black text-white px-4 py-4 rounded-lg">
              Book Now
            </button>
          </div>
          {/* right side form section */}
          <div data-aos="fade">
            <div className="w-full md:max-w-[350px] mx-auto">
              <h1 className="uppercase text-2xl text-white bg-black px-5 py-3">
                Book a Cab
              </h1>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-2 bg-white p-5">
                <input
                  className="inputfield border-gray-300 "
                  type="text"
                  name=""
                  id=""
                  placeholder="Name"
                />
                <input
                  className="inputfield border-gray-300"
                  type="text"
                  name=""
                  id=""
                  placeholder="Phone"
                />
                <input
                  className="inputfield border-gray-300"
                  type="text"
                  name=""
                  id=""
                  placeholder="Start"
                />
                <input
                  className="inputfield border-gray-300"
                  type="text"
                  name=""
                  id=""
                  placeholder="End"
                />
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="Choose Vehicle"
                  className="col-span-2 inputfield border-gray-300"
                />
                <button className="col-span-2 bg-black w-full mt-6 text-white py-2 px-4 rounded-lg">
                  Book Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
