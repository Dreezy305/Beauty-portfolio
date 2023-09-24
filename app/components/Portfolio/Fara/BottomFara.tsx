import React from "react";
import Image from "next/image";
import Link from "next/link";
import { World } from "tabler-icons-react";
import Groupfara from "../../../../public/Groupfara.png";
import Group1855 from "../../../../public/Group1855.png";
import MaskGroup from "../../../../public/MaskGroup.png";
import MaskGroup1 from "../../../../public/MaskGroup1.png";
import MaskGroup2 from "../../../../public/MaskGroup2.png";
import MaskGroup3 from "../../../../public/MaskGroup3.png";
import MaskGroup4 from "../../../../public/MaskGroup4.png";
import MaskGroup5 from "../../../../public/MaskGroup5.png";
import MaskGroup6 from "../../../../public/MaskGroup6.png";
import MaskGroup7 from "../../../../public/MaskGroup7.png";
import MaskGroup8 from "../../../../public/MaskGroup8.png";
import MaskGroup9 from "../../../../public/MaskGroup9.png";
import MaskGroup10 from "../../../../public/MaskGroup10.png";
import MaskGroup11 from "../../../../public/MaskGroup11.png";
import BankylyDashboard from "../../../../public/banklydash.png";
import Dashboard11 from "../../../../public/Dashboard11.png";
import Image458 from "../../../../public/image458.png";
import SignUp from "../../../../public/SignUp.png";
import SignIn from "../../../../public/SignIn.png";
import PasswordRecovery from "../../../../public/PasswordRecovery.png";
import One from "../../../../public/1.png";
import Two from "../../../../public/2.png";
import Three from "../../../../public/3.png";
import DashboardWallets1 from "../../../../public/DashboardWallets1.png";
import DashboardWallets2 from "../../../../public/DashboardWallets2.png";
import DashboardTrxn1 from "../../../../public/DashboardTrxn1.png";
import DashboardTrxn from "../../../../public/DashboardTrxn.png";
import DashboardNairaWallet from "../../../../public/DashboardNairaWallet.png";
import DashboardBtcWallet from "../../../../public/DashboardBTCWallet.png";
import Teller1 from "../../../../public/Teller1.png";
import Teller2 from "../../../../public/Teller2.png";
import BrokenLink from "../../../../public/brokenlink.svg";
import Map from "../../../../public/map.svg";
import People from "../../../../public/people.svg";
import Refresh from "../../../../public/refresh.svg";
import "./fara.css";
import { insight_fara } from "@/data/experience";
import Project from "../../project/Project";

function BottomFara(): JSX.Element {
  return (
    <div className="rounded-tl-none rounded-tr-none rounded-br-[30px] rounded-bl-[30px] py-6 px-5 md:px-6 lg:px-7 xl:px-7 w-full bg-BeautyDarkPurple flex flex-col space-y-8">
      <h5 className="font-LotaSemiBold font-semibold text-xl md:text-2xl lg:text-3xl xl:text-3xl leading-7 pt-8 text-center">
        Brand Overview
      </h5>

      <p className="font-LotaRegular font-normal text-base md:text-lg lg:text-xl xl:text-xl leading-8 py-2 md:py-4 lg:py-7 xl:py-7">
        Fara money previously know as Rouzo is an all-in-one financial platform
        created for the world's underserved population in the informal sector,
        Users get access to financial products in meeting their everyday needs
        through credits, savings, insurance, payments and pension in one card.{" "}
        <br />
        <br />
        Fara money is replacing bank branches with retail stores to enable
        inclusive access to financial [services.] it is built on the idea that
        unbanked population will have a better quality of life.
      </p>

      <Image src={Groupfara} alt="group" className="w-full" priority />

      <h5 className="font-LotaSemiBold font-semibold text-xl md:text-2xl lg:text-3xl xl:text-3xl leading-7 pt-12 text-center">
        The Problem
      </h5>

      <p className="font-LotaRegular font-normal text-base md:text-lg lg:text-xl xl:text-xl leading-8 py-2 md:py-4 lg:py-7 xl:py-7 mt-8">
        Based on research and findings from the previous web Application Rouzo,
        it was indicated that the rate of loan defaulters was very high, with
        reasons of health issues. the organization went back to structure a plan
        that can help loan defaulters by adding up an insurance module, and
        other features that can help users pay for their health needs, while
        they service their loan, just in the case of any health challenges.{" "}
        <br />
        <br />
        With increasing customer base, new services offered by the company and
        new business dynamics, the existing Rouzo web application had become
        over-clogged, difficult to navigate and confusing for users due to
        addition of too many features that weren’t initially taken into
        consideration when the initial user flows and design of the product was
        done. <br />
        <br />
        The existing version of the website had to be redesigned for stated
        problems along with other issues like mobile view readability, screen
        transitions to name a few.
      </p>

      <div className="flex flex-col space-y-12 md:space-y-8 lg:space-y-7 xl:space-y-7 pt-4 md:pt-6 lg:pt-8 xl:pt-8">
        <div className="flex flex-col space-y-8 md:flex md:flex-row md:justify-around md:items-center lg:flex lg:flex-row lg:justify-around lg:items-start lg:space-y-0 xl:flex xl:flex-row xl:justify-around xl:items-start xl:space-y-0 py-5">
          <div className="flex flex-col space-y-4">
            <h6 className="text-center font-LotaSemiBold font-semibold text-lg md:text-lg lg:text-2xl xl:text-2xl leading-6">
              Outdated
            </h6>
            <p className="font-LotaRegular font-normal text-center md:text-center lg:text-center xl:text-center text-base md:text-base lg:text-lg xl:text-lg leading-7">
              The components in the application is outdated
            </p>
          </div>

          <div className="flex flex-col space-y-4">
            <h6 className="text-center font-LotaSemiBold font-semibold text-lg md:text-lg lg:text-2xl xl:text-2xl leading-6">
              Not Responsive
            </h6>
            <p className="text-center font-LotaRegular font-normal text-lg leading-7">
              Their application is not optimised for mobile user <br />
              (responsive)
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col space-y-8 md:flex md:flex-row md:justify-around md:items-center lg:flex lg:flex-row lg:justify-around lg:items-start lg:space-y-0 xl:flex xl:flex-row xl:justify-around xl:items-start xl:space-y-0 py-5">
        <div className="flex flex-col space-y-4">
          <h6 className="text-center font-LotaSemiBold font-semibold text-lg md:text-lg lg:text-2xl xl:text-2xl leading-6">
            Poor User Experience
          </h6>
          <p className="text-center font-LotaRegular font-normal text-lg leading-7">
            The onboarding and authentication is tedious and <br /> confusing
          </p>
        </div>

        <div className="flex flex-col space-y-4">
          <h6 className="text-center font-LotaSemiBold font-semibold text-lg md:text-lg lg:text-2xl xl:text-2xl leading-6">
            Trust Issues
          </h6>
          <p className="text-center font-LotaRegular font-normal text-lg leading-7">
            Their application is not optimised for mobile user <br />
            (responsive)
          </p>
        </div>
      </div>

      <h5 className="font-LotaSemiBold font-semibold text-xl md:text-2xl lg:text-3xl xl:text-3xl leading-7 pt-12 text-center">
        Goals & Objectives
      </h5>

      <p className="font-LotaRegular font-normal text-base md:text-lg lg:text-xl xl:text-xl leading-8 py-2 md:py-4 lg:py-7 xl:py-7 mt-8">
        My major role in this project was to design a seamless web based
        Financial platform that can help Agent onboard their customers, save
        transfer and loan money successfully.
        <br />
        <br />
        One of the first things I did was to research the pain points faced by
        users when interacting with the existing application; by doing this, it
        was discovered that the about 80% of the users access the platform from
        their mobile phone. This discovery meant that the new design needed to
        be fully optimised for mobile (mobile responsiveness).
        <br />
        <br />
        Other goals for the design include:
      </p>

      {/* GOALS GRID */}
      <div className="grid grid-cols-1 gap-y-8 md:gap-y-5 lg:gap-y-0 xl:gap-y-0 md:grid md:grid-cols-2 lg:grid lg:grid-cols-4 xl:grid xl:grid-cols-4">
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

        <div className="lg:border-r lg:border-r-BeautyWhite xl:border-r xl:border-r-BeeautyWhite">
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

        <div className="flex flex-col space-y-5">
          <div className="mx-auto flex flex-col space-y-5">
            <Image
              src={Refresh}
              alt="group"
              className="mx-auto text-center"
              priority
            />
            <p className="w-2/3 font-LotaSemiBold text-center mx-auto">
              To improve readability of the application on web and mobile.
            </p>
          </div>
        </div>
      </div>

      <h5 className="font-LotaSemiBold font-semibold text-xl md:text-2xl lg:text-3xl xl:text-3xl leading-7 pt-12 text-center">
        The Approach
      </h5>

      <p className="font-LotaRegular font-normal text-base md:text-lg lg:text-xl xl:text-xl leading-8">
        The Basics - Starting from ground ZERO <br />
        What is a Financial Platform?
      </p>
      <p className="font-LotaRegular font-normal text-base md:text-lg lg:text-xl xl:text-xl leading-8 py-5 mt-8">
        A platform is an online service that allows financial advisers to manage
        their clients' investment portfolios. . is an online service that allows
        financial advisers to manage their clients' investment portfolios. Some
        platforms can be used by customers directly (Fara money is used by the
        Agent for the customer.) <br />
        <br />
        At the end of the 78th day of the nationwide Covid-19 lockdown, the
        feeling of uncertain economic and financial future has gripped majority
        of the citizens. This was revealed in a survey carried out by
        competitor's platform, a digital financial platform earlier this month.
        The nationwide survey of nearly 5,000 respondents threw up no surprises:
        94 per cent said they would have to be extra careful about how they
        spend their money in the next few months; 84 per cent said they were
        cutting back on spending; and 90 per cent expressed concern about their
        savings and financial future. <br />
        <br />
        One of the goals of this project is to bring inclusive services for
        everyday people in a way that will shape the future of banking in
        emerging economies.
        <br />
        <br />
      </p>

      <Image src={Group1855} alt="group" className="w-full" priority />

      <p className="font-LotaRegular font-normal text-base md:text-lg lg:text-xl xl:text-xl leading-8">
        The Fara Card - An easy way to access and use financial platforms.
        <br />
        <br />
        One of the major challenge of customer relations team during customer
        conversion is that potential users do not trust the idea of Agent savers{" "}
        <br /> <br />
        To solve this problem of trust, Fara Money has decided to create a
        customer assess card and add the feature to this version of the web
        application. The major intention of this decision was to allow users
        have full security over their money.
      </p>

      <div className="flex flex-row space-x-4 pt-9">
        <Image src={MaskGroup} alt="group" className="w-1/2" priority />
        <Image src={MaskGroup1} alt="group" className="w-1/2" priority />
      </div>

      <p className="font-LotaRegular font-normal text-base md:text-lg lg:text-xl xl:text-xl leading-8 py-5 mt-8">
        This debit card would work exactly how traditional debit cards work,
        only that instead of spending fiat currency like dollars of pounds,
        crypto will be spent. The card can be used to withdraw at ATMs, make
        payments online or at POS terminals.
      </p>

      <div className="rounded-lg px-5 py-8 bg-BeautyDark">
        <h5 className="font-LotaRegular text-xl md:text-2xl lg:text-3xl xl:text-3xl leading-7 pb-8">
          Do you use financial Platforms?
        </h5>

        <div className="grid grid-cols-1 md:grid md:grid-cols-1 lg:grid lg:grid-cols-2 xl:grid xl:grid-cols-2 gap-x-8 gap-y-12">
          <div className="rounded-lg py-6 px-4 bg-BeautyDarkPurple">
            <p className="font-LotaRegular font-normal text-base md:text-lg lg:text-lg xl:text-lg leading-7">
              IF YES: <br />
              what app do you use? <br />
              Do you identify as the banked or unbanked? <br />
              What do you look out for before choose an app for financing?
              <br />
              is there something you wish this app would do better?
              <br />
            </p>
          </div>

          <div className="rounded-lg py-6 px-4 bg-BeautyDarkPurple">
            <p className="font-LotaRegular font-normal text-base md:text-lg lg:text-lg xl:text-lg leading-7">
              IF NO:
              <br />
              Why use financial platforms?
              <br />
              Have you ever tried using any inclusive financial app?
              <br />
              Why did you stop using that app?
              <br />
              What does fininacial platform has to provide so that you would
              want to use it?
              <br />
            </p>
          </div>

          <div className="rounded-lg py-6 px-4 bg-BeautyDarkPurple relative">
            <p className="font-LotaRegular font-normal text-base md:text-lg lg:text-lg xl:text-lg leading-7">
              Yes I use financial platforms, I use piggy vest and I really love
              it because of how easy it is to save and withdraw my money.
            </p>
            <Image
              src={MaskGroup2}
              height={30}
              width={30}
              alt="mask"
              className="absolute top-left"
            />
          </div>

          <div className="rounded-lg py-6 px-4 bg-BeautyDarkPurple relative h-auto">
            <p className="font-LotaRegular font-normal text-base md:text-lg lg:text-lg xl:text-lg leading-7 w-full">
              No, I don't trust financial platforms. I'll rather keep my money
              with me or at home where it's safe.
            </p>
            <Image
              src={MaskGroup3}
              height={30}
              width={30}
              alt="mask"
              className="absolute bottom-right"
            />
          </div>

          <div className="rounded-lg py-6 px-4 bg-BeautyDarkPurple relative h-auto">
            <p className="font-LotaRegular font-normal text-base md:text-lg lg:text-lg xl:text-lg leading-7 w-full">
              Yes I use financial platforms, and use a financial app but I am
              not really happy with it because the app doesn't have a alert
              feature so most times I am unable to target a specific amount that
              was debited from my account.
            </p>
            <Image
              src={MaskGroup4}
              height={30}
              width={30}
              alt="mask"
              className="absolute top-right"
            />
          </div>

          <div className="rounded-lg py-6 px-4 bg-BeautyDarkPurple relative h-auto">
            <p className="font-LotaRegular font-normal text-base md:text-lg lg:text-lg xl:text-lg leading-7 w-full">
              Yes, I one tried using a financial platforms, but it was just too
              complex for me to understand so I gave up and never went back to
              it.
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

      <p className="font-LotaRegular font-normal text-base md:text-lg lg:text-xl xl:text-xl leading-8 py-7 mt-8">
        I created some User Personas to help uncover the different ways people
        may interface with the product or a similar product, so I can focus my
        efforts on improving the experience for real people and use cases.
      </p>

      <div className="grid grid-cols-1 md:grid md:grid-cols-1 md:justify-items-center lg:grid lg:grid-cols-2 xl:grid xl:grid-cols-2 gap-x-6">
        <div className="py-5 rounded-2xl flex flex-row md:flex md:flex-row lg:flex lg:flex-row xl:flex xl:flex-row">
          <div className="w-[35%] md:w-1/2 lg:w-1/3 xl:w-1/3 bg-BeautyLightGrey rounded-tl-2xl rounded-tr-none rounded-bl-2xl rounded-br-none px-5 py-5 flex flex-col space-y-7">
            <div className="flex flex-col space-y-3">
              <Image src={MaskGroup6} alt="group" className="w-full" priority />
              <p className="font-SofiLight font-normal text-sm md:text-base lg:text-lg xl:text-lg text-BeautyWhite">
                Madeline June
              </p>
            </div>

            <ul className="list-none">
              {["32", "trader", "married", "nigeria"].map(
                (i: string, index: any) => {
                  return (
                    <li
                      key={index + i}
                      className="font-SofiaRegular font-normal text-sm md:text-base lg:text-lg xl:text-lg capitalize py-1"
                    >
                      {i}
                    </li>
                  );
                }
              )}
            </ul>

            <ul className="list-none">
              <li className="font-SofiaRegular text-sm md:text-base lg:text-xl xl:text-xl font-normal py-2">
                Personality
              </li>
              {["family", "extrovert", "beauty", "entertainment"].map(
                (i: string, index: any) => {
                  return (
                    <li
                      key={index + i}
                      className="font-SofiaRegular font-normal text-sm md:text-base lg:text-lg xl:text-lg capitalize py-1"
                    >
                      {i}
                    </li>
                  );
                }
              )}
            </ul>

            <ul className="list-none pb-7">
              <li className="font-SofiaRegular text-sm md:text-base lg:text-xl xl:text-xl font-normal py-2">
                Brands
              </li>
              {["facebook", "whatsapp"].map((i: string, index: any) => {
                return (
                  <li
                    key={index + i}
                    className="font-SofiaRegular font-normal text-sm md:text-base lg:text-lg xl:text-lg capitalize py-1"
                  >
                    {i}
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="w-[65%] md:w-1/2 lg:w-2/3 xl:w-2/3 bg-BeautyDark rounded-tr-2xl rounded-tl-none rounded-bl-none rounded-br-2xl px-5 py-5 space-y-8 flex flex-col">
            <div className="flex flex-col space-y-4">
              <h6 className="font-SofiRegular font-normal text-base text-BeautyWhite">
                Bio
              </h6>
              <p className="font-SofiaLight text-sm md:text-base lg:text-lg xl:text-lg font-light">
                Madeline populary know as “Madam M”is a trader in ilupeju
                market,she was been in business for 15years and sent all her
                children abroad for studies.she saves her access cash at home
                since she does’nt trust anyone with her money.
              </p>
            </div>

            <div className="flex flex-col space-y-4">
              <h6 className="font-SofiRegular font-normal text-base text-BeautyWhite">
                Goals
              </h6>
              <p className="font-SofiaLight text-sm md:text-base lg:text-lg xl:text-lg font-light">
                She wants to save money easily
              </p>
            </div>

            <div className="flex flex-col space-y-4">
              <h6 className="font-SofiRegular font-normal text-base text-BeautyWhite">
                Frustrations
              </h6>
              <p className="font-SofiaLight text-sm md:text-base lg:text-lg xl:text-lg font-light">
                Trust
                <br />
                Unwise investment choices
                <br />
                Inexperience in finance inclusion <br /> service
              </p>
            </div>

            <div className="flex flex-col space-y-4">
              <h6 className="font-SofiRegular font-normal text-base text-BeautyWhite">
                Motivations
              </h6>
              <p className="font-SofiaLight text-sm md:text-base lg:text-lg xl:text-lg font-light">
                Security of Funds
                <br />
                Special offers
                <br />
                Savings over expenses
                <br />
              </p>
            </div>
          </div>
        </div>

        <div className=" py-5 rounded-2xl flex flex-row md:flex md:flex-row lg:flex lg:flex-row xl:flex xl:flex-row">
          <div className="w-[35%] md:w-1/2 lg:w-1/3 xl:w-1/3 bg-BeautyLightGrey rounded-tl-2xl rounded-tr-none rounded-bl-2xl rounded-br-none px-5 py-5 space-y-5">
            <div className="flex flex-col space-y-3">
              <Image src={MaskGroup7} alt="group" className="w-full" priority />
              <p className="font-SofiRegular font-normal text-sm md:text-base lg:text-lg xl:text-lg text-BeautyWhite">
                Femi Ajala
              </p>
            </div>

            <ul className="list-none">
              {["31", "auto dealer", "single", "lagos"].map(
                (i: string, index: any) => {
                  return (
                    <li
                      key={index + i}
                      className="font-SofiaRegular font-normal text-sm md:text-base lg:text-lg xl:text-lg capitalize py-1"
                    >
                      {i}
                    </li>
                  );
                }
              )}
            </ul>

            <ul className="list-none">
              <li className="font-SofiaRegular text-sm md:text-base lg:text-xl xl:text-xl font-normal py-2">
                Personality
              </li>
              {["business", "extrovert", "luxury", "sport"].map(
                (i: string, index: any) => {
                  return (
                    <li
                      key={index + i}
                      className="font-SofiaRegular font-normal text-sm md:text-base lg:text-lg xl:text-lg capitalize py-1"
                    >
                      {i}
                    </li>
                  );
                }
              )}
            </ul>

            <ul className="list-none pb-7">
              <li className="font-SofiaRegular text-sm md:text-base lg:text-xl xl:text-xl font-normal py-2">
                Brands
              </li>
              {["facebook", "toyota", "whatsapp"].map(
                (i: string, index: any) => {
                  return (
                    <li
                      key={index + i}
                      className="font-SofiaRegular font-normal text-sm md:text-base lg:text-lg xl:text-lg capitalize py-1"
                    >
                      {i}
                    </li>
                  );
                }
              )}
            </ul>
          </div>
          <div className="w-[65%] md:w-1/2 lg:w-2/3 xl:w-2/3 bg-BeautyDark rounded-tr-2xl rounded-tl-none rounded-bl-none rounded-br-2xl px-5 py-5 space-y-5">
            <div className="flex flex-col space-y-4">
              <h6 className="font-SofiRegular font-normal text-base text-BeautyWhite">
                Bio
              </h6>
              <p className="font-SofiaLight text-sm md:text-base lg:text-lg xl:text-lg font-light">
                Femi is an Auto Dealer in Lagos, his favourite brands are
                Toyota, Instagram and Whatsapp He saves his excess cash in the
                bank and he is scared of agency banking. Femi has for sometime
                been considering and alternative form of banking.
              </p>
            </div>

            <div className="flex flex-col space-y-4">
              <h6 className="font-SofiRegular font-normal text-base text-BeautyWhite">
                Goals
              </h6>
              <p className="font-SofiaLight text-sm md:text-base lg:text-lg xl:text-lg font-light">
                He wants to have a stable income and a good and reliable
                platform to savehis excess cash.
              </p>
            </div>

            <div className="flex flex-col space-y-4">
              <h6 className="font-SofiRegular font-normal text-base text-BeautyWhite">
                Frustrations
              </h6>
              <p className="font-SofiaLight text-sm md:text-base lg:text-lg xl:text-lg font-light">
                Loss of money
                <br />
                Unwise investment choices
                <br />
                Fraud
              </p>
            </div>

            <div className="flex flex-col space-y-4">
              <h6 className="font-SofiRegular font-normal text-base text-BeautyWhite">
                Motivations
              </h6>
              <p className="font-SofiaLight text-sm md:text-base lg:text-lg xl:text-lg font-light">
                Security of Funds
                <br />
                Brand integrity
                <br />
                Luxury
                <br />
              </p>
            </div>
          </div>
        </div>
      </div>

      <h5 className="font-LotaSemiBold font-semibold text-xl md:text-2xl lg:text-3xl xl:text-3xl leading-7 pt-12 text-center">
        Competitive Analysis - Compareing Exisiting solutions
      </h5>

      <p className="font-LotaRegular font-normal text-base md:text-lg lg:text-xl xl:text-xl leading-8 py-7 mt-8">
        Bankly
        <br />
        <br /> user dashboard is a really good, it gives the user a lot of
        information and insights on their account. But a major challenge with
        this dashboard is that it is difficult to access agent dashboard
      </p>

      <div className="rounded-lg px-5 py-8 bg-BeautyDark">
        <div className="mx-auto flex flex-col space-y-5">
          <h6 className="text-center font-GraphikLight text-lg font-light">
            Bankly dashboard
          </h6>
          <Image
            src={BankylyDashboard}
            alt="group"
            className="mx-auto text-center"
            priority
          />
        </div>
      </div>

      <h5 className="font-LotaSemiBold font-semibold text-xl md:text-2xl lg:text-3xl xl:text-3xl leading-7 pt-12 text-center">
        User Flow
      </h5>

      <p className="font-LotaRegular font-normal text-base md:text-lg lg:text-xl xl:text-xl leading-8 py-7 mt-8 w-full">
        The application is designed so that users can easily find every feature
        and use it intuitively. It takes only a few clicks to go from homepage
        to the transaction pages, wallet and other important screens. The layout
        design is also transparent and user friendly.
      </p>

      <div className="rounded-lg px-5 py-8 bg-BeautyDark flex flex-col space-y-4">
        <h6 className="text-center font-GraphikLight text-lg font-light">
          User Flow
        </h6>
        <div className="flex flex-col space-y-8 md:flex md:flex-col md:space-y-8 md:items-center lg:flex lg:flex-row lg:space-x-4 lg:justify-center lg:items-center lg:space-y-0 xl:flex xl:flex-row xl:space-x-4 xl:justify-center xl:items-center xl:space-y-0">
          <Image src={One} alt="group" className="" priority />
          <Image src={Two} alt="group" className="" priority />
          <Image src={Three} alt="group" className="" priority />
        </div>
      </div>

      <h5 className="font-LotaSemiBold font-semibold text-xl md:text-2xl lg:text-3xl xl:text-3xl leading-7 pt-12 text-center">
        Main Insights & Takeaways
      </h5>

      <p className="font-LotaRegular font-normal text-base md:text-lg lg:text-xl xl:text-xl leading-8 py-7 mt-8 w-full">
        After my research, I was able to note down some important points that
        will guide how the designs will be produced. Some of the things I learnt
        are:
      </p>

      <div className="rounded-lg px-5 py-5 bg-BeautyDark flex flex-col space-y-4 px-8">
        <ul className="py-2 list-disc">
          {insight_fara.map((i: string, index: any) => {
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

      <h5 className="font-LotaSemiBold font-semibold text-xl md:text-2xl lg:text-3xl xl:text-3xl leading-7 pt-12 text-center">
        Design Process
      </h5>

      <p className="font-LotaRegular font-normal text-base md:text-lg lg:text-xl xl:text-xl leading-8 py-7 mt-8 w-full">
        I started competitive analysis by trying competitor apps and reading app
        reviews, conducted user interviews with existing users and potential
        users. I also created user personas to get further insights into the
        users.
        <br />
        <br />
        I then went on to studying the existing app-specific flows and
        interactions to accurately understand the product itself and the reasons
        behind <br />
        <br />
        I then started comparing the existing flows with the new design
        requirements, goals and functionality needed for a crypto payment web
        application and collated this information into a user flow diagram on
        Miro that was then represented in the web app’s wireframes on Figma.
        These wireframes then became the main reference for me and helped me
        share preliminary ideas for design with the Patricia team. The
        wireframes also served as the perfect guidelines to build new
        app-specific flows and interactions.
        <br />
        <br />I then used these wireframes to create a high fidelity version of
        the design and at this stage, most of the work was done.
      </p>

      <h5 className="font-LotaSemiBold font-semibold text-xl md:text-2xl lg:text-3xl xl:text-3xl leading-7 pt-12 text-center">
        Low Fidelity Wireframes
      </h5>

      <p className="font-LotaRegular font-normal text-base md:text-lg lg:text-xl xl:text-xl leading-8 py-7 mt-8 w-full">
        The wireframes created helped to quickly test the interface ideas and
        generate feedback from stakeholders.
      </p>

      <div className="rounded-lg px-5 py-8 bg-BeautyDark flex flex-col space-y-4">
        <h6 className="text-center font-GraphikLight text-sm font-light">
          User Flow
        </h6>
        <div className="mx-auto grid grid-cols-2 gap-3">
          <Image src={MaskGroup8} alt="group" className="" priority />
          <Image src={MaskGroup9} alt="group" className="" priority />
          <Image src={MaskGroup10} alt="group" className="" priority />
          <Image src={MaskGroup11} alt="group" className="" priority />
        </div>
      </div>

      <h5 className="font-LotaSemiBold font-semibold text-xl md:text-2xl lg:text-3xl xl:text-3xl leading-7 pt-12 text-center">
        The Solution
      </h5>

      <div className="rounded-lg px-5 py-8 bg-BeautyDark flex flex-col space-y-4 lg:hidden xl:hidden">
        <div className="flex flex-col space-y-5 md:flex md:flex-row md:flex-wrap md:justify-center md:space-x-3 md:space-y-5  lg:flex lg:flex-row lg:px-4 lg:flex-wrap lg:justify-center lg:space-x-3 lg:space-y-0 xl:flex xl:flex-row xl:px-4 xl:py-3 xl:flex-wrap xl:justify-center xl:space-x-3 xl:space-y-0">
          <div>
            <Image src={SignIn} alt="group" className="" priority />
          </div>
          <div>
            <Image src={PasswordRecovery} alt="group" className="" priority />
          </div>
          <div>
            <Image src={SignUp} alt="group" className="mt-4" priority />
          </div>
        </div>
      </div>

      <div className="rounded-lg px-5 py-8 bg-BeautyDark hidden md:hidden lg:flex lg:flex-col lg:space-y-1 xl:flex xl:flex-col xl:space-y-1">
        <div className="lg:flex lg:flex-row lg:justify-center lg:space-x-3 lg:space-y-0 xl:flex xl:flex-row xl:px-4 xl:py-3 xl:flex-wrap xl:justify-center xl:space-x-3 xl:space-y-0">
          <div>
            <Image src={SignIn} alt="group" className="" priority />
          </div>
          <div>
            <Image src={PasswordRecovery} alt="group" className="" priority />
          </div>
        </div>
        <div className="flex flex-row items-center justify-center">
          <Image src={SignUp} alt="group" className="mt-4" priority />
        </div>
      </div>

      <h5 className="font-LotaSemiBold font-semibold text-xl md:text-2xl lg:text-3xl xl:text-3xl leading-7 pt-12">
        Dashboard
      </h5>

      <p className="font-LotaRegular font-normal text-base md:text-lg lg:text-xl xl:text-xl leading-8 py-7 mt-8 w-full">
        The user experience in the application is designed so that the agent,
        will be able to use the full functionality. <br />
        <br />
        Based on feedback, I ensured the wallet balance, Loan, Savings,
        Withdrawal and Transaction History are accessible from the dashboard.
      </p>

      <div className="rounded-lg px-5 py-8 bg-BeautyDark flex flex-col space-y-4">
        <Image
          src={Dashboard11}
          alt="group"
          className="mx-auto text-center"
          priority
        />
      </div>

      <h5 className="font-LotaSemiBold font-semibold text-xl md:text-2xl lg:text-3xl xl:text-3xl leading-7 pt-12">
        Wallets
      </h5>

      <p className="font-LotaRegular font-normal text-base md:text-lg lg:text-xl xl:text-xl leading-8 py-7 mt-8 w-full">
        The major wallets is the Agent wallets. One major need for the agent was
        ease of accessibility of funds and to fulfil this customer’s need, the
        request for overdrafts or topup are accessible through USSD or Bank
        Receipt
      </p>
      <div className="rounded-lg px-5 py-8 bg-BeautyCream flex flex-col space-y-6 md:flex md:flex-col md:space-y-6 lg:flex lg:flex-row lg:space-x-4 lg:justify-between lg:space-y-0 xl:flex xl:flex-row xl:space-x-4 xl:justify-between xl:space-y-0">
        <Image
          src={DashboardWallets1}
          alt="group"
          className="w-full md:w-full lg:w-1/2 xl:w-1/2"
          priority
        />
        <Image
          src={DashboardWallets2}
          alt="group"
          className="w-full md:w-full lg:w-1/2 xl:w-1/2"
          priority
        />
      </div>

      <h5 className="font-LotaSemiBold font-semibold text-xl md:text-2xl lg:text-3xl xl:text-3xl leading-7 pt-12">
        Transactions
      </h5>

      <p className="font-LotaRegular font-normal text-base md:text-lg lg:text-xl xl:text-xl leading-8 py-7 mt-8 w-full">
        Transaction page provides insights of financial history to the agent and
        shows a record of their transactions over a period of time.
      </p>

      <div className="rounded-lg px-5 py-8 bg-BeautyDark flex flex-col space-y-6 md:flex md:flex-col md:space-y-6 lg:flex lg:flex-row lg:space-x-4 lg:justify-center lg:space-y-0 xl:flex xl:flex-row xl:space-x-4 xl:justify-center xl:space-y-0">
        <Image
          src={DashboardTrxn}
          alt="group"
          className="w-full md:w-full lg:w-1/2 xl:w-1/2"
          priority
        />
        {/* <Image src={DashboardTrxn1} alt="group" className="w-full md:w-full lg:w-1/2 xl:w-1/2" priority /> */}
      </div>

      <h5 className="font-LotaSemiBold font-semibold text-xl md:text-2xl lg:text-3xl xl:text-3xl leading-7 pt-12">
        Fara Loans
      </h5>

      <p className="font-LotaRegular font-normal text-base md:text-lg lg:text-xl xl:text-xl leading-8 py-7 mt-8 w-full">
        For an agent to access loans for his or her customer a T&C document was
        created to ensure that the agent has carried out a proper KYC on that
        particular customer before requesting for loan.
      </p>

      <div className="rounded-lg px-5 py-8 bg-BeautyDark flex flex-col space-y-6 md:flex md:flex-col md:space-y-6 lg:flex lg:flex-row lg:space-x-4 lg:justify-between lg:space-y-0 xl:flex xl:flex-row xl:space-x-4 xl:justify-between xl:space-y-0">
        <Image
          src={DashboardBtcWallet}
          alt="group"
          className="w-full md:w-full lg:w-1/2 xl:w-1/2"
          priority
        />
        <Image
          src={DashboardNairaWallet}
          alt="group"
          className="w-full md:w-full lg:w-1/2 xl:w-1/2"
          priority
        />
      </div>

      <h5 className="font-LotaSemiBold font-semibold text-xl md:text-2xl lg:text-3xl xl:text-3xl leading-7 pt-12">
        Teller
      </h5>

      <p className="font-LotaRegular font-normal text-base md:text-lg lg:text-xl xl:text-xl leading-8 py-7 mt-8 w-full">
        These are people incharge of funding the agent wallet,every agent is
        assigned to a teller,for disbursment.
      </p>

      <div className="rounded-lg px-5 py-8 bg-BeautyDark flex flex-col space-y-6 md:flex md:flex-col md:space-y-6 lg:flex lg:flex-row lg:space-x-4 lg:justify-between lg:space-y-0 xl:flex xl:flex-row xl:space-x-4 xl:justify-between xl:space-y-0">
        <Image
          src={Teller1}
          alt="group"
          className="w-full md:w-full lg:w-1/2 xl:w-1/2"
          priority
        />
        <Image
          src={Teller2}
          alt="group"
          className="w-full md:w-full lg:w-1/2 xl:w-1/2"
          priority
        />
      </div>

      <div className="flex flex-col space-y-3 lg:flex lg:flex-row lg:items-start lg:justify-between lg:space-x-8 lg:space-y-0 xl:flex xl:flex-row xl:items-start xl:justify-between xl:space-x-8 xl:space-y-0">
        <h5 className="w-1/2 md:w-1/2 lg:w-1/4 xl:w-1/4 font-LotaRegular font-normal text-2xl leading-7">
          The Impact
        </h5>
        <div className="flex flex-col space-y-3 font-LotaThin font-thin text-lg leading-7">
          The Fara Money web app was appreciated by the client, particularly due
          to the care taken to ensure workflows and processes were interesting
          and intuitive to Financial users <br />
          <br />
          The uncertainty and fears around financial inclusive platforms is
          gradually fading off as new users are provided instructional materials
          to educate then on what financial platforms is and how to use the app.
          <br />
          <br />
          The app was functional without compromising on a modern, attractive
          touch. This harmony created an app that was loved by both existing and
          new users for its visual and functional appeal.
        </div>
      </div>

      <div className="lg:flex lg:flex-row lg:items-center lg:justify-between lg:space-x-3 xl:flex xl:flex-row xl:items-center xl:justify-between xl:space-x-3 mt-7 mb-8 pt-8 pb-8">
        <div className="flex flex-row items-center justify-start w-4/5 md:w-4/5 lg:w-1/4 xl:w-1/4">
          <h5 className="font-LotaRegular font-normal text-2xl leading-7">
            Link & References
          </h5>
        </div>
        <div className="w-full flex flex-col space-y-6 pt-3 md:w-full md:flex md;flex-col md:space-y-6 md:pt-3 lg:w-3/4 lg:flex lg:flex-row lg:items-center lg:justify-between lg:space-x-8 lg:space-y-0 lg:pt-0 xl:w-3/4 xl:flex xl:flex-row xl:items-center xl:justify-between xl:space-x-8 xl:space-y-0 xl:pt-0">
          <div className="bg-BeautyDark rounded-2xl flex flex-row items-center px-6 h-14 space-x-3 w-full md:w-full lg:w-1/2 xl:w-1/2">
            <World size={24} strokeWidth={1.5} color={"#00F0FF"} />
            <a
              href="/https://www.bankly.ng/"
              className="font-GraphikLight font-thin underline text-lg cursor-pointer"
              target="_blank"
            >
              https://www.bankly.ng/
            </a>
          </div>
          <div className="bg-BeautyDark rounded-2xl flex flex-row items-center px-6 h-14 space-x-3 w-full md:w-full lg:w-1/2 xl:w-1/2">
            <World size={24} strokeWidth={1.5} color={"#00F0FF"} />
            <a
              href="https://www.myfara.org/"
              className="font-GraphikLight font-thin underline text-lg cursor-pointer"
              target="_blank"
            >
              https://www.myfara.org/
            </a>
          </div>
        </div>
      </div>

      {/* <div className="bg-BeautyNextProjectBatchBill py-8 px-8 rounded-xl">
        <Link
          href="/portfolio/batchbill"
          className="cursor-pointer underline text-white text-2xl font-normal font-SofiaRegular"
        >
          View next project
        </Link>

        <div className="flex flex-row items-end justify-between">
          <div className="flex flex-col space-y-2 w-1/2 justify-self-end">
            <p className="text-white text-xs font-normal font-SofiaLight">
              USER RESEARCH • UX DESIGN • UI DESIGN • DESIGN SYSTEM
            </p>
            <h5 className="text-white font-normal text-8xl font-SofiaRegular">
              Batchbills
            </h5>
          </div>
          <div className="w-1/2 rounded-lg bg-BeautyDeepBlue px-2 py-2">
            <Image src={Image458} alt="group" className="w-full" priority />
          </div>
        </div>
      </div> */}

      <Project navigateTo={"/portfolio/batchbill"} background={"bg-BeautyNextProjectBatchBill"} title={"Batchbills"} image={Image458} cardBg={"bg-[#4A47FF96]"}/>
    </div>
  );
}

export default BottomFara;
