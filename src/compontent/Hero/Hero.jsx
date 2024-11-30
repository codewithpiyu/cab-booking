import React from "react";
import bgCity from "../../assets/image/city.jpg";
import yellowCab from "../../assets/image/yellowcab.png";

const bgStyle = {
  backgroundImage: `url(${bgCity})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  height: "520px",
  width: "100%",
};

const Hero = () => {
  return (
    <div style={bgStyle}>
      <div className="dark:bg-black/60 bg-white/80 backdrop-blur-sm dark:text-white duration-300 h-[520px] flex justify-center">
        <div className="contanier grid grid-cols-1 place-items-center">
          {/* text content section */}
          <div className="text-center space-y-5 py-14">
            <p
              data-aos="fade-up"
              className="text-primary text-3xl text-center font-semibold uppercase"
            >
              Book Cab Now
            </p>
            <h1
              data-aos="fade-up"
              data-aos-delay="600"
              className="text-4xl md:text-6xl text-center font-bold"
            >
              +91 9890 456721{" "}
            </h1>
            <p
              data-aos="fade-up"
              data-aos-delay="1000"
              className="tracking-[8px] text-base sm:text-xl font-semibold dark:text-white text-white "
            >
              www.yourdomain.com
            </p>
          </div>
          <div data-aos="zoom-in right" data-aos-duration="1000">
            <img
              src={yellowCab}
              className="max-h-[460px] sm:scale-125 translate-y-10 sm-translate-y-0"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
