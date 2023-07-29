import React from "react";
import Link from "next/link";
import { ArrowDownCircle } from "tabler-icons-react";
import BeautyLayout from "@/app/components/Layout/Beauty";
import TopFara from "@/app/components/Portfolio/Fara/TopFara";

function Fara(): JSX.Element {
  return (
    <BeautyLayout location="others" active="portfolio">
      <section className="overflow-hidden">
        <div className="container mx-auto relative pt-6">
          <Link
            href="/portfolio"
            className="flex flex-row items-center justify-start space-x-3"
          >
            <ArrowDownCircle
              size={32}
              strokeWidth={2}
              color={"#fff"}
              className="rotate-90"
            />{" "}
            <span>Go Back</span>
          </Link>

          <div className="rounded-[30px] h-auto">
            <TopFara/>
          </div>
        </div>
      </section>
    </BeautyLayout>
  );
}

export default Fara;
