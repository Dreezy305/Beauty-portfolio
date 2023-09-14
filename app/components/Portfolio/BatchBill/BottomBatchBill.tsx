import React from "react";
import Image from "next/image";
import BatchbillDashboard from "../../../../public/batchbilldashboard.png";
import BrokenLink from "../../../../public/brokenlink.svg";
import Map from "../../../../public/map.svg";
import People from "../../../../public/people.svg";
import BillOne from "../../../../public/bill1.png";
import BillTwo from "../../../../public/bill2.png";
import BillThree from "../../../../public/bill3.png";
import BillFour from "../../../../public/bill4.png";
import MaskGroup2 from "../../../../public/MaskGroup2.png";
import MaskGroup3 from "../../../../public/MaskGroup3.png";
import MaskGroup4 from "../../../../public/MaskGroup4.png";
import MaskGroup5 from "../../../../public/MaskGroup5.png";
import Image99 from "../../../../public/image99.png";
import Image100 from "../../../../public/image100.png";
import Frame9 from "../../../../public/Frame9.png";
import Kite from "../../../../public/b.svg";
import Login from "../../../../public/icons/batchlogin.png";
import Reset from "../../../../public/icons/batchrecovery.png";
import {
  goals,
  insight_batch,
  motivations,
  takeways,
  insight_batchbill,
  batchbill_grid,
  batchbill_top_up,
  batchbill_top_up_one,
  batchbill_top_up_two,
} from "@/data/experience";

function BottomBatchBill(): JSX.Element {
  return (
    <div className="rounded-tl-none rounded-tr-none rounded-br-[30px] rounded-bl-[30px] py-6 px-7 w-full bg-BeautyDarkPurple flex flex-col space-y-8">
      <h5 className="font-LotaSemiBold font-semibold text-xl md:text-2xl lg:text-3xl xl:text-3xl leading-7 pt-8 text-center">
        Brand Overview
      </h5>

      <p className="font-LotaRegular font-normal text-base md:text-lg lg:text-xl xl:text-xl leading-8 py-2 md:py-4 lg:py-7 xl:py-7">
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

      <div className="rounded-lg px-3 py-8 bg-BeautyDark w-full md:w-full lg:w-4/5 xl:w-4/5 mx-auto">
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

      <h5 className="font-LotaSemiBold font-semibold text-xl md:text-2xl lg:text-3xl xl:text-3xl leading-7 pt-8 text-center">
        The Problem
      </h5>

      <p className="font-LotaRegular font-normal text-base md:text-lg lg:text-xl xl:text-xl leading-8 py-2 md:py-4 lg:py-7 xl:py-7">
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

      <div className="grid grid-cols-1 gap-y-8 md:gap-y-8 lg:gap-y-0 xl:gap-y-0 md:grid md:grid-cols-2 lg:grid lg:grid-cols-3 xl:grid xl:grid-cols-3">
        <div className="lg:border-r lg:border-r-BeautyWhite xl:border-r xl:border-r-BeeautyWhite">
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
        <div className="lg:border-r lg:border-r-BeautyWhite xl:border-r xl:border-r-BeeautyWhite">
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
        <div className="lg:border-none lg:border-r-BeautyWhite xl:border-none xl:border-r-BeeautyWhite">
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

      <h5 className="font-LotaSemiBold font-semibold text-xl md:text-2xl lg:text-3xl xl:text-3xl leading-7 pt-8 text-center">
        Goals & Objectives
      </h5>

      <p className="font-LotaRegular font-normal text-base md:text-lg lg:text-xl xl:text-xl leading-8 py-2 md:py-4 lg:py-7 xl:py-7">
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
      <div className="w-full px-5">
        <Image src={Kite} priority alt="kite" className="mx-auto w-full" />
      </div>

      <h5 className="font-LotaSemiBold font-semibold text-xl md:text-2xl lg:text-3xl xl:text-3xl leading-7 pt-8 text-center">
        The Approach
      </h5>

      <p className="font-GraphikRegular font-normal text-base md:text-lg lg:text-xl xl:text-xl leading-8 py-7 mt-8">
        Research - Getting familiar with payment process
      </p>

      <p className="font-LotaRegular font-normal text-sm md:text-base lg:text-lg xl:text-lg leading-7">
        I did not know much about bill payment services. So, to understand the
        process of bills are been paid i did a secondary research on it.
        <br />
        <br />
        The major aim here was to gather crucial insights about the billing
        payment as well as understand the perspective of the end users.
      </p>

      <p className="font-GraphikRegular font-normal text-base md:text-lg lg:text-xl xl:text-xl leading-8 py-7 mt-8">
        Bill Payment
      </p>

      <p className="font-LotaRegular font-normal text-sm md:text-base lg:text-lg xl:text-lg leading-7">
        For the digital natives of today, e-payments have become a way of life.
        from the moment they are registered in the system (cooperate or
        indiviual) up to payment successfull <br />
        <br />
        There are, however, certain differences between, for example,
        Quickteller or Paga, they are robust consumer services platform for
        convenient Airtime Recharge, Funds Transfer, Bill Payments.
      </p>

      <div className="flex flex-col space-y-8 md:flex md:flex-col md:space-y-6 lg:flex lg:flex-row lg:items-center lg:justify-between lg:space-x-5 lg:space-y-0 xl:flex xl:flex-row xl:items-center xl:justify-between xl:space-x-5 xl:space-y-0">
        <Image src={BillOne} alt="group" className="w-full md:w-full lg:w-1/2 xl:w-1/2" priority />
        <Image src={BillTwo} alt="group" className="w-full md:w-full lg:w-1/2 xl:w-1/2" priority />
      </div>

      <p className="font-LotaRegular font-normal text-base md:text-lg lg:text-2xl xl:text-2xl leading-8 py-2 md:py-4 lg:py-7 xl:py-7">
        Key takeaways about bill payment
      </p>

      <p className="font-LotaRegular font-normal text-base md:text-lg lg:text-xl xl:text-xl leading-8 py-2 md:py-4 lg:py-7 xl:py-7 mt-8">
        Relevants notes to know when embarking on online bil payments:
      </p>

      <div className="rounded-lg px-8 bg-BeautyDark">
        <ul className="py-2 list-disc">
          {insight_batch.map((i: string, index: any) => {
            return (
              <li
                className="font-GraphikRegular font-normal text-sm md:text-base lg:text-lg xl:text-lg leading-7 text-BeautyWhite py-5"
                key={index + i}
              >
                {i}
              </li>
            );
          })}
        </ul>
      </div>

      <p className="font-LotaRegular font-normal text-sm md:text-base lg:text-lg xl:text-lg leading-8 py-2 md:py-4 lg:py-7 xl:py-7 mt-8">
        Some apps provide an option to schedule payments at a later date. You
        can always use the Batchnbill schedule option when your bill due date
        isn't in the near future but you want to set up a payment in advance so
        that you don't forget it later.
      </p>

      <div className="flex flex-col space-y-8 md:flex md:flex-col md:space-y-6 lg:flex lg:flex-row lg:items-center lg:justify-between lg:space-x-5 lg:space-y-0 xl:flex xl:flex-row xl:items-center xl:justify-between xl:space-x-5 xl:space-y-0">
        <Image src={BillThree} alt="group" className="w-full md:w-full lg:w-1/2 xl:w-1/2" priority />
        <Image src={BillFour} alt="group" className="w-full md:w-full lg:w-1/2 xl:w-1/2" priority />
      </div>

      <p className="font-LotaRegular font-normal text-sm md:text-base lg:text-lg xl:text-lg leading-8 py-2 md:py-4 lg:py-7 xl:py-7 mt-8">
        or one time payment, this is the payment you issue a single time. This
        option makes sense for services you use infrequently.
      </p>

      <p className="font-LotaRegular font-normal text-base md:text-lg lg:text-xl xl:text-xl leading-8 py-2 md:py-4 lg:py-7 xl:py-7 mt-8">
        Concerns with online bill payment vis-à-vis Covid-19 virus outbreak
      </p>

      <p className="font-LotaRegular font-normal text-sm md:text-base lg:text-lg xl:text-lg leading-8 py-2 md:py-4 lg:py-7 xl:py-7 mt-8">
        The Covid-19 pandemic has disrupted every aspect of how societies
        function, forcing governments, businesses, educators, and regular
        citizens to adapt to a “new normal” way of conducting daily activities.
        More specifically, the current health crisis has accelerated the digital
        transformation already taking place across geographies in areas such as
        e-government, remittances, and e-commerce. Stay-at-home orders and
        social distancing measures forced brick-and-mortar retailers to close or
        reduce their activity, accelerating e-commerce sales. In the United
        States, online retailers that relied on digital payments raked in
        billions: Amazon and Walmart, the country’s two largest companies,
        together earned an extra $10.7 billion in 2020—a 56 percent increase in
        profits compared to 2019.
      </p>

      <p className="font-LotaRegular font-normal text-base md:text-lg lg:text-xl xl:text-xl leading-8 py-2 md:py-4 lg:py-7 xl:py-7 mt-8">
        Some statictics on package delivery <br />
        Source: Perficient
      </p>

      <div className="flex flex-row justify-center space-x-6 py-5">
        <div className="grid grid-cols-2 gap-x-6 gap-y-10">
          <div className="flex flex-col space-y-4 border-l border-l-BeautyGold pl-6 pt-2">
            <h6 className="text-start font-GraphikLight font-light text-3xl leading-6 text-BeautyGold">
              54%
            </h6>
            <p className="font-GraphikRegular font-normal text-base leading-7">
              Consumers prefer window shopping
            </p>
          </div>

          <div className="flex flex-col space-y-4 border-l border-l-BeautyGold pl-6 pt-2">
            <h6 className="text-start font-GraphikLight font-light text-3xl leading-6 text-BeautyGold">
              41%
            </h6>
            <p className="font-GraphikRegular font-normal text-base leading-7">
              Prefer to do so in the comnfort of there homes.
            </p>
          </div>

          <div className="flex flex-col space-y-4 border-l border-l-BeautyGold pl-6 pt-2">
            <h6 className="text-start font-GraphikLight font-light text-3xl leading-6 text-BeautyGold">
              53%
            </h6>
            <p className="font-GraphikRegular font-normal text-base leading-7">
              Reported spends more than 15 minutes
              <br />
              browsing for a single reason.
            </p>
          </div>

          <div className="flex flex-col space-y-4 border-l border-l-BeautyGold pl-6 pt-2">
            <h6 className="text-start font-GraphikLight font-light text-3xl leading-6 text-BeautyGold">
              200 Billion
            </h6>
            <p className="font-GraphikRegular font-normal text-base leading-7">
              parcel volume is expected to rise to 200
              <br /> billion by the year 2025
            </p>
          </div>
        </div>
      </div>

      <p className="font-LotaRegular font-normal text-sm md:text-base lg:text-lg xl:text-lg leading-8 py-2 md:py-4 lg:py-7 xl:py-7 mt-8">
        The category of Users
      </p>

      <p className="font-LotaRegular font-normal text-base">
        These are the user categories encountered during the research:
      </p>

      <div className="rounded-lg px-8 bg-BeautyDark">
        <ul className="py-2 list-disc">
          <li className="font-GraphikRegular font-normal text-sm md:text-base lg:text-lg xl:text-lg leading-7 text-BeautyWhite py-5">
            Coporate: the one who wants to ship a parcel
          </li>
          <li className="font-GraphikRegular font-normal text-sm text;base lg:text-lg xl:text-lg leading-7 text-BeautyWhite py-5">
            Indiviuals: the service provider
          </li>
        </ul>
      </div>

      <h5 className="font-LotaThin font-thin text-xl md:text-2xl lg:text-3xl xl:text-3xl leading-7 pt-12 text-center">
        User Interview
      </h5>

      <div className="rounded-lg py-6 px-2 md:px-3 lg:px-12 xl:px-12 bg-BeautyDark flex flex-col space-y-5">
        <p className="font-LotaRegular text-xl md:text-2xl lg:text-3xl xl:text-3xl font-normal py-2 w-full">
          How often, why, when and how they paybill,buy airtime or data?
        </p>

        <p className="font-LotaRegular text-xl md:text-2xl lg:text-3xl xl:text-3xl font-normal py-2">
          Why would you choose one online payment platform to another?
        </p>

        <p className="font-LotaRegular text-xl md:text-3xl lg:text-4xl xl:text-4xl font-normal py-2">
          What was your experience using online payment platforms?
        </p>

        <p className="font-LotaRegular text-xl md:text-3xl lg:text-4xl xl:text-4xl font-normal py-2">
          Have you ever sent something of high value through online payment?
        </p>

        <div className="flex flex-col space-y-9 md:flex md:flex-col md:space-y-9 lg:flex lg:flex-row lg:items-center lg:justify-between lg:space-x-4 lg:space-y-0 lg:pt-6 xl:flex xl:flex-row xl:items-center xl:justify-between xl:space-x-4 xl:pt-6 xl:space-y-0">
          <div className="rounded-lg py-4 h-auto w-full md:w-full lg:w-1/2 xl:w-1/2 px-4 bg-BeautyDarkPurple relative">
            <p className="font-LotaRegular font-normal text-sm md:text-base lg:text-lg xl:text-lg leading-7">
              I don't use online bill payment.
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
            <p className="font-LotaRegular font-normal text-sm md:text-base lg:text-lg xl:text-lg leading-7 w-full">
              I use online bill payment every other week, I use a waybill
              service most times though.
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

        <div className="flex flex-col space-y-5 md:flex md:flex-col md:space-y-7 lg:flex lg:flex-row lg:items-center lg:justify-between lg:space-x-4 lg:mt-0 lg:space-y-0 lg:pb-6 xl:flex xl:flex-row xl:items-center xl:justify-between xl:space-x-4 xl:pb-6 xl:space-y-0 xl:mt-0">
          <div className="rounded-lg py-6 px-4 w-full md:w-full lg:w-1/2 xl:w-1/2 bg-BeautyDarkPurple relative h-auto">
            <p className="font-LotaRegular font-normal text-sm md:text-base lg:text-lg xl:text-lg leading-7 w-full">
              I am a retailer and I sell Airtime & recharge data for my
              customers everyday, i will like to my account to be credited with
              airtime so my customers doesnt have to wait for me to recharge
              when my call card get exhausted.
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
            <p className="font-LotaRegular font-normal text-sm md:text-base lg:text-lg xl:text-lg leading-7 w-full">
              I would like to be notified for bill payments.
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

      <h5 className="font-LotaSemiBold font-semibold text-xl md:text-2xl lg:text-3xl xl:text-3xl leading-7 pt-12 text-center">
        User Persona
      </h5>

      <p className="font-LotaRegular font-normal text-base">
        I created a User Personas to help uncover the different ways people may
        interface with the product or a similar product, so I can focus my
        efforts on improving the experience for real people and use cases.
      </p>

      <div className=" py-5 rounded-2xl flex flex-row items-start w-full">
        <div className="w-1/4 bg-BeautyLightGrey rounded-tl-2xl rounded-tr-none rounded-bl-2xl rounded-br-none px-5 py-7 flex flex-row items-center justify-center space-y-7 h-[675px]">
          <div className="flex flex-col space-y-3 px-6 w-full">
            <div className="w-48">
              <Image
                src={"/batchpicture.png"}
                alt="group"
                className=""
                priority
                width={156}
                height={156}
              />
            </div>
            <div className="grid grid-cols-2 gap-x-5 gap-y-8 pt-3">
              <ul className="list-none">
                <li className="font-light font-LotaThin text-lg">Jane Cole</li>
                {["29", "student", "single", "lagos"].map(
                  (i: string, index: any) => {
                    return (
                      <li
                        key={index + i}
                        className="font-SofiaRegular font-normal text-base capitalize py-2"
                      >
                        {i}
                      </li>
                    );
                  }
                )}
              </ul>

              <ul className="list-none">
                <li className="font-light font-LotaThin text-lg">
                  Personality
                </li>
                {["techie", "extrovert", "academics", "party goer"].map(
                  (i: string, index: any) => {
                    return (
                      <li
                        key={index + i}
                        className="font-SofiaRegular font-normal text-base capitalize py-2"
                      >
                        {i}
                      </li>
                    );
                  }
                )}
              </ul>

              <ul className="list-none">
                <li className="font-light font-LotaThin text-lg">Brands</li>
                {["apple", "lyft", "McDolands", "FedEx"].map(
                  (i: string, index: any) => {
                    return (
                      <li
                        key={index + i}
                        className="font-SofiaRegular font-normal text-base capitalize py-2"
                      >
                        {i}
                      </li>
                    );
                  }
                )}
              </ul>
            </div>
          </div>
        </div>

        <div className="w-3/4 bg-BeautyDark rounded-tr-2xl rounded-tl-none rounded-bl-none rounded-br-2xl px-7 py-7 space-y-8 flex flex-col h-[675px]">
          <div className="grid grid-cols-2 gap-x-10">
            <div className="flex flex-col space-y-12">
              <div className="flex flex-col space-y-5">
                <h6 className="font-LotaThin font-light text-lg leading-6">
                  Bio
                </h6>
                <p className="flex flex-col space-y-5">
                  <p className="font-LotaRegular leading-7 text-base">
                    Lucy is a goal driven marketing lead, always concerned about
                    helping clients build a solid bridge between them and their
                    customers, by using experiential national consumer
                    promotion. She has vast experience in the industry and has
                    carried out different consumer promo for different
                    industries mostly FMCG.
                  </p>
                  <p className="font-LotaRegular leading-7 text-base">
                    She previously led the marketing team that was in charge of
                    a promo with La Casera, in which over 1,800,000 entries were
                    recorded from consumers and about 900,000 participants were
                    rewarded with airtime.
                  </p>
                </p>
              </div>

              <div className="flex flex-col space-y-5">
                <h6 className="font-LotaThin font-light text-lg leading-6">
                  Frustrations
                </h6>
                <p className="font-LotaRegular leading-7 text-base">
                  Getting a stable data and airtime vendor that can scale for
                  huge volume of customers has always been a challenge
                </p>
              </div>
            </div>

            <div className="flex flex-col space-y-12">
              <div className="flex flex-col space-y-5">
                <h6 className="font-LotaThin font-light text-lg leading-6">
                  Goals
                </h6>
                <ul className="list-none">
                  {goals.map((i) => {
                    return (
                      <li
                        key={i}
                        className="font-LotaRegular leading-7 text-base py-1"
                      >
                        {i}
                      </li>
                    );
                  })}
                </ul>
              </div>
              <div className="flex flex-col space-y-5">
                <h6 className="font-LotaThin font-light text-lg leading-6">
                  Motivations
                </h6>
                <ul className="list-none">
                  {motivations.map((i) => {
                    return (
                      <li
                        key={i}
                        className="font-LotaRegular leading-7 text-base py-1"
                      >
                        {i}
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <h5 className="font-LotaThin font-light text-4xl leading-7 pt-12 text-center">
        Competitive Analysis - Comparing Existing solutions
      </h5>

      <h5 className="font-LotaThin font-light text-3xl leading-7 pt-12">
        Payloader
      </h5>

      <p className="font-LotaRegular font-normal text-xl leading-8 py-7 mt-8 w-full">
        It offers personal digital airtime & data recharge payment And
        businesses can sign up with Payloader to receive and process online
        payments from customers through a website or by email.
      </p>

      <div className="rounded-lg px-5 py-8 bg-BeautyDark">
        <Image src={Image99} priority className="w-full" alt="image 99" />
      </div>

      <h5 className="font-LotaThin font-light text-3xl leading-7 pt-12">
        Remita
      </h5>

      <p className="font-LotaRegular font-normal text-xl leading-8 py-7 mt-8 w-full">
        Remita is a multi-device platform that allows you to view all your bank
        balances – from different banks – on a single screen, easily transfer
        money to one or more beneficiaries, pay bills, view detailed transaction
        reports on-the-go and many others.
      </p>

      <div className="rounded-lg px-5 py-8 bg-BeautyDark flex flex-row justify-center items-center">
        <Image src={Image100} priority className="" alt="image 100" />
      </div>

      <h5 className="font-LotaThin font-light text-4xl leading-7 pt-12 text-center">
        User Flow
      </h5>

      <p className="font-LotaRegular font-normal text-xl leading-8 py-7 mt-8 w-full">
        A client chooses the start and end points of his or her bill payment.
        After all obligatory details have been provided, the service
        automatically generate a inflow & outflow tracker of all expense spent
        on bill payment, Airtime Data.
        <br />
        <br />
        The clients can also edit,cancel,or pause payment at anytime of their
        choice.
        <br />
        <br />
        The application is designed so that users can easily find every feature
        and use it intuitively. The layout design is also transparent and user
        friendly.
      </p>

      <Image src={Frame9} priority className="w-full" alt="image 100" />

      <h5 className="font-LotaThin font-light text-4xl leading-7 pt-12 text-center">
        Main Insights & Takeaways
      </h5>

      <p className="font-LotaRegular font-normal text-xl leading-8 py-7 mt-8 w-full">
        After my research, I was able to note some important points that would
        guide me through the design process. Some of the things I learnt are:
      </p>

      <div className="grid grid-cols-3 gap-y-14">
        {takeways.map((i) => {
          return (
            <div className="flex flex-row items-center space-x-4">
              <Image src={i.image} priority alt="" />
              <div className="flex flex-col space-y-2">
                <h5 className="font-LotaRegular font-normal text-base">
                  {i.title}
                </h5>
                <p className="font-LotaRegular font-normal text-sm">{i.desc}</p>
              </div>
            </div>
          );
        })}
      </div>

      <h5 className="font-LotaRegular font-normal text-4xl leading-7 pt-12 text-center">
        Design Process
      </h5>

      <p className="font-LotaRegular font-normal text-xl leading-8 py-7 mt-8 w-full">
        My deisgn process for this project was intensive on research and user
        inteviews in order to gain as mucn insights as possible into the real
        life users motivations, situations and use cases:
      </p>

      <div className="rounded-lg py-5 bg-BeautyDark flex flex-col space-y-4 px-12">
        <ul className="py-2 list-disc">
          {insight_batchbill.map((i: string, index: any) => {
            return (
              <li
                className="font-GraphikRegular font-normal text-lg leading-7 text-BeautyWhite py-2"
                key={index + i}
              >
                {i}
              </li>
            );
          })}
        </ul>
      </div>

      <p className="font-LotaRegular font-normal text-xl leading-8 py-7 mt-8 w-full">
        In order to maintain brand consistency and make the app delightful,
        vibrant and visually compelling to users, I used batchbill's existing
        brand guidelines to choose colours blue and green as the primary colors,
        t Neutral colours like black and white were used for in-app text
        conversations and text backgrounds. The impact of the colours used
        paired well with the modern, energetic appeal of Batchbill's visual
        identity.
      </p>

      <h5 className="font-LotaRegular font-normal text-4xl leading-7 pt-12 text-center">
        The Solution
      </h5>

      <div className="rounded-lg py-7 bg-BeautyDark flex flex-row space-x-4 px-5">
        <Image src={Login} className="w-1/2" priority alt="login" />
        <Image src={Reset} className="w-1/2" priority alt="recovery" />
      </div>

      <h5 className="font-LotaRegular font-normal text-4xl leading-7 pt-12 text-left">
        Hi Fidelity Design
      </h5>

      <p className="font-LotaRegular font-normal text-xl leading-8 py-7 mt-8 w-full">
        Authentication (Fast User Verification)
        <br />
        <br />
        The authentication process is hassle free and straight to the point.is
        created for Indiviuals and Coporate users.
      </p>

      <div className="rounded-lg py-7 bg-BeautyDark px-5">
        <div className="grid grid-cols-2 gap-x-12 gap-y-7">
          {batchbill_grid.map((i) => {
            return (
              <div key={i.id}>
                <Image src={i.image} priority alt={i.id} className="w-full" />
              </div>
            );
          })}
        </div>
      </div>

      <h5 className="font-LotaRegular font-normal text-4xl leading-7 pt-12 text-left">
        Top-up (Single & Bulk, Airtime & Data) Screens
      </h5>

      <p className="font-LotaRegular font-normal text-xl leading-8 py-7 mt-8 w-full">
        Users are able to choose if they want to use bulk or single transaction
        to purchase either airtime or data, they can schedule payment or set
        transaction pin if they have not done that.
      </p>

      <div className="rounded-lg py-7 bg-BeautyDark px-5">
        <div className="grid grid-cols-2 gap-x-12 gap-y-12">
          {batchbill_top_up.map((i) => {
            return (
              <div key={i.id}>
                <Image src={i.image} priority alt={i.id} className="w-full" />
              </div>
            );
          })}
        </div>
      </div>

      <div className="rounded-lg py-7 bg-BeautyDark px-5 mt-8">
        <div className="grid grid-cols-2 gap-x-8 gap-y-6">
          {batchbill_top_up_one.map((i) => {
            return (
              <div key={i.id}>
                <Image src={i.image} priority alt={i.id} className="w-full" />
              </div>
            );
          })}
        </div>
      </div>

      <div className="rounded-lg py-7 bg-BeautyDark px-5 mt-8">
        <div className="grid grid-cols-2 gap-x-8 gap-y-6">
          {batchbill_top_up_two.map((i) => {
            return (
              <div key={i.id}>
                <Image src={i.image} priority alt={i.id} className="w-full" />
              </div>
            );
          })}

         
        </div>
      </div>
    </div>
  );
}

export default BottomBatchBill;
