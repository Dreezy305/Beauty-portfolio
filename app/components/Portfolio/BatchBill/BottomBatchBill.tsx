import React from "react";
import Image from "next/image";
import BatchbillDashboard from "../../../../public/batchbilldashboard.png";
import BrokenLink from "../../../../public/brokenlink.svg";
import Map from "../../../../public/map.svg";
import People from "../../../../public/people.svg";
import BillOne from "../../../../public/bill1.png";
import BillTwo from "../../../../public/bill2.png";
import { insight_batch } from "@/data/experience";

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

      {/* KITE HERE */}

      <h5 className="font-LotaSemiBold font-semibold text-3xl leading-7 pt-12 text-center">
        The Approach
      </h5>

      <p className="font-GraphikRegular font-normal text-xl leading-8 py-7 mt-8">
        Research - Getting familiar with payment process
      </p>

      <p className="font-LotaRegular font-normal text-lg leading-7">
        I did not know much about bill payment services. So, to understand the
        process of bills are been paid i did a secondary research on it.
        <br />
        <br />
        The major aim here was to gather crucial insights about the billing
        payment as well as understand the perspective of the end users.
      </p>

      <p className="font-GraphikRegular font-normal text-xl leading-8 py-7 mt-8">
        Bill Payment
      </p>

      <p className="font-LotaRegular font-normal text-lg leading-7">
        For the digital natives of today, e-payments have become a way of life.
        from the moment they are registered in the system (cooperate or
        indiviual) up to payment successfull <br />
        <br />
        There are, however, certain differences between, for example,
        Quickteller or Paga, they are robust consumer services platform for
        convenient Airtime Recharge, Funds Transfer, Bill Payments.
      </p>

      <div className="flex flex-row items-center justify-between space-x-5">
        <Image src={BillOne} alt="group" className="w-1/2" priority />
        <Image src={BillTwo} alt="group" className="w-1/2" priority />
      </div>

      <p className="font-LotaRegular font-normal text-2xl leading-8 mt-8">
        Key takeaways about bill payment
      </p>

      <p className="font-LotaRegular font-normal text-xl leading-8">
        Relevants notes to know when embarking on online bil payments:
      </p>

      <div className="rounded-lg px-8 bg-BeautyDark">
        <ul className="py-2 list-disc">
          {insight_batch.map((i: string, index: any) => {
            return (
              <li
                className="font-GraphikRegular font-normal text-lg leading-7 text-BeautyWhite py-5"
                key={index + i}
              >
                {i}
              </li>
            );
          })}
        </ul>
      </div>

      <p className="font-LotaRegular font-normal text-lg leading-7">
      Some apps provide an option to schedule payments at a later date. You can always use the Batchnbill schedule option when your bill due date isn't in the near future but you want to set up a payment in advance so that you don't forget it later. 
      </p>
    </div>
  );
}

export default BottomBatchBill;
