import React from "react";
import Image from "next/image";
import ShuutLanding from "../../../../public/shuut/ShuutLandingPage.png";

function BottomShuut(): JSX.Element {
  return (
    <div className="rounded-tl-none rounded-tr-none rounded-br-[30px] rounded-bl-[30px] py-6 px-7 w-full bg-BeautyDarkPurple flex flex-col space-y-8">
      <h5 className="font-LotaSemiBold font-semibold text-3xl leading-7 pt-8 text-center">
        Brand Overview
      </h5>

      <p className="font-LotaRegular font-normal text-xl leading-8 py-7">
        SHUUT is a peer-to-peer rental marketplace which allows people to rent
        equipments to others nearby, fully insured, it is a trusted marketplace
        for renting equipment gears, Paying back your purchases by renting them
        to people in your area when you're not using them.
      </p>

      <div className="rounded-lg px-12 bg-BeautyDark py-12">
        <Image
          src={ShuutLanding}
          priority
          alt="shuut_landing"
          className="mx-auto w-full"
        />
      </div>

      <h5 className="font-LotaSemiBold font-semibold text-3xl leading-7 pt-12 text-center">
        The Problem
      </h5>
      <p className="font-LotaRegular font-normal text-xl leading-8 py-3 mt-8">
        In our society today, many people have equipments that are lying dormant
        in their houses that they don't make good use of, and it was purchased
        with large amount of money.
      </p>

      <p className="font-LotaRegular font-normal text-xl leading-8 py-3 mt-8">
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
            <li className="py-2 font-LotaRegular font-normal text-xl" key={i}>
              {i}
            </li>
          );
        })}
      </ol>

      <h5 className="font-LotaSemiBold font-semibold text-3xl leading-7 pt-12 text-center">
        Goals & Objectives
      </h5>

      <p className="font-LotaRegular font-normal text-xl leading-8 py-3 mt-8">
        SHUUT plans to help people access equipment gears without owning them by
        renting them from people in your neighborhood in a few easy steps. with
        every equipment insured under top insurance country i the country, the
        risk of losing the product will be very low.
      </p>
      <p className="font-LotaRegular font-normal text-xl leading-8 py-3 mt-8">
        Renter has the option to extend more rent days already rented
        equipments, and the owner has the option to accept or decline proposal,
        SHUUT has a flexible and transparent process, that helps the users
        involves to see end to end process of the transaction.
      </p>
      <p className="font-LotaRegular font-normal text-xl leading-8 py-3 mt-8">
        All users on the system are meticulously verified before transactions
        are allowed to take place.
      </p>
    </div>
  );
}

export default BottomShuut;
