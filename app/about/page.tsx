import React from "react";
import BeautyLayout from "../components/Layout/Beauty";
import "./about.css";
import Image from "next/image";
import Accordion from "../components/Accordion/Accordion";
import { work_experience } from "../../data/experience";
import Card from "../components/Card/Card";

export default function About(): JSX.Element {
  return (
    <BeautyLayout active={"about"} location="others">
      <section className="overflow-hidden">
        <div className="md:container md:mx-auto lg:container lg:mx-auto xl:container xl:mx-auto mt-12 md:mt-20 lg:mt-20 xl:mt-20 flex flex-col space-y-12 px-5 md:px-4 lg:px-0 xl:px-0">
          <div className="flex flex-col space-y-16 md:flex md:flex-col md:space-y-16 lg:flex lg:flex-row lg:items-center lg:justify-between xl:flex xl:flex-row xl:items-center xl:justify-between">
            <div className="flex flex-col space-y-6 lg:space-y-8 md:space-y-12 w-full md:w-full lg:w-1/2 xl:w-1/2">
              <div className="flex flex-row space-x-6 items-center">
                <h4 className="font-LotaBold text-BeautyWhite text-3xl md:text-4xl lg:text-7xl xl:text-7xl leading-9">
                  Hi there{" "}
                </h4>
                <Image
                  src={"/waving_hand.svg"}
                  alt="layer"
                  width={70}
                  height={70}
                  priority
                  className="hidden md:hidden lg:block xl:block"
                />
                <Image src={"/waving_hand.svg"} alt="wave" width={40} height={40} priority className="block md:block lg:hidden xl:hidden" />
              </div>
              <p className="font-SofiaRegular font-normal w-full md:w-[95%] lg:w-[103%] xl:w-[90%] text-base md:text-2xl lg:text-2xl xl:text:2xl leading-9">
                My name is Ohia Beauty and i'm a product designer with
                experience designing and building digital products. In the
                past,i've collaboratively worked with teams to build useable
                system in e-commerce, fintech, health-tech, agri-tech, real
                estate and emerging technologies, I specialize in Product
                design, UI, UX, AI design creative direction and design
                coaching.
              </p>
            </div>
            <div className="w-full md:w-full lg:w-1/2 lg:flex lg:flex-row lg:justify-end h-auto xl:w-1/2 xl:flex xl:flex-row xl:justify-end">
              <img src={"/beauty2.png"} alt="layer" />
            </div>
          </div>

          <div className="flex flex-col space-y-12 mb-8 pb-8 pt-7">
            <h5 className="font-SofiaBold font-bold text-2xl leading-6">
              My Work Experience
            </h5>

            {work_experience.map((i: any, index: any) => {
              return (
                <div key={index}>
                  <Accordion data={i} />
                </div>
              );
            })}

            <h5 className="font-SofiaBold font-bold text-3xl leading-6 pt-10">
              My Expertise
            </h5>

            <Card />
          </div>
        </div>
      </section>
    </BeautyLayout>
  );
}
