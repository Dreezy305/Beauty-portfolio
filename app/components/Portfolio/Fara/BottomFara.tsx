import React from "react";
import Image from "next/image";
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
import "./fara.css";

function BottomFara(): JSX.Element {
  return (
    <div className="rounded-tl-none rounded-tr-none rounded-br-[30px] rounded-bl-[30px] py-6 px-7 w-full bg-BeautyDarkPurple flex flex-col space-y-8">
      <h5 className="font-LotaSemiBold font-semibold text-3xl leading-7 pt-8 text-center">
        Brand Overview
      </h5>

      <p className="font-LotaRegular font-normal text-xl leading-8 py-7">
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

      <h5 className="font-LotaSemiBold font-semibold text-3xl leading-7 pt-12 text-center">
        The Problem
      </h5>

      <p className="font-LotaRegular font-normal text-xl leading-8 py-7 mt-8">
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

      <div className="flex flex-col space-y-7 pt-8">
        <div className="flex flex-row justify-around py-5">
          <div className="flex flex-col space-y-4">
            <h6 className="text-center font-LotaSemiBold font-semibold text-2xl leading-6">
              Outdated
            </h6>
            <p className="font-LotaRegular font-normal text-lg leading-7">
              The components in the application is outdated
            </p>
          </div>

          <div className="flex flex-col space-y-4">
            <h6 className="text-center font-LotaSemiBold font-semibold text-2xl leading-6">
              Not Responsive
            </h6>
            <p className="text-center font-LotaRegular font-normal text-lg leading-7">
              Their application is not optimised for mobile user <br />
              (responsive)
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-row justify-around py-5">
        <div className="flex flex-col space-y-4">
          <h6 className="text-center font-LotaSemiBold font-semibold text-2xl leading-6">
            Poor User Experience
          </h6>
          <p className="text-center font-LotaRegular font-normal text-lg leading-7">
            The onboarding and authentication is tedious and <br /> confusing
          </p>
        </div>

        <div className="flex flex-col space-y-4">
          <h6 className="text-center font-LotaSemiBold font-semibold text-2xl leading-6">
            Trust Issues
          </h6>
          <p className="text-center font-LotaRegular font-normal text-lg leading-7">
            Their application is not optimised for mobile user <br />
            (responsive)
          </p>
        </div>
      </div>

      <h5 className="font-LotaSemiBold font-semibold text-3xl leading-7 pt-12 text-center">
        Goals & Objectives
      </h5>

      <p className="font-LotaRegular font-normal text-xl leading-8 py-7 mt-8">
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

      <h5 className="font-LotaSemiBold font-semibold text-3xl leading-7 pt-12 text-center">
        The Approach
      </h5>

      <p className="font-LotaRegular font-normal text-xl leading-8">
        The Basics - Starting from ground ZERO <br />
        What is a Financial Platform?
      </p>
      <p className="font-LotaRegular font-normal text-xl leading-8 py-5 mt-8">
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

      <p className="font-LotaRegular font-normal text-xl leading-8">
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

      <p className="font-LotaRegular font-normal text-xl leading-8 py-5 mt-8">
        This debit card would work exactly how traditional debit cards work,
        only that instead of spending fiat currency like dollars of pounds,
        crypto will be spent. The card can be used to withdraw at ATMs, make
        payments online or at POS terminals.
      </p>

      <div className="rounded-lg px-5 py-8 bg-BeautyDark">
        <h5 className="font-LotaRegular text-3xl leading-7 pb-8">
          Do you use financial Platforms?
        </h5>

        <div className="grid grid-cols-2 gap-x-8 gap-y-12">
          <div className="rounded-lg py-6 px-4 bg-BeautyDarkPurple">
            <p className="font-LotaRegular font-normal text-lg leading-7">
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
            <p className="font-LotaRegular font-normal text-lg leading-7">
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
            <p className="font-LotaRegular font-normal text-lg leading-7">
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
            <p className="font-LotaRegular font-normal text-lg leading-7 w-full">
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
            <p className="font-LotaRegular font-normal text-lg leading-7 w-full">
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
            <p className="font-LotaRegular font-normal text-lg leading-7 w-full">
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

      <h5 className="font-LotaSemiBold font-semibold text-3xl leading-7 pt-12 text-center">
        User Persona
      </h5>

      <p className="font-LotaRegular font-normal text-xl leading-8 py-7 mt-8">
        I created some User Personas to help uncover the different ways people
        may interface with the product or a similar product, so I can focus my
        efforts on improving the experience for real people and use cases.
      </p>

      <div className="grid grid-cols-2 gap-x-6">
        <div className=" py-5 rounded-2xl flex flex-row">
          <div className="w-1/3 bg-BeautyLightGrey rounded-tl-2xl rounded-tr-none rounded-bl-2xl rounded-br-none px-5 py-5 flex flex-col space-y-7">
            <div className="flex flex-col space-y-3">
              <Image src={MaskGroup6} alt="group" className="w-full" priority />
              <p className="font-SofiRegular font-normal text-lg text-BeautyWhite">
                Madeline June
              </p>
            </div>

            <ul className="list-none">
              {["32", "trader", "married", "nigeria"].map(
                (i: string, index: any) => {
                  return (
                    <li
                      key={index + i}
                      className="font-SofiaRegular font-normal text-lg capitalize py-1"
                    >
                      {i}
                    </li>
                  );
                }
              )}
            </ul>

            <ul className="list-none">
              <li className="font-SofiaRegular text-xl font-normal py-2">
                Personality
              </li>
              {["family", "extrovert", "beauty", "entertainment"].map(
                (i: string, index: any) => {
                  return (
                    <li
                      key={index + i}
                      className="font-SofiaRegular font-normal text-lg capitalize py-1"
                    >
                      {i}
                    </li>
                  );
                }
              )}
            </ul>

            <ul className="list-none pb-7">
              <li className="font-SofiaRegular text-xl font-normal py-2">
                Brands
              </li>
              {["facebook", "whatsapp"].map((i: string, index: any) => {
                return (
                  <li
                    key={index + i}
                    className="font-SofiaRegular font-normal text-lg capitalize py-1"
                  >
                    {i}
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="w-2/3 bg-BeautyDark rounded-tr-2xl rounded-tl-none rounded-bl-none rounded-br-2xl px-5 py-5 space-y-5">
            <h6 className="font-SofiRegular font-normal text-lg text-BeautyWhite">
              Bio
            </h6>
          </div>
        </div>

        <div className=" py-5 rounded-2xl flex flex-row">
          <div className="w-1/3 bg-BeautyLightGrey rounded-tl-2xl rounded-tr-none rounded-bl-2xl rounded-br-none px-5 py-5 space-y-5">
            <div className="flex flex-col space-y-3">
              <Image src={MaskGroup7} alt="group" className="w-full" priority />
              <p className="font-SofiRegular font-normal text-lg text-BeautyWhite">
                Femi Ajala
              </p>
            </div>

            <ul className="list-none">
              {["31", "auto dealer", "single", "lagos"].map(
                (i: string, index: any) => {
                  return (
                    <li
                      key={index + i}
                      className="font-SofiaRegular font-normal text-lg capitalize py-1"
                    >
                      {i}
                    </li>
                  );
                }
              )}
            </ul>

            <ul className="list-none">
              <li className="font-SofiaRegular text-xl font-normal py-2">
                Personality
              </li>
              {["business", "extrovert", "luxury", "sport"].map(
                (i: string, index: any) => {
                  return (
                    <li
                      key={index + i}
                      className="font-SofiaRegular font-normal text-lg capitalize py-1"
                    >
                      {i}
                    </li>
                  );
                }
              )}
            </ul>

            <ul className="list-none pb-7">
              <li className="font-SofiaRegular text-xl font-normal py-2">
                Brands
              </li>
              {["facebook", "toyota", "whatsapp"].map((i: string, index: any) => {
                return (
                  <li
                    key={index + i}
                    className="font-SofiaRegular font-normal text-lg capitalize py-1"
                  >
                    {i}
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="w-2/3 bg-BeautyDark rounded-tr-2xl rounded-tl-none rounded-bl-none rounded-br-2xl px-5 py-5 space-y-5">
            <h6 className="font-SofiRegular font-normal text-lg text-BeautyWhite">
              Bio
            </h6>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BottomFara;