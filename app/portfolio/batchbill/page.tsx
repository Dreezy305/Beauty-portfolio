import React from "react";
import PortfolioLayout from "@/app/components/Portfolio/Layout/Layout";
import TopBatchBill from "@/app/components/Portfolio/BatchBill/TopBatchBill";

function BatchBill(): JSX.Element {
  return (
    <PortfolioLayout>
      <>
      <TopBatchBill/>
      </>
    </PortfolioLayout>
  );
}

export default BatchBill;
