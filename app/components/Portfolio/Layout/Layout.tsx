import React from "react";
import Link from "next/link";
import { ArrowDownCircle } from "tabler-icons-react";
import BeautyLayout from "@/app/components/Layout/Beauty";
import TopFara from "@/app/components/Portfolio/Fara/TopFara";
import BottomFara from "@/app/components/Portfolio/Fara/BottomFara";

function PortfolioLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <BeautyLayout location="others" active="portfolio">
      <section className="overflow-hidden">
        <div className="md:container md:mx-auto lg:container lg:mx-auto xl:container xl:mx-auto px-5 relative pt-6">
          <Link
            href="/portfolio"
            className="flex flex-row items-center justify-start space-x-3 px-0 md:px-0 lg:px-0 xl:px-0"
          >
            <ArrowDownCircle
              size={32}
              strokeWidth={2}
              color={"#fff"}
              className="rotate-90"
            />{" "}
            <span>Go Back</span>
          </Link>

          <div className="rounded-[30px] h-auto">{children}</div>
        </div>
      </section>
    </BeautyLayout>
  );
}

export default PortfolioLayout;
