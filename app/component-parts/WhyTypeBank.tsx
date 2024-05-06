import Image from "next/image";
import React from "react";

const WhyTypeBank = () => {
  return (
    <section className="mx-auto px-16 py-12 bg-green-900 rounded-t-[50px]">
      <div className="my-20 flex items-center flex-col gap-4">
        <div className="flex flex-col text-center font-inter gap-4 max-w-lg">
          <span className="text-green-200 font-medium">Why Typebank?</span>
          <div className="text-center">
            <p className="text-5xl font-medium text-white leading-[60px]">
              The only fintech app you'll ever need
            </p>
            <p className="mt-2 font-medium text-gray-7001">
              Our online banking platform is user-friendly and easy to navigate.
            </p>
          </div>
        </div>
        <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-10">
          <div className="flex flex-col items-center text-center gap-6 p-5 rounded-3xl hover:bg-gray-25/10 transition-all ease-in-out">
            <div>
                <div className="bg-[#51735330] p-4 rounded-full text-center">
                <Image src="/icons/coins.svg" alt="coins icon" width={40} height={40} />
                </div>
            </div>
            <div>
              <h3 className="font-semibold text-lg text-white">
                Checkings account
              </h3>
              <p className="font-medium text-base text-gray-7001">
                Facilisis id diam eget quam. Nisi vestibulum accumsan lectus.
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center text-center gap-6 p-5 rounded-3xl hover:bg-gray-25/10 transition-all ease-in-out">
            <div>
                <div className="bg-[#51735330] p-4 rounded-full text-center">
                <Image src="/icons/coins.svg" alt="coins icon" width={40} height={40} />
                </div>
            </div>
            <div>
              <h3 className="font-semibold text-lg text-white">
                Checkings account
              </h3>
              <p className="font-medium text-base text-gray-7001">
                Facilisis id diam eget quam. Nisi vestibulum accumsan lectus.
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center text-center gap-6 p-5 rounded-3xl hover:bg-gray-25/10 transition-all ease-in-out">
            <div>
                <div className="bg-[#51735330] p-4 rounded-full text-center">
                <Image src="/icons/coins.svg" alt="coins icon" width={40} height={40} />
                </div>
            </div>
            <div>
              <h3 className="font-semibold text-lg text-white">
                Checkings account
              </h3>
              <p className="font-medium text-base text-gray-7001">
                Facilisis id diam eget quam. Nisi vestibulum accumsan lectus.
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center text-center gap-6 p-5 rounded-3xl hover:bg-gray-25/10 transition-all ease-in-out">
            <div>
                <div className="bg-[#51735330] p-4 rounded-full text-center">
                <Image src="/icons/coins.svg" alt="coins icon" width={40} height={40} />
                </div>
            </div>
            <div>
              <h3 className="font-semibold text-lg text-white">
                Checkings account
              </h3>
              <p className="font-medium text-base text-gray-7001">
                Facilisis id diam eget quam. Nisi vestibulum accumsan lectus.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyTypeBank;
