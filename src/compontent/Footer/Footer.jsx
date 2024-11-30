import React from "react";
import {
  FaAndroid,
  FaAppStore,
  FaGoogle,
  FaInstagram,
  FaMapMarker,
  FaMousePointer,
  FaTwitter,
  FaFacebook,
} from "react-icons/fa";

import { MdEmail, MdCall } from "react-icons/md";

const Footer = () => {
  return (
    <div className="bg-white text-black darK:bg-black dark:text-white ">
      {/* Uppear Section Banner */}
      <div className="bg-primary">
        <div className="contanier text-black text-center py-10 lg:py-14 text-2xl font-bold space-y-4">
          <p>We Are Ready To Take Your Call 24 Hourse 7 Days!</p>
          <h1 className="text-3xl md:text-5xl font-bold">+123 4567 8900</h1>
        </div>
      </div>
      {/* Bottom Section Banner */}

      <div className="contanier grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 md:gap-20 py-12">
        <div className="space-y-6">
          {/* heading */}
          <h1 className="text-2xl py-3 font-bold uppercase border-b-8 border-primary">
            About Cab Hub
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
            voluptatum molestias reprehenderit excepturi veritatis repellendus
            aut iste alias similique quos facere qui est velit, et, blanditiis
            repellat exercitationem amet! Dolore.
          </p>
          {/* social links */}
          <div className="flex items-center text-primary gap-3 text-2xl">
            <FaFacebook />
            <FaInstagram />
            <FaGoogle />
            <FaTwitter />
          </div>
        </div>

        {/* second col section */}
        <div className="space-y-6">
          <h1 className="text-2xl py-3 font-bold uppercase border-b-8 border-primary">
            Download
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
            illum id illo eum? Eum vitae fuga adipisci, fugit magni laboriosam
            eos velit culpa error nostrum aliquid tempora, impedit fugiat in.
          </p>
          <h1 className="text-primary text-xl font-semibold flex items-center gap-4">
            Android User{""}
            <span>
              <FaAndroid className="text-2xl text-black dark:text-white" />
            </span>
          </h1>
         
          <h1 className="text-primary text-xl font-semibold flex items-center gap-4">
            Ios user{""}
            <span>
              <FaAppStore className="text-2xl text-black dark:text-white" />
            </span>
          </h1>
        </div>
        {/* third col section */}
        <div className="space-y-6">
          {/* heading */}
          <h1 className="text-2xl py-3 font-bold uppercase border-b-8 border-primary">
            Contact
          </h1>
          <div className="flex items-center gap-4">
            <FaMapMarker />
            123 Street,New York, USA
          </div>
          <div className="flex items-center gap-4">
            <MdCall />
            +123 4567 8900
          </div>
          <div className="flex items-center gap-4">
            <MdEmail />
            priyanka.kakde2821@gmail.com
          </div>
          <div className="flex items-center gap-4">
            <FaMousePointer />
            priyanka.kakde2821@gmail.com
          </div>
        </div>
      </div>
      <p className="text-center py-4 text-sm">
        Copyright @ 2024. All rights reserved
      </p>
    </div>
  );
};

export default Footer;
