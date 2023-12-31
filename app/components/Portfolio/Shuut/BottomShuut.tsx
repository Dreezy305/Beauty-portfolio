import React from "react";
import Image from "next/image";
import "./shuut.css";
import { World } from "tabler-icons-react";
import ShuutLanding from "../../../../public/shuut/ShuutLandingPage.png";
import MaskGroup2 from "../../../../public/MaskGroup2.png";
import MaskGroup3 from "../../../../public/MaskGroup3.png";
import MaskGroup4 from "../../../../public/MaskGroup4.png";
import MaskGroup5 from "../../../../public/MaskGroup5.png";
import ShuutOne from "@/public/shuut/1.png";
import ShuutTwo from "@/public/shuut/2.png";
import ShuutThree from "@/public/shuut/3.png";
import ShuutFour from "@/public/shuut/4.png";
import ShuutFive from "@/public/shuut/5.png";
import { shuut_grid_two } from "@/data/experience";
import BrandOverview from "../../Brand/BrandOverView";

function BottomShuut(): JSX.Element {
  return (
    <div className="rounded-tl-none rounded-tr-none rounded-br-[30px] rounded-bl-[30px] py-6 px-7 w-full bg-BeautyDarkPurple flex flex-col space-y-8">
      <h5 className="font-LotaSemiBold font-semibold text-xl md:text-2xl lg:text-3xl xl:text-3xl leading-7 pt-8 text-center relative brandOverviewLg hidden md:hidden lg:block xl:block">
        Brand Overview
      </h5>

      <h5 className="font-LotaSemiBold font-semibold text-xl md:text-2xl lg:text-3xl xl:text-3xl leading-7 pt-8 text-center relative brandOverviewMd hidden md:block lg:hidden xl:hidden">
        Brand Overview
      </h5>

      <h5 className="font-LotaSemiBold font-semibold text-xl md:text-2xl lg:text-3xl xl:text-3xl leading-7 pt-8 text-center relative brandOverviewSm  md:hidden lg:hidden xl:hidden">
        Brand Overview
      </h5>

      <p className="font-LotaRegular font-normal text-base md:text-lg lg:text-xl xl:text-xl leading-8 py-2 md:py-4 lg:py-7 xl:py-7">
        SHUUT is a peer-to-peer rental marketplace which allows people to rent
        equipments to others nearby, fully insured, it is a trusted marketplace
        for renting equipment gears, Paying back your purchases by renting them
        to people in your area when you're not using them.
      </p>

      <div className="rounded-lg px-6 md:px-6 lg:px-12 xl:px-12 bg-BeautyDark py-6 md:py-6 lg:py-12 xl:py-12">
        <Image
          src={ShuutLanding}
          priority
          alt="shuut_landing"
          className="mx-auto w-full"
        />
      </div>

      <BrandOverview text="The Problem" mdClassName="brandOverviewMdRed" smClassName="brandOverviewSmRed" lgClassName="brandOverviewLgRed"/>
      <p className="font-LotaRegular font-normal text-base md:text-lg lg:text-xl xl:text-xl leading-8 py-3 mt-8">
        In our society today, many people have equipments that are lying dormant
        in their houses that they don't make good use of, and it was purchased
        with large amount of money.
      </p>

      <p className="font-LotaRegular font-normal text-base md:text-lg lg:text-xl xl:text-xl leading-8 py-3 mt-8">
        The first thing that comes to an average person’s taught, when they hear
        of renting out an expensive gear is ;
      </p>

      <ol className="list-decimal list-inside" type="1">
        {[
          "What if the borrower/renter spoilt the equipment.",
          "What is if the equipment is stolen from them",
          "The fear of unforeseen circumstances eg. accident.",
        ].map((i) => {
          return (
            <li className="py-2 font-LotaRegular font-normal text-base md:text-lg lg:text-xl xl:text-xl" key={i}>
              {i}
            </li>
          );
        })}
      </ol>

      <BrandOverview text="Goals & Objectives" mdClassName="brandOverviewMdRed" smClassName="brandOverviewSmRed" lgClassName="brandOverviewLgRed"/>

      <p className="font-LotaRegular font-normal text-base md:text-lg lg:text-xl xl:text-xl leading-8 py-3 mt-8">
        SHUUT plans to help people access equipment gears without owning them by
        renting them from people in your neighborhood in a few easy steps. with
        every equipment insured under top insurance country i the country, the
        risk of losing the product will be very low.
      </p>
      <p className="font-LotaRegular font-normal text-base md:text-lg lg:text-xl xl:text-xl leading-8 py-3 mt-8">
        Renter has the option to extend more rent days already rented
        equipments, and the owner has the option to accept or decline proposal,
        SHUUT has a flexible and transparent process, that helps the users
        involves to see end to end process of the transaction.
      </p>
      <p className="font-LotaRegular font-normal text-base md:text-lg lg:text-xl xl:text-xl leading-8 py-3 mt-8">
        All users on the system are meticulously verified before transactions
        are allowed to take place.
      </p>

      <h5 className="font-LotaThin font-thin text-xl md:text-2xl lg:text-3xl xl:text-3xl leading-7 pt-12 text-center">
        User Interview
      </h5>

      <div className="rounded-lg py-6 px-6 md:px-6 lg:px-12 xl:px-12 bg-BeautyDark flex flex-col space-y-5">
        <p className="font-LotaRegular text-xl md:text-2xl lg:text-3xl xl:text-3xl font-normal py-2 w-full">
          Do you have Equipment in your possession that you’re currently not
          using?
        </p>

        <p className="font-LotaRegular text-xl md:text-2xl lg:text-3xl xl:text-3xl font-normal py-2">
          Why would you choose to rent out your equipment?
        </p>

        <p className="font-LotaRegular text-xl md:text-2xl lg:text-4xl xl:text-4xl font-normal py-2">
          What was your experience renting your equipments?
        </p>

        <p className="font-LotaRegular text-xl md:text-2xl lg:text-4xl xl:text-4xl font-normal py-2">
          Have you ever manhandled someone’s equipment before?
        </p>

        <div className="flex flex-col space-y-8 space-x-0 md:flex md:flex-col md:space-y-8 md:space-x-0 lg:flex lg:flex-row lg:items-center lg:justify-between lg:space-x-4 lg:space-y-0 xl:flex xl:flex-row xl:items-center xl:justify-between xl:space-y-0 xl:space-x-4 pt-6">
          <div className="rounded-lg py-4 h-auto w-full md:w-full lg:w-1/2 xl:w-1/2 px-4 bg-BeautyDarkPurple relative">
            <p className="font-LotaRegular font-normal text-lg leading-7 px-3">
              Yes, i have
            </p>
            <Image
              src={MaskGroup2}
              height={30}
              width={30}
              alt="mask"
              className="absolute top-left"
            />
          </div>

          <div className="rounded-lg py-6 px-4 w-full md:w-full lg:w-1/2 xl:w-1/2 bg-BeautyDarkPurple relative h-auto">
            <p className="font-LotaRegular font-normal text-lg leading-7 w-full px-3">
              I choose to rent my equipment as another source of income to me
            </p>
            <Image
              src={MaskGroup3}
              height={30}
              width={30}
              alt="mask"
              className="absolute bottom-right"
            />
          </div>
        </div>

        <div className="flex flex-col space-y-8 space-x-0 md:flex md:flex-col md:space-y-8 md:space-x-0 lg:flex lg:flex-row lg:items-center lg:justify-between lg:space-x-4 lg:space-y-0 xl:flex xl:flex-row xl:items-center xl:justify-between xl:space-y-0 xl:space-x-4 mt-6 pb-6">
          <div className="rounded-lg py-6 px-4 w-full md:w-full lg:w-1/2 xl:w-1/2 bg-BeautyDarkPurple relative h-auto">
            <p className="font-LotaRegular font-normal text-lg leading-7 w-full px-3">
              There have been good days and bad days when renting, as most
              customers don't have the knowledge of handling the equipments,
              thereby leading to malfunction of some parts
            </p>
            <Image
              src={MaskGroup4}
              height={30}
              width={30}
              alt="mask"
              className="absolute top-right"
            />
          </div>

          <div className="rounded-lg py-6 px-4 w-full md:w-full lg:w-1/2 xl:w-1/2 bg-BeautyDarkPurple relative h-auto">
            <p className="font-LotaRegular font-normal text-lg leading-7 w-full px-3">
              No, i have not
            </p>
            <Image
              src={MaskGroup5}
              height={30}
              width={30}
              alt="mask"
              className="absolute bottom-right"
            />
          </div>
        </div>
      </div>

      <div className="rounded-lg px-4 md:px-12 lg:px-12 xl:px-12 bg-BeautyDark py-4 md:py-12 lg:py-12 xl:py-12 flex flex-col space-y-8 md:space-y-12 lg:space-y-12 xl:space-y-12">
        <div className="flex flex-col space-y-8  md:flex md:flex-row md:space-x-8 md:w-full md:justify-between md:space-y-0 lg:flex lg:flex-row lg:space-x-8 lg:space-y-0 lg:w-full lg:justify-between xl:flex xl:flex-row xl:space-x-8 xl:w-full xl:justify-between xl:space-y-0">
          <Image src={ShuutOne} alt="" priority className="w-full md:w-1/2 lg:w-1/2 xl:w-1/2" />
          <Image src={ShuutTwo} alt="" priority className="w-full md:w-1/2 lg:w-1/2 xl:w-1/2" />
        </div>
        <div className="flex flex-col space-y-8  md:flex md:flex-row md:space-x-8 md:w-full md:justify-between md:space-y-0 lg:flex lg:flex-row lg:space-x-8 lg:space-y-0 lg:w-full lg:justify-between xl:flex xl:flex-row xl:space-x-8 xl:w-full xl:justify-between xl:space-y-0">
          <Image src={ShuutThree} alt="" priority className="w-full md:w-1/2 lg:w-1/2 xl:w-1/2" />
          <Image src={ShuutFour} alt="" priority className="w-full md:w-1/2 lg:w-1/2 xl:w-1/2" />
        </div>
        <div className="flex flex-row">
          <Image src={ShuutFive} alt="" priority className="w-full" />
        </div>
      </div>

      <div className="rounded-lg px-4 md:px-12 lg:px-12 xl:px-12 bg-BeautyDark py-4 md:py-12 lg:py-12 xl:py-12 flex flex-col space-y-8 md:space-y-12 lg:space-y-12 xl:space-y-12">
        <div className="grid grid-cols-1 gap-x-0 gap-y-8 md:grid md:grid-cols-2 md:gap-x-12 md:gap-y-12 lg:grid lg:grid-cols-2 lg:gap-x-12 lg:gap-y-12 xl:grid xl:grid-cols-2 xl:gap-x-12 xl:gap-y-12">
          <>
            {shuut_grid_two.map((i) => {
              return (
                <div key={i.id}>
                  <Image src={i.image} priority alt={i.id} className="w-full" />
                </div>
              );
            })}
          </>
          <div className="text-left">
            <h5 className="font-LotaRegular font-normal text-2xl leading-7">
              Links
            </h5>
          </div>
          <div className="text-left bg-BeautyDarkPurple rounded-2xl flex flex-row space-x-2 md:space-x-4 lg:space-x-5 xl:space-x-5 items-center px-2 md:px-5 lg:px-6 xl:px-6 h-14 w-full md:w-80 lg:w-80 xl:w-80">
            <World size={24} strokeWidth={1.5} color={"#00F0FF"} />
            <a
              href="https://www.shuut.co/"
              target="_blank"
              rel="noreferrer"
              className="font-GraphikLight font-thin underline text-lg cursor-pointer"
            >
              https://www.shuut.co/
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BottomShuut;
