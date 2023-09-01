import React from "react";
import PortfolioLayout from "@/app/components/Portfolio/Layout/Layout";
import Tab from "@/app/components/development/Tab";


function Development({
  activeTab = "unista",
  onTabClick,
  children
}: {
  activeTab?: string;
  onTabClick?: () => void;
  children?: React.ReactNode
}): JSX.Element {
 
// rounded-[30px] bg-BeautyDarkPurple
  return (
    <PortfolioLayout>
      <div className=" py-6 px-7 mt-8">
      <Tab activeTab={activeTab} children={<>{children}</>}/>
      </div>
    </PortfolioLayout>
  );
}

export default Development;
