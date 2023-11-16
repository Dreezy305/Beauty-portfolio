import React from "react";
// import Link from "next/link";
import BeautyLayout from "../components/Layout/Beauty";
// import { ArrowNarrowRight } from "tabler-icons-react";
import "./portfolio.css";
import CaseStudies from "../components/case-studies/CaseStudies";
import CaseStudiesMobile from "../components/case-studies/CaseStudiesMobile";

export default function Portfolio(): JSX.Element {
  return (
    <BeautyLayout active="portfolio" className={"section-flower"}>
      <section className="overflow-hidden ">
        <div className="md:container md:mx-auto lg:container lg:mx-auto xl:container xl:mx-auto px-5 pt-6 pb-12 md:pb-12 lg:pb-0 xl:pb-0 md:pt-6 lg:pt-24 xl:pt-32">
          <div className="flex flex-col space-y-7 md:space-y-7 lg:space-y-14 xl:space-y-20 text-left">
            {/* CASE STUDIES */}
            <div className="flex flex-col space-y-6 md:space-y-6 lg:space-y-8 xl:space-y-10 w-full md:w-4/5 lg:w-1/3 xl:w-1/3">
              <h5 className="font-LotaBold font-bold text-2xl md:text-3xl lg:text-6xl xl:text-7xl leading-6 md:leading-8 lg:leading-10 xl:leading-10">
                Case Studies
              </h5>

              <p className="font-SofiaLight font-light text-xl leading-8 md:leading-8 lg:leading-9 xl:leading-9">
                Oh yes, i've been busy. Here's a glimpse of what i've been
                working on.
              </p>
            </div>

            {/* CARD GROUP */}
            <CaseStudies />
            <CaseStudiesMobile />
          </div>
        </div>
      </section>
    </BeautyLayout>
  );
}
