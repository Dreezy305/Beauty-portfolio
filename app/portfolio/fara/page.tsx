import React from "react";
import TopFara from "@/app/components/Portfolio/Fara/TopFara";
import BottomFara from "@/app/components/Portfolio/Fara/BottomFara";
import PortfolioLayout from "@/app/components/Portfolio/Layout/Layout";

function Fara(): JSX.Element {
  return (
    <PortfolioLayout>
      <>
        <TopFara />
        <BottomFara />
      </>
    </PortfolioLayout>
  );
}

export default Fara;
