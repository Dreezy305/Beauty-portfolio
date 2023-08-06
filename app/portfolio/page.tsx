import React from "react";
import Link from "next/link";
import BeautyLayout from "../components/Layout/Beauty";
import { ArrowNarrowRight } from "tabler-icons-react";
import "./portfolio.css";

export default function Portfolio(): JSX.Element {

  const CaseStudies = () => {
    return (
      <div className="w-full h-[300px] rounded-[30px] flex flex-row">
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
            <p className="font-thin font-LotaThin text-base leading-6">
              An all-in-one financial platform created for
              <br /> the world's underserved population in the informal sector.
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
        <div className="h-full w-1/4 rounded-tl-none rounded-bl-none rounded-tr-none rounded-br-none bg-BeautyDeepPurple cursor-pointer relative flex flex-col py-6 px-8">
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
            <p className="font-thin font-LotaThin text-base leading-6">
              Batchbills intends to simplify the process of
              <br />
              paying bills ranging from airtime, data, etc &<br /> other bills
              that can be paid currently in Africa.
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
            <p className="font-thin font-LotaThin text-base leading-6 text-BeautyBlack">
              SHUUT provides a safe application with
              <br /> insurance for equipments rentage for people
              <br /> within your community.
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
            <p className="font-thin font-LotaThin text-base leading-6">
              Case studies & UI screens of previous works
              <br />
              done so far.
            </p>
          </div>

          <Link
            href="#"
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
        <div className="container mx-auto relative pt-32">
          <div className="flex flex-col space-y-14 text-left">
            {/* CASE STUDIES */}
            <div className="flex flex-col space-y-10">
              <h5 className="font-LotaBold font-bold text-7xl leading-10">Case Studies</h5>

              <p className="font-LotaRegular font-normal text-xl leading-9">
                Oh yes, i've been busy. Here's a glimpse of what i've<br/> been
                working on.
              </p>
            </div>

            {/* CARD GROUP */}
            <CaseStudies />
          </div>
        </div>
      </section>
    </BeautyLayout>
  );
}
