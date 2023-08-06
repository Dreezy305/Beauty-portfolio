import React from "react";
import Image from "next/image";
import BatchbillDashboard from "../../../../public/batchbilldashboard.png";
import BrokenLink from "../../../../public/brokenlink.svg";
import Map from "../../../../public/map.svg";
import People from "../../../../public/people.svg";
import Refresh from "../../../../public/refresh.svg";

function BottomBatchBill(): JSX.Element {
  return (
    <div className="rounded-tl-none rounded-tr-none rounded-br-[30px] rounded-bl-[30px] py-6 px-7 w-full bg-BeautyDarkPurple flex flex-col space-y-8">
      <h5 className="font-LotaSemiBold font-semibold text-3xl leading-7 pt-8 text-center">
        Brand Overview
      </h5>

      <p className="font-LotaRegular font-normal text-xl leading-8 py-7">
        Batchbills intends to simplify the process of paying bills ranging from
        airtime, data, electricity, cable tv and other bills that can be paid
        currently in Nigeria in the interim.
        <br />
        <br />
        In it’s next release, Batchbills will be looking into expanding into
        paying bills that are available in other countries outside of Nigeria as
        well.
        <br />
        <br />I collaborated with Batchbill team to design an on-demand payment
        service web application.
      </p>

      <div className="rounded-lg px-3 py-8 bg-BeautyDark w-4/5 mx-auto">
        <h5 className="font-GraphikLight text-lg leading-7 pb-8 mx-auto text-center">
          Dashboard
        </h5>

        <Image
          src={BatchbillDashboard}
          alt="group"
          className="mx-auto"
          priority
        />
      </div>

      <h5 className="font-LotaSemiBold font-semibold text-3xl leading-7 pt-12 text-center">
        The Problem
      </h5>

      <p className="font-LotaRegular font-normal text-xl leading-8 py-7 mt-8">
        In today’s world, convenience is king. It’s no surprise that online bill
        payment has long become the norm. Why leave the comfort of your cozy
        couch and go to the store to purchase airtime when you can get
        everything you need with a few taps and swipes on your iPhone?
        <br />
        <br />
        As a result, global bill payments represents a $430 billion market
        opportunity (as of 2019, up from just under $380 billion in 2018). It is
        evident that there is a need to develop a long-lasting solution for bill
        payment.
        <br />
        <br />
        Batchbill is new to the bill payment industry However, they decided to
        venture into Airtime, Data,Electicity,Cable Tv etc payments and
        contacted me to help them design the web app.
        <br />
        <br />
        There are existing solutions in the market that offer interesting
        services but the major challenges for users are: trust that their
        payments will always be delivered fast and in perfect condition,
        transparency in terms of realtime feedback of when their payment have
        not reflected in their accounts and when is going to.
        <br />
        <br />
        These are the major problems that need to be solved:
      </p>

      <div className="grid grid-cols-3">
        <div className="border-r border-r-BeautyWhite">
          <div className="mx-auto flex flex-col space-y-5">
            <Image
              src={BrokenLink}
              alt="group"
              className="mx-auto text-center"
              priority
            />
            <p className="w-2/3 font-LotaSemiBold text-center mx-auto">
              Designing the application to be user friendly to both illterates
              and non-illiterates.
            </p>
          </div>
        </div>
        <div className="border-r border-r-BeautyWhite">
          <div className="mx-auto flex flex-col space-y-5">
            <Image
              src={Map}
              alt="group"
              className="mx-auto text-center"
              priority
            />
            <p className="w-2/3 font-LotaSemiBold text-center mx-auto">
              Ensuring it was responsive acreoss diffrent screens especially on
              mobile devices.
            </p>
          </div>
        </div>
        <div className="border-r-none border-r-none">
          <div className="mx-auto flex flex-col space-y-5">
            <Image
              src={People}
              alt="group"
              className="mx-auto text-center"
              priority
            />
            <p className="w-2/3 font-LotaSemiBold text-center mx-auto">
              Communicating Fara’s brand identity and ideals through the design.
            </p>
          </div>
        </div>
      </div>

      <h5 className="font-LotaSemiBold font-semibold text-3xl leading-7 pt-12 text-center">
        Goals & Objectives
      </h5>

      <p className="font-LotaRegular font-normal text-xl leading-8 py-7 mt-8">
        Batchbill had a very clear target, a target that needs an extremely easy
        and fast to use solution. The app had to look professional,
        aesthetically pleasing and had to stand out from the competition.
        Reliability was another key point: real-time payment feedback solves the
        usual delayed transaction anxiety and builds trust with the brand. The
        application should also include a feature to schedule payment and allow
        the users to pause,edit or cancel schedule.
        <br />
        <br />
        My role on the project was to design a web application that makes bill,
        airtime & data payment faster
        <br />
        <br />
        Other goals for the design include:
      </p>
    </div>
  );
}

export default BottomBatchBill;
