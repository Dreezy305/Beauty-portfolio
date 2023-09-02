import React from "react";
import Development from "../page";
import TopWoodcore from "@/app/components/Portfolio/woodcore/TopWoodcore";
import BottomWoodcore from "@/app/components/Portfolio/woodcore/BottomWoodcore";

function Woodcore() {
  return (
    <Development activeTab="woodcore">
      <TopWoodcore />
      <BottomWoodcore/>
    </Development>
  );
}

export default Woodcore;
