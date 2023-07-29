import React from "react";
import Image from "next/image";
import Groupfara from "../../../../public/Groupfara.png";
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
    </div>
  );
}

export default BottomFara;
