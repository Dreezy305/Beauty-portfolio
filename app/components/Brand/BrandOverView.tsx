import React from 'react'

function BrandOverview():JSX.Element {
  return (
    <div>
        <h5 className="font-LotaSemiBold font-semibold text-xl md:text-2xl lg:text-3xl xl:text-3xl leading-7 pt-8 text-center relative brandOverviewLgGreen hidden md:hidden lg:block xl:block">
        Brand Overview
      </h5>

      <h5 className="font-LotaSemiBold font-semibold text-xl md:text-2xl lg:text-3xl xl:text-3xl leading-7 pt-8 text-center relative brandOverviewMdGreen hidden md:block lg:hidden xl:hidden">
        Brand Overview
      </h5>

      <h5 className="font-LotaSemiBold font-semibold text-xl md:text-2xl lg:text-3xl xl:text-3xl leading-7 pt-8 text-center relative brandOverviewSmGreen  md:hidden lg:hidden xl:hidden">
        Brand Overview
      </h5>
    </div>
  )
}

export default BrandOverview