import React from "react";
import BannerCard from "./BannerCard";
import BgImage from "../../assets/image/girl.jpg";
import { SlStar } from "react-icons/sl";

const bgStyle = {
  backgroundImage: `url(${BgImage})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backGroundRepeat: "no-repeat",
  minHeight: "520px",
  width: "100%",
};

const About = () => {
  return (
    <div style={bgStyle}>
      <div className="text-white bg-black/80 min-h-[530px] flex py-10 items-center">
        <div className="container">
          {/* header title section */}
          <div className="space-y-3 uppearcase text-center py-14">
            <p className="text-primary text-2xl font-semibold ">We do Best</p>
            <h1
              data-aos="fade-up"
              data-aos-delay="300"
              className="text-3xl font-bold"
            >
              Than you wish
            </h1>
          </div>

          {/* card Section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div className="space-y-8">
              <BannerCard
                title={"Fast Booking"}
                description={
                  "Are you tired of the never-ending struggle to book a cab online, especially during unfavorable weather conditions or in emergency situations? Look no further! EaseMyTrip is here to provide you with a seamless and convenient solution for all your cab booking needs."
                }
                icon={<SlStar />}
              />
              <BannerCard
                title={"Fast Booking"}
                description={
                  "Are you tired of the never-ending struggle to book a cab online, especially during unfavorable weather conditions or in emergency situations? Look no further! EaseMyTrip is here to provide you with a seamless and convenient solution for all your cab booking needs."
                }
                icon={<SlStar />}
              />
            </div>
            <div className="space-y-8">
              <BannerCard
                title={"Fast Booking"}
                description={
                  "Are you tired of the never-ending struggle to book a cab online, especially during unfavorable weather conditions or in emergency situations? Look no further! EaseMyTrip is here to provide you with a seamless and convenient solution for all your cab booking needs."
                }
                icon={<SlStar />}
              />
              <BannerCard
                title={"Fast Booking"}
                description={
                  "Are you tired of the never-ending struggle to book a cab online, especially during unfavorable weather conditions or in emergency situations? Look no further! EaseMyTrip is here to provide you with a seamless and convenient solution for all your cab booking needs."
                }
                icon={<SlStar />}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
