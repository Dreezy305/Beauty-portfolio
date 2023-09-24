import React from "react";
import Image from "next/image";
import Link from "next/link";
import BeautyLayout from "../components/Layout/Beauty";
import Values from "../../public/values.png";
import Travel from "../../public/TravelCollage.png";
import MediumOne from "../../public/medium1.png";
import MediumTwo from "../../public/medium2.png";
import MediumThree from "../../public/medium3.png";
import Writer from "../../public/writer.png";
import { values_content } from "../../data/experience";

export default function KnowMore(): JSX.Element {
  return (
    <BeautyLayout active={"know more"} location="others">
      <section className="overflow-hidden">
        <div className="md:container md:mx-auto lg:container lg:mx-auto xl:container xl:mx-auto px-5 md:px-4 lg:px-0 xl:px-0 pt-10 md:pt-20 lg:mt-8 xl:pt-12 flex flex-col space-y-12">
          <div className="lg:flex lg:flex-row lg:items-center lg:justify-between xl:flex xl:flex-row xl:items-center xl:justify-between pt-5 md:pt-12 lg:pt-8 xl:pt-12 mt-0 md:mt-6 lg:mt-6 xl:mt-6">
            <div className="flex flex-col space-y-8 w-full md:w-full lg:w-1/2 xl:w-1/2">
              <div className="flex flex-row items-center space-x-6 md:space-x-12 md:flex md:flex-row md:items-center lg:flex lg:flex-row lg:space-x-6 lg:items-center xl:flex xl:flex-row xl:items-center xl:space-x-6">
                <h4 className="font-LotaBold text-BeautyWhite pl-2 md:pl-0 lg:pl-0 xl:pl-0 text-3xl md:text-4xl lg:text-5xl xl:text-7xl leading-9 animate__animated animate__slideInUp">
                  More About Me
                </h4>
                <Image
                  src={"/SmilingFace.svg"}
                  alt="layer"
                  width={70}
                  height={70}
                  priority
                  className="hidden md:hidden lg:block xl:block animate__animated animate__heartBeat"
                />
                <Image
                  src={"/SmilingFace.svg"}
                  alt="layer"
                  width={40}
                  height={40}
                  priority
                  className="block md:block lg:hidden xl:hidden animate__animated animate__heartBeat"
                />
              </div>
              <p className="font-SofiaLight font-normal w-full md:w-full lg:w-[96%] xl:w-[96%] text-base md:text-2xl lg:text-2xl xl:text:2xl leading-9 animate__animated animate__slideInUp">
                My name is Beauty Obianuju Ohia, i am a digital product designer
                with proven history of designing web & mobile products. I have a
                deep understanding of user psychology, emotions, and behavior,
                which allows me to to createpositive experiences for users using
                various product.
              </p>
            </div>
            <div className="w-full md:w-full lg:w-1/2 xl:w-1/2 flex flex-row justify-center md:justify-center lg:justify-end xl:justify-end h-auto mt-14 md:mt-7 lg:mt-0 xl:mt-0">
              <img
                src={"/m.png"}
                alt="layer"
                className="animate__animated animate__fadeIn"
              />
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
                    className={`py-3 font-LotaThin leading-6 text-lg text-BeautyWhite ${
                      index % 2 === 0
                        ? "animate__animated animate__lightSpeedInRight"
                        : "animate__animated animate__lightSpeedInLeft"
                    }`}
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

            <a
              className="cursor-pointer bg-BeautyDarkPurple py-1 px-4 rounded-[30px]"
              href="https://www.linkedin.com/posts/beautyohia_why-product-feedback-is-essential-to-our-activity-6977099611375063040-380a?utm_source=share&utm_medium=member_desktop"
              target="_blank"
            >
              <Image
                src={Writer}
                alt="values"
                priority
                className="w-full py-4"
              />
            </a>

            <div className="flex flex-col space-y-8 space-x-0 md:flex md:flex-row md:space-x-12 md:space-y-0 lg:flex lg:flex-row lg:items-center lg:justify-between lg:space-y-0 lg:space-x-0 xl:flex xl:flex-row xl:items-center xl:justify-between xl:space-y-0 xl:space-x-0 bg-BeautyDarkPurple py-4 px-4 rounded-[30px]">
              <a
                className="relative"
                href="https://medium.com/@ohiabeauty26/my-2-cents-on-mobile-screens-d8d85ae95e7a"
                target="_blank"
              >
                <Image
                  src={MediumOne}
                  alt="values"
                  priority
                  className="cursor-pointer"
                />{" "}
                <h5 className="absolute top-[40%] left-[22%] md:left-[10%] lg:left-[22%] xl:left-[22%] font-bold font-SofiaBold w-1/2 md:w-4/5 lg:w-1/2 xl:w-1/2 text-white text-2xl md:text-lg lg:text-2xl xl:text-2xl text-center">
                  My 2 Cents On Mobile Screens
                </h5>
              </a>

              <a
                className="relative"
                href="https://medium.com/@ohiabeauty26/product-design-tradeoffs-4db893fc692b"
                target="_blank"
              >
                <Image
                  src={MediumTwo}
                  alt="values"
                  priority
                  className="cursor-pointer"
                />{" "}
                <h5 className="absolute top-[40%] left-[22%] md:left-[10%] lg:left-[22%] xl:left-[22%] font-bold font-SofiaBold w-1/2 md:w-4/5 lg:w-1/2 xl:w-1/2 text-white text-2xl md:text-lg lg:text-2xl xl:text-2xl text-center">
                  Product, Design Trade-offs
                </h5>
              </a>

              <a
                className="relative"
                href="https://medium.com/@ohiabeauty26/day-5-30-days-ui-ux-challenge-4b5d9b017add"
                target="_blank"
              >
                <Image
                  src={MediumThree}
                  alt="values"
                  priority
                  className="cursor-pointer"
                />{" "}
                <h5 className="absolute top-[40%] left-[22%] md:left-[10%] lg:left-[22%] xl:left-[22%] font-bold font-SofiaBold w-1/2 md:w-4/5 lg:w-1/2 xl:w-1/2 text-white text-2xl md:text-lg lg:text-2xl xl:text-2xl text-center">
                  Day 5- 30 Days UI/UX Challenge
                </h5>
              </a>
            </div>
          </div>
        </div>
      </section>
    </BeautyLayout>
  );
}
