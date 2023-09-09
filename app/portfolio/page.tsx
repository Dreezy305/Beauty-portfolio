import React from "react";
import Link from "next/link";
import BeautyLayout from "../components/Layout/Beauty";
import { ArrowNarrowRight } from "tabler-icons-react";
import "./portfolio.css";

export default function Portfolio(): JSX.Element {
  const CaseStudies = () => {
    return (
      <div className="w-full lg:h-[300px] xl:h-[320px] hidden md:hidden lg:flex lg:flex-row xl:flex xl:flex-row">
        {/* 1 */}
        <div className="h-full w-1/4 rounded-tl-[30px] rounded-bl-[30px] rounded-tr-none rounded-br-none bg-BeautyDeepBlue cursor-pointer relative flex flex-col py-6 px-8">
          <div className="flex flex-row justify-between items-center">
            <span className="font-thin font-LotaThin text-base leading-6 uppercase">
              Agency Banking
            </span>
            <span className="font-thin font-LotaThin text-base leading-6">
              Web
            </span>
          </div>

          <div className="flex flex-col space-y-5 absolute content">
            <h5 className="font-bold font-LotaBold text-2xl leading-6">Fara</h5>
            <p className="font-thin font-LotaThin text-base leading-6 lg:w-11/12 xl:w-4/5">
              An all-in-one financial platform created for the world's
              underserved population in the informal sector.
            </p>
          </div>

          <Link
            href="/portfolio/fara"
            className="flex flex-row items-center space-x-2 absolute view cursor-pointer"
          >
            <span className="font-LotaRegular text-base font-normal leading-6">
              View Case Study
            </span>
            <ArrowNarrowRight
              size={36}
              strokeWidth={1.5}
              color={"#fff"}
              className="pt-0"
            />
          </Link>
        </div>

        {/* 2 */}
        <div className="h-full w-1/4 rounded-tl-none rounded-bl-none rounded-tr-none rounded-br-none bg-[#D85EEC] cursor-pointer relative flex flex-col py-6 px-8">
          <div className="flex flex-row justify-between items-center">
            <span className="font-thin font-LotaThin text-base leading-6 uppercase">
              Bill Payment
            </span>
            <span className="font-thin font-LotaThin text-base leading-6">
              Web
            </span>
          </div>

          <div className="flex flex-col space-y-5 absolute content">
            <h5 className="font-bold font-LotaBold text-2xl leading-6 capitalize">
              Batchbill
            </h5>
            <p className="font-thin font-LotaThin text-base leading-6  lg:w-11/12 xl:w-11/12">
              Batchbills intends to simplify the process of paying bills ranging
              from airtime, data, etc & other bills that can be paid currently
              in Africa.
            </p>
          </div>

          <Link
            href="/portfolio/batchbill"
            className="flex flex-row items-center space-x-2 absolute view"
          >
            <span className="font-LotaRegular text-base font-normal leading-6">
              View Case Study
            </span>
            <ArrowNarrowRight
              size={36}
              strokeWidth={1.5}
              color={"#fff"}
              className="pt-0"
            />
          </Link>
        </div>

        {/* 3 */}
        <div className="h-full w-1/4 rounded-tl-none rounded-bl-none rounded-tr-none rounded-br-none bg-BeautyDeepGreen cursor-pointer relative flex flex-col py-6 px-8 text-BeautyBlack">
          <div className="flex flex-row justify-between items-center">
            <span className="font-thin font-LotaThin text-base leading-6 uppercase text-BeautyBlack">
              Rentals
            </span>
            <span className="font-thin font-LotaThin text-base leading-6 text-BeautyBlack">
              Web & Mobile
            </span>
          </div>

          <div className="flex flex-col space-y-5 absolute content">
            <h5 className="font-bold font-LotaBold text-2xl leading-6 uppercase text-BeautyBlack">
              SHUUT
            </h5>
            <p className="font-thin font-LotaThin text-base leading-6 text-BeautyBlack lg:w-11/12 xl:w-11/12">
              SHUUT provides a safe application with insurance for equipments
              rentage for people within your community.
            </p>
          </div>

          <Link
            href="/portfolio/shuut"
            className="flex flex-row items-center space-x-2 absolute view"
          >
            <span className="font-LotaRegular text-base font-normal leading-6 text-BeautyBlack">
              View Case Study
            </span>
            <ArrowNarrowRight
              size={36}
              strokeWidth={1.5}
              color={"black"}
              className="pt-0"
            />
          </Link>
        </div>

        {/* 4 */}
        <div className="h-full w-1/4 rounded-tr-[30px] rounded-bl-none rounded-tl-none rounded-br-[30px] bg-BeautyDeepGrey cursor-pointer relative flex flex-col py-6 px-8">
          <div className="flex flex-row justify-between items-center">
            <span className="font-thin font-LotaThin text-base leading-6 uppercase">
              Others
            </span>
            <span className="font-thin font-LotaThin text-base leading-6">
              Web & Mobile
            </span>
          </div>

          <div className="flex flex-col space-y-5 absolute content">
            <h5 className="font-bold font-LotaBold text-2xl leading-6">
              Development
            </h5>
            <p className="font-thin font-LotaThin text-base leading-6 w-11/12">
              Case studies & UI screens of previous works done so far.
            </p>
          </div>

          <Link
            href="/portfolio/development/unista"
            className="flex flex-row items-center space-x-2 absolute view"
          >
            <span className="font-LotaRegular text-base font-normal leading-6">
              View Case Study
            </span>
            <ArrowNarrowRight
              size={36}
              strokeWidth={1.5}
              color={"#fff"}
              className="pt-0"
            />
          </Link>
        </div>
      </div>
    );
  };

  const CaseStudiesMobile = () => {
    return (
      <div className="flex flex-col md:flex md:flex-col w-full h-auto rounded-2xl lg:hidden xl:hidden">
        {/* 1 */}
        <div className="h-[310px] bg-BeautyDeepBlue cursor-pointer relative flex flex-col py-6 px-6 rounded-tr-2xl rounded-tl-2xl rounded-br-none rounded-bl-none">
          <div className="flex flex-row justify-between items-center">
            <span className="font-thin font-LotaThin text-base leading-6 uppercase">
              Agency Banking
            </span>
            <span className="font-thin font-LotaThin text-base leading-6">
              Web
            </span>
          </div>

          <div className="flex flex-col space-y-5 absolute content">
            <h5 className="font-bold font-LotaBold text-2xl leading-6">Fara</h5>
            <p className="font-thin font-LotaThin text-base leading-6 w-[93%]">
              An all-in-one financial platform created for the world's
              underserved population in the informal sector.
            </p>
          </div>

          <Link
            href="/portfolio/fara"
            className="flex flex-row items-center space-x-2 absolute view cursor-pointer"
          >
            <span className="font-LotaRegular text-base font-normal leading-6">
              View Case Study
            </span>
            <ArrowNarrowRight
              size={36}
              strokeWidth={1.5}
              color={"#fff"}
              className="pt-0"
            />
          </Link>
        </div>

        {/* 2 */}
        <div className="h-[310px] rounded-tl-none rounded-bl-none rounded-tr-none rounded-br-none bg-[#D85EEC] cursor-pointer relative flex flex-col py-6 px-4">
          <div className="flex flex-row justify-between items-center">
            <span className="font-thin font-LotaThin text-base leading-6 uppercase">
              Bill Payment
            </span>
            <span className="font-thin font-LotaThin text-base leading-6">
              Web
            </span>
          </div>

          <div className="flex flex-col space-y-5 absolute content">
            <h5 className="font-bold font-LotaBold text-2xl leading-6 capitalize">
              Batchbill
            </h5>
            <p className="font-thin font-LotaThin text-base leading-6  w-[95%]">
              Batchbills intends to simplify the process of paying bills ranging
              from airtime, data, etc & other bills that can be paid currently
              in Africa.
            </p>
          </div>

          <Link
            href="/portfolio/batchbill"
            className="flex flex-row items-center space-x-2 absolute view"
          >
            <span className="font-LotaRegular text-base font-normal leading-6">
              View Case Study
            </span>
            <ArrowNarrowRight
              size={36}
              strokeWidth={1.5}
              color={"#fff"}
              className="pt-0"
            />
          </Link>
        </div>

        {/* 3 */}
        <div className="h-[310px] rounded-tl-none rounded-bl-none rounded-tr-none rounded-br-none bg-BeautyDeepGreen cursor-pointer relative flex flex-col py-6 px-4 text-BeautyBlack">
        <div className="flex flex-row justify-between items-center">
            <span className="font-thin font-LotaThin text-base leading-6 uppercase text-BeautyBlack">
              Rentals
            </span>
            <span className="font-thin font-LotaThin text-base leading-6 text-BeautyBlack">
              Web & Mobile
            </span>
          </div>

          <div className="flex flex-col space-y-5 absolute content">
            <h5 className="font-bold font-LotaBold text-2xl leading-6 uppercase text-BeautyBlack">
              SHUUT
            </h5>
            <p className="font-thin font-LotaThin text-base leading-6 text-BeautyBlack w-[94%]">
              SHUUT provides a safe application with insurance for equipments
              rentage for people within your community.
            </p>
          </div>

          <Link
            href="/portfolio/shuut"
            className="flex flex-row items-center space-x-2 absolute view"
          >
            <span className="font-LotaRegular text-base font-normal leading-6 text-BeautyBlack">
              View Case Study
            </span>
            <ArrowNarrowRight
              size={36}
              strokeWidth={1.5}
              color={"black"}
              className="pt-0"
            />
          </Link>
        </div>

        {/* 4 */}
        <div className="h-[280px] rounded-tr-none rounded-bl-2xl rounded-tl-none rounded-br-2xl bg-BeautyDeepGrey cursor-pointer relative flex flex-col py-6 px-4">
        <div className="flex flex-row justify-between items-center">
            <span className="font-thin font-LotaThin text-base leading-6 uppercase">
              Others
            </span>
            <span className="font-thin font-LotaThin text-base leading-6">
              Web & Mobile
            </span>
          </div>

          <div className="flex flex-col space-y-5 absolute content">
            <h5 className="font-bold font-LotaBold text-2xl leading-6">
              Development
            </h5>
            <p className="font-thin font-LotaThin text-base leading-6 w-[93%] md:w-full">
              Case studies & UI screens of previous works done so far.
            </p>
          </div>

          <Link
            href="/portfolio/development/unista"
            className="flex flex-row items-center space-x-2 absolute view"
          >
            <span className="font-LotaRegular text-base font-normal leading-6">
              View Case Study
            </span>
            <ArrowNarrowRight
              size={36}
              strokeWidth={1.5}
              color={"#fff"}
              className="pt-0"
            />
          </Link>
        </div>
      </div>
    );
  };

  return (
    <BeautyLayout active="portfolio">
      <section className="overflow-hidden">
        <div className="container mx-auto relative pt-6 pb-12 md:pb-12 lg:pb-0 xl:pb-0 md:pt-6 lg:pt-24 xl:pt-32">
          <div className="flex flex-col space-y-7 md:space-y-7 lg:space-y-14 xl:space-y-20 text-left">
            {/* CASE STUDIES */}
            <div className="flex flex-col space-y-6 md:space-y-6 lg:space-y-8 xl:space-y-10 w-full md:w-4/5 lg:w-1/3 xl:w-1/3">
              <h5 className="font-LotaBold font-bold text-2xl md:text-3xl lg:text-6xl xl:text-7xl leading-6 md:leading-8 lg:leading-10 xl:leading-10">
                Case Studies
              </h5>

              <p className="font-LotaRegular font-normal text-xl leading-8 md:leading-8 lg:leading-9 xl:leading-9">
                Oh yes, i've been busy. Here's a glimpse of what i've been
                working on.
              </p>
            </div>

            {/* CARD GROUP */}
            <CaseStudies />
            <CaseStudiesMobile />
          </div>
        </div>
      </section>
    </BeautyLayout>
  );
}
