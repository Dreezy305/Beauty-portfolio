import React from "react";
import Link from "next/link";
import { ArrowNarrowRight } from "tabler-icons-react";

function CaseStudiesMobile(): JSX.Element {
  return  <div className="flex flex-col md:flex md:flex-col w-full h-auto rounded-2xl lg:hidden xl:hidden">
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
      shallow
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
      shallow
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
      shallow
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
      shallow
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
</div>;
}

export default CaseStudiesMobile;
