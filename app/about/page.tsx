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
        <div className="container mx-auto mt-20 flex flex-col space-y-12">
          <div className="flex flex-row items-center justify-between">
            <div className="flex flex-col space-y-8 w-1/2">
              <div className="flex flex-row space-x-6 items-center">
                <h4 className="font-LotaBold text-BeautyWhite text-7xl leading-9">
                  Hi there{" "}
                </h4>
                <Image
                  src={"/waving_hand.svg"}
                  alt="layer"
                  width={70}
                  height={70}
                  priority
                />
              </div>
              <p className="font-SofiaRegular font-normal w-full text-2xl leading-9">
                My name is Ohia Beauty and i'm a product designer with <br />{" "}
                experience designing and building digital products. In the{" "}
                <br /> past,i've collaboratively worked with teams to build
                useable
                <br /> system in e-commerce, fintech, health-tech, agri-tech,
                real
                <br /> estate and emerging technologies, I specialize in Product
                <br /> design, UI, UX, AI design creative direction and design
                <br /> coaching.
              </p>
            </div>
            <div className="w-1/2 flex flex-row justify-end h-auto">
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

            <Card/>
          </div>
        </div>
      </section>
    </BeautyLayout>
  );
}
