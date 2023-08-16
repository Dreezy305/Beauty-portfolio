import React from "react";
import PortfolioLayout from "@/app/components/Portfolio/Layout/Layout";
import BottomShuut from "@/app/components/Portfolio/Shuut/BottomShuut";
import TopShuut from "@/app/components/Portfolio/Shuut/TopShuut"

function Shuut(): JSX.Element {
  return (
    <PortfolioLayout>
      <>
      <TopShuut/>
      <BottomShuut/>
      </>
    </PortfolioLayout>
  );
}

export default Shuut;
