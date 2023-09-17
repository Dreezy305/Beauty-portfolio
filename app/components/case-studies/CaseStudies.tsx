"use client"
import React, {useEffect} from 'react'
import Link from "next/link";
import { ArrowNarrowRight } from "tabler-icons-react";

function CaseStudies():JSX.Element {
    useEffect(() => {
        const init = async () => {
          const { Animate,
            initTE, } = await import("tw-elements");
          initTE({ Animate });
        };
        init();
      }, []);
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
            <span className="font-LotaRegular text-base font-normal leading-6 transition duration-150 ease-in-out"
            data-te-animation-init
            data-te-animation-target="#view-case-study"
            >
              View Case Study
            </span>
            <ArrowNarrowRight
             id="view-case-study"
              size={36}
              strokeWidth={1.5}
              color={"#fff"}
              className="pt-0 transition duration-150 ease-in-out"
              data-te-animation-init
  data-te-animation-start="onHover"
  data-te-animation-reset="true"
  data-te-animation="[slide-out-right_1s_ease-in-out]"
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
  )
}

export default CaseStudies