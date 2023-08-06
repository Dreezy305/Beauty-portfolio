import React from "react";

function BottomBatchBill(): JSX.Element {
  return (
    <div className="rounded-tl-none rounded-tr-none rounded-br-[30px] rounded-bl-[30px] py-6 px-7 w-full bg-BeautyDarkPurple flex flex-col space-y-8">
      <h5 className="font-LotaSemiBold font-semibold text-3xl leading-7 pt-8 text-center">
        Brand Overview
      </h5>

      <p className="font-LotaRegular font-normal text-xl leading-8 py-7">
      Batchbills intends to simplify the process of paying bills ranging from airtime, data, electricity, cable tv and other bills that can be paid currently in Nigeria in the interim.<br/><br/>

In it’s next release, Batchbills will be looking into expanding into paying bills that are available in other countries outside of Nigeria as well.<br/><br/>

I collaborated with Batchbill team to design an on-demand payment service web application.
      </p>
    </div>
  );
}

export default BottomBatchBill;
