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
        <div className="container mx-auto mt-20 flex flex-col space-y-12">
          <div className="flex flex-row items-center justify-between pt-20 mt-6">
            <div className="flex flex-col space-y-8 w-1/2">
              <div className="flex flex-row space-x-6 items-center">
                <h4 className="font-LotaBold text-BeautyWhite text-7xl leading-9">
                  More About Me
                </h4>
                <Image
                  src={"/SmilingFace.svg"}
                  alt="layer"
                  width={70}
                  height={70}
                  priority
                />
              </div>
              <p className="font-SofiaRegular font-normal w-full text-2xl leading-9">
                My name is Beauty Obianuju Ohia, i am a digital product
                <br /> designer with proven history of designing web & mobile
                <br /> products. I have a deep understanding of user psychology,
                <br /> emotions, and behavior, which allows me to to create
                <br /> positive experiences for users using various product.
              </p>
            </div>
            <div className="w-1/2 flex flex-row justify-end h-auto">
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
