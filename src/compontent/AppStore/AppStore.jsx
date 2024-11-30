import React from "react";
import CarBooking from "../../assets/image/carbooking.png";
import Appstoring from "../../assets/image/appstore.png";
import PlayStoring from "../../assets/image/playstore.png";

const AppStore = () => {
  return (
    <div className="bg-[#f5f5f5] dark:bg-black dark:text-white">
      <div className="contanier">
        {/* header title section */}
        <div className="space-y-3 uppearcase text-center py-14">
          <p
            data-aos="fade-up"
            className="text-primary text-2xl font-semibold "
          >
            Download
          </p>
          <h1
            data-aos="fade-up"
            data-aos-delay="300"
            className="text-3xl font-bold"
          >
            Best Cab Service
          </h1>
        </div>
        {/* Card Section */}
        <div
          data-aos="fade-up"
          className="grid grid-cols-1 sm:grid-cols-2 gap-4 place-items-center"
        >
          <div className="space-y-8 max-w-[400px] mx-auto">
            <h1 className="text-2xl font-bold">
              Download the Cab voucher app free! Get Exciting New Offers
            </h1>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat
              tempora unde blanditiis pariatur incidunt in voluptatibus,
              recusandae voluptas quod dolore, sint molestias sequi deserunt
              ducimus, reiciendis dolores odit obcaecati natus?
            </p>
            {/* App store Logo section*/}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 place-items-center">
              <a href="#">
                <img
                  src={Appstoring}
                  alt="appstoring"
                  className="max-w-[150px] sm:max-w[120px]md:max-w-[200px]"
                />
              </a>
              <a href="#">
                <img
                  src={PlayStoring}
                  alt="appstoring"
                  className="max-w-[150px] sm:max-w[120px]md:max-w-[200px]"
                />
              </a>
            </div>
          </div>
          {/* Image section */}
          <div>
            <img src={CarBooking} alt="carbooking" className="max-w-[400px]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppStore;
