import React from "react";
import Image from "next/image";
import BeautyLayout from "../components/Layout/Beauty";
import {
  BrandBehance,
  BrandLinkedin,
  BrandTwitter,
  BrandInstagram,BrandMedium
} from "tabler-icons-react";

function HireMe(): JSX.Element {
  return (
    <BeautyLayout>
      <section className="overflow-hidden">
        <div className="container mx-auto">
        <div className="container mx-auto mt-12 flex flex-col space-y-12">
        <div className="flex flex-row items-center justify-between pt-12 mt-6">
            <div className="flex flex-col space-y-8 w-1/2">
              <div className="flex flex-row items-center">
                <h4 className="font-LotaBold text-BeautyWhite text-7xl leading-9">
                Say Hello.
                </h4>
                <Image
                  src={"/Dizzy.svg"}
                  alt="layer"
                  width={70}
                  height={70}
                  priority
                />
              </div>
              <p className="font-SofiaRegular font-normal w-full text-xl leading-9">
              Let's have a chat over coffee.
              </p>

              <div className="flex flex-col space-y-3 bg-BeautyDarkPurple rounded-lg px-6 py-4 w-1/2">
                <h5 className="font-SofiaRegular font-normal text-xl">WANT TO EMAIL ME?</h5>
                <p className="font-SofiaMedium font-medium text-xl">ohiabeauty26@gmail.com</p>
              </div>

              <div className="flex flex-col space-y-3 bg-BeautyDarkPurple rounded-lg px-6 py-4 w-1/2">
                <h5 className="font-SofiaRegular font-normal text-xl">WANT TO CALL ME?</h5>
                <p className="font-SofiaMedium font-medium text-xl">+234 8069 30 8371</p>
              </div>

              <div className="flex flex-row items-center space-x-10">
            <a
              href="https://www.behance.net/ohiabeauty"
              target="_blank"
              rel="noreferrer"
              className="cursor-pointer"
            >
              <BrandBehance
                size={40}
                strokeWidth={2}
                color={"#fff"}
                className="cursor-pointer"
              />
            </a>
            <a  href="https://medium.com/@ohiabeauty26"
              target="_blank"
              rel="noreferrer"
              className="cursor-pointer">
            <BrandMedium
    size={40}
    strokeWidth={2}
    color={"#fff"}
    className="cursor-pointer"
  />
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              className="cursor-pointer"
              href="https://www.linkedin.com/in/beautyohia/"
            >
              <BrandLinkedin
                size={40}
                strokeWidth={2}
                color={"#fff"}
                className="cursor-pointer"
              />
            </a>

            <a
              target="_blank"
              rel="noreferrer"
              className="cursor-pointer"
              href="https://twitter.com/OhiaBeauty"
            >
              <BrandTwitter
                size={40}
                strokeWidth={2}
                color={"#fff"}
                className="cursor-pointer"
              />
            </a>

            <a
              target="_blank"
              rel="noreferrer"
              className="cursor-pointer"
              href="https://twitter.com/OhiaBeauty"
            >
              <BrandInstagram
                size={40}
                strokeWidth={2}
                color={"#fff"}
                className="cursor-pointer"
              />
            </a>
          </div>
            </div>
            <div className="w-1/2 flex flex-row justify-end h-auto">
              <Image src={"/hello.png"} priority height={500} width={500} alt="hello"/>
            </div>
          </div>
        </div>
        </div>
      </section>
    </BeautyLayout>
  );
}

export default HireMe;
