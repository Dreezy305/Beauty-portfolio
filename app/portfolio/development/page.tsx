import React from "react";
import PortfolioLayout from "@/app/components/Portfolio/Layout/Layout";
import Tab from "@/app/components/development/Tab";

function Development({
  activeTab = "unista",
  onTabClick,
  children,
}: {
  activeTab?: string;
  onTabClick?: () => void;
  children?: React.ReactNode;
}): JSX.Element {
  
  return (
    <PortfolioLayout>
      <div className="py-6 px-0 md:px-6 lg:px-7 xl:px-7 mt-8">
        <Tab activeTab={activeTab} children={<>{children}</>} />
      </div>
    </PortfolioLayout>
  );
}

export default Development;
