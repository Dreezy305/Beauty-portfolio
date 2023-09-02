import React from "react";
import Development from "../page";
import TopUnista from "@/app/components/unista/TopUnista";
import BottomUnista from "@/app/components/unista/BottomUnista";

function Unista() {
  return (
    <Development activeTab="unista">
      <TopUnista />
      <BottomUnista />
    </Development>
  );
}

export default Unista;
