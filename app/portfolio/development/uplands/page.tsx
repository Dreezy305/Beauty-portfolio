import React from "react";
import Development from "../page";
import TopUplands from "@/app/components/Portfolio/uplands/TopUplands";
import BottomUplands from "@/app/components/Portfolio/uplands/BottomUplands";

function Uplands() {
  return (
    <Development activeTab="uplands">
      <TopUplands />
      <BottomUplands />
    </Development>
  );
}

export default Uplands;
