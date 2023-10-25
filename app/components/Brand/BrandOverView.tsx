import React from "react";

function BrandOverview({text="Brand Overview", mdClassName="brandOverviewMdGreen", smClassName="brandOverviewSmGreen", lgClassName="brandOverviewLgGreen"}:{text?:string; mdClassName?:string; smClassName?:string;lgClassName?:string}): JSX.Element {
  return (
    <div>
      <h5 className={`font-LotaSemiBold font-semibold text-xl md:text-2xl lg:text-3xl xl:text-3xl leading-7 pt-8 text-center relative ${lgClassName} hidden md:hidden lg:block xl:block`}>
        {text}
      </h5>

      <h5 className={`font-LotaSemiBold font-semibold text-xl md:text-2xl lg:text-3xl xl:text-3xl leading-7 pt-8 text-center relative ${mdClassName} hidden md:block lg:hidden xl:hidden`}>
        {text}
      </h5>

      <h5 className={`font-LotaSemiBold font-semibold text-xl md:text-2xl lg:text-3xl xl:text-3xl leading-7 pt-8 text-center relative ${smClassName}  md:hidden lg:hidden xl:hidden`}>
        {text}
      </h5>
    </div>
  );
}

export default BrandOverview;
