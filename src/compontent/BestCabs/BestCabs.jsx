import React from "react";
import BestImg from "../../assets/image/car2.png";

const ServicesData = [
  {
    id: 1,
    img: BestImg,
    name: "Economy Class",
    description:
      "An economy car is a small, lightweight, and inexpensive car that is designed for low-cost purchase and operation. Economy cars are often more fuel efficient than other car models, including compact cars, because of their smaller size.",
    aosDelay: "100",
  },
  {
    id: 2,
    img: BestImg,
    name: "Standard Class",
    description:
      "An economy car is a small, lightweight, and inexpensive car that is designed for low-cost purchase and operation. Economy cars are often more fuel efficient than other car models, including compact cars, because of their smaller size.",
    aosDelay: "100",
  },
  {
    id: 3,
    img: BestImg,
    name: "Business Class",
    description:
      "An economy car is a small, lightweight, and inexpensive car that is designed for low-cost purchase and operation. Economy cars are often more fuel efficient than other car models, including compact cars, because of their smaller size.",
    aosDelay: "100",
  },
];

const BestCabs = () => {
  return (
    <div className="py-10 bg-white dark-bg-dark text-black dark:text-white">
      <div className="contanier">
        {/* header tittle section */}
        <div data-aos="fade-up" className="text-center mb-20">
          <h1 className="text-4xl font-bold text-gray-800 dark:text-white">
            Choose Best Cab
          </h1>
        </div>

        {/* Best Cab Card Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-14 place-items-center">
          {ServicesData.map(({ id, img, name, description, aosDelay }) => {
            return (
              <div
                key={id}
                data-aos="fade-up"
                data-aos-delay={aosDelay}
                className="group rounded-2xl bg-white dark:bg-black hover:bg-primary"
              >
                {/* image section */}
                <div>
                  <img
                    src={img}
                    alt="bestcabimg"
                    className="max-w-[200px] block mx-auto transform-translate-y-20 group-hover:scale-110 group-hover:translate-x-4 duration-300"
                  />
                </div>

                {/* text Section */}

                <div className="p-4 text-center spacy-y-4">
                  <h1 className="text-xl font-bold">{name}</h1>
                  <p className="text-gray-500 group-hover:text-black duration-300 text-sm line-clamp-2">
                    {description}
                  </p>
                  <p className="text-primary text-2xl font-bold group-hover:text-black">
                    $10/km
                  </p>
                  <button>Read More</button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default BestCabs;
