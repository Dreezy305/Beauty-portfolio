import React from "react";
import Image from "next/image";
import BeautyLayout from "../components/Layout/Beauty";
import {
  BrandBehance,
  BrandLinkedin,
  BrandTwitter,
  BrandInstagram,
  BrandMedium,
} from "tabler-icons-react";
import Beauty from "../../public/ht.svg";

function HireMe(): JSX.Element {
  return (
    <BeautyLayout>
      <section className="overflow-hidden">
          <div className="md:container md:mx-auto lg:container lg:mx-auto xl:container xl:mx-auto px-5 md:px-5 lg:px-0 xl:px-0 mt-4 md:mt-8 lg:mt-6 xl:mt-12 flex flex-col space-y-12">
            <div className="flex flex-col space-y-8 md:flex md:flex-col md:space-y-8 lg:flex lg:flex-row lg:items-center lg:justify-between xl:flex xl:flex-row xl:items-center xl:justify-between pt-3 mt-2 md:mt-4 lg:mt-6 xl:mt-6">
              <div className="flex flex-col space-y-5 md:space-y-6 lg:space-y-8 xl:space-y-8 w-full md:w-full lg:w-1/2 xl:w-1/2">
                <div className="flex flex-row items-center space-x-2 md;space-x-2 lg:space-x-0 xl:space-x-0">
                  <h4 className="font-LotaBold text-BeautyWhite text-3xl md:text-4xl lg:text-7xl xl:text-7xl leading-9 animate__animated animate__fadeInDown">
                    Say Hello.
                  </h4>
                  <Image
                    src={"/Dizzy.svg"}
                    alt="layer"
                    width={70}
                    height={70}
                    priority
                     className="hidden md:hidden lg:block xl:block"
                  />
                   <Image
                    src={"/Dizzy.svg"}
                    alt="layer"
                    width={40}
                    height={40}
                    priority
                    className="block md:block lg:hidden xl:hidden"
                  />
                </div>
                <p className="font-SofiaRegular font-normal w-full text-xl leading-9 animate__animated animate__lightSpeenInLeft">
                  Let's have a chat over coffee.
                </p>

                <div className="flex flex-col space-y-3 bg-BeautyDarkPurple rounded-lg px-6 py-4 w-full md:w-2/3 lg:w-1/2 xl:w-1/2 animate__animated animate__slideInDown">
                  <h5 className="font-SofiaRegular font-normal text-xl">
                    WANT TO EMAIL ME?
                  </h5>
                  <p className="font-SofiaMedium font-medium text-xl">
                    ohiabeauty26@gmail.com
                  </p>
                </div>

                <div className="flex flex-col space-y-3 bg-BeautyDarkPurple rounded-lg px-6 py-4 w-full md:w-2/3 lg:w-1/2 xl:w-1/2 animate__animated animate__slideInUp">
                  <h5 className="font-SofiaRegular font-normal text-xl">
                    WANT TO CALL ME?
                  </h5>
                  <p className="font-SofiaMedium font-medium text-xl">
                    +234 8069 30 8371
                  </p>
                </div>

                <div className="flex flex-row items-center space-x-4 md:space-x-7 lg:space-x-10 xl:space-x-10">
                  <a
                    href="https://www.behance.net/ohiabeauty"
                    target="_blank"
                    rel="noreferrer"
                    className="cursor-pointer animate__animated animate__fadeIn"
                  >
                    <BrandBehance
                      size={40}
                      strokeWidth={2}
                      color={"#fff"}
                      className="cursor-pointer"
                    />
                  </a>
                  <a
                    href="https://medium.com/@ohiabeauty26"
                    target="_blank"
                    rel="noreferrer"
                    className="cursor-pointer animate__animated animate__fadeIn"
                  >
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
                    className="cursor-pointer animate__animated animate__fadeIn"
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
                    className="cursor-pointer animate__animated animate__fadeIn"
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
                    className="cursor-pointer animate__animated animate__fadeIn"
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
              <div className="pt-6 md:pt-5 lg:pt-0 xl:pt-0 pb-6 md:pb-5 lg:pb-0 xl:pb-0  mt-14 md:mt-12 lg:mt-0 xl:mt-0 w-full md:w-full lg:w-1/2 xl:w-1/2 flex flex-row justify-center md:justify-center lg:justify-end xl:justify-end h-auto animate__animated animate__bounceInDown">
                <div className="flex flex-row items-center justify-center bg-BeautyLightBlue hire-me">
                <Image
                  src={Beauty}
                  priority
                  alt="hello"
                  className=""
                  // className="pt-9 md:pt-6 lg:pt-0 xl:pt-0 pb-9 md:pb-6 lg:pb-0 xl:pb-0 animate__animated animate__bounceInDown"
                />
                </div>
                
              </div>
            </div>
          </div>
        
      </section>
    </BeautyLayout>
  );
}

export default HireMe;
