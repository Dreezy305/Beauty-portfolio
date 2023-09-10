import React from "react";
import Image from "next/image";
import BeautyLayout from "../components/Layout/Beauty";
import Values from "../../public/values.png";
import Travel from "../../public/TravelCollage.png";
import Write from "../../public/write.png";
import Writer from "../../public/writer.png";
import { values_content } from "../../data/experience";

export default function KnowMore(): JSX.Element {
  return (
    <BeautyLayout active={"know more"} location="others">
      <section className="overflow-hidden">
        <div className="container mx-auto px-0 md:px-4 lg:px-0 xl:px-0 pt-10 md:pt-20 lg:mt-8 xl:pt-12 flex flex-col space-y-12">
          <div className="lg:flex lg:flex-row lg:items-center lg:justify-between xl:flex xl:flex-row xl:items-center xl:justify-between pt-5 md:pt-12 lg:pt-8 xl:pt-12 mt-0 md:mt-6 lg:mt-6 xl:mt-6">
            <div className="flex flex-col space-y-8 w-full md:w-full lg:w-1/2 xl:w-1/2">
              <div className="flex flex-row items-center space-x-6 md:space-x-12 md:flex md:flex-row md:items-center lg:flex lg:flex-row lg:space-x-6 lg:items-center xl:flex xl:flex-row xl:items-center xl:space-x-6">
                <h4 className="font-LotaBold text-BeautyWhite pl-2 md:pl-0 lg:pl-0 xl:pl-0 text-3xl md:text-4xl lg:text-7xl xl:text-7xl leading-9">
                  More About Me
                </h4>
                <Image
                  src={"/SmilingFace.svg"}
                  alt="layer"
                  width={70}
                  height={70}
                  priority
                  className="hidden md:hidden lg:block xl:block"
                />
                <Image
                  src={"/SmilingFace.svg"}
                  alt="layer"
                  width={40}
                  height={40}
                  priority
                  className="block md:block lg:hidden xl:hidden"
                />
              </div>
              <p className="font-SofiaRegular font-normal w-full md:w-full lg:w-[96%] xl:w-[96%] text-base md:text-2xl lg:text-2xl xl:text:2xl leading-9">
                My name is Beauty Obianuju Ohia, i am a digital product
                designer with proven history of designing web & mobile
                products. I have a deep understanding of user psychology, emotions, and behavior, which allows me to to createpositive experiences for users using various product.
              </p>
            </div>
            <div className="w-full md:w-full lg:w-1/2 xl:w-1/2 flex flex-row justify-center md:justify-center lg:justify-end xl:justify-end h-auto mt-14 md:mt-7 lg:mt-0 xl:mt-0">
              <img src={"/m.png"} alt="layer" />
            </div>
          </div>

          <div className="flex flex-col space-y-8 mb-8 pb-8 pt-7 mt-7">
            <h5 className="font-SofiaBold font-bold text-2xl leading-6 pb-5 pt-7">
              My Values
            </h5>

            <div className="flex flex-col space-y-7">
              <Image src={Values} alt="values" priority />
              {values_content.map((i, index: any) => {
                return (
                  <p
                    className="py-3 font-LotaRegular leading-6 text-lg text-BeautyWhite"
                    key={index}
                  >
                    {i}
                  </p>
                );
              })}
            </div>
          </div>

          <div className="flex flex-col space-y-8 mb-8 pb-8 pt-7 mt-7">
            <h5 className="font-SofiaBold font-bold text-2xl leading-6 pb-5 pt-7">
              Travel Escapades
            </h5>

            <Image src={Travel} alt="values" priority className="w-full" />
          </div>

          <div className="flex flex-col space-y-12 mb-8 pb-8 pt-7 mt-7">
            <h5 className="font-SofiaBold font-bold text-2xl leading-6 pb-5 pt-7">
              When i write on medium
            </h5>

            <Image src={Writer} alt="values" priority className="w-full py-4" />



            <Image src={Write} alt="values" priority className="w-full py-4" />
          </div>
        </div>
      </section>
    </BeautyLayout>
  );
}
