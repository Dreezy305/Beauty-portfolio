import React from "react";
import PortfolioLayout from "@/app/components/Portfolio/Layout/Layout";
import TopBatchBill from "@/app/components/Portfolio/BatchBill/TopBatchBill";
import BottomBatchBill from "@/app/components/Portfolio/BatchBill/BottomBatchBill";

function BatchBill(): JSX.Element {
  return (
    <PortfolioLayout>
      <>
      <TopBatchBill/>
      <BottomBatchBill/>
      </>
    </PortfolioLayout>
  );
}

export default BatchBill;
