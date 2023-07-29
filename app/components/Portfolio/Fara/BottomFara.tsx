import React from "react";
import Image from "next/image";
import Groupfara from "../../../../public/Groupfara.png";
import Group1855 from "../../../../public/Group1855.png";
import MaskGroup from "../../../../public/MaskGroup.png";
import MaskGroup1 from "../../../../public/MaskGroup1.png";
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

      <div className="rounded-lg px-5 py-6">
        <h5 className="font-LotaRegular">Do you use financial Platforms?</h5>
      </div>
    </div>
  );
}

export default BottomFara;
