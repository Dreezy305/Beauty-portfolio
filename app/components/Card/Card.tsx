import { design, research, strength, tools } from "@/data/experience";
import React from "react";

function Card(): JSX.Element {
  return (
    <div className="rounded-[30px] bg-BeautyDarkPurple h-auto px-5 md:px-8 lg:px-12 xl:px-12 py-10 grid grid-cols-1 gap-y-8 md:grid md:grid-cols-3 md:gap-x-5 md:gap-y-0 lg:grid lg:grid-cols-4 lg:gap-x-8 lg:gap-y-0 xl:grid xl:grid-cols-4 xl:gap-x-8 xl:gap-y-0">
      <div className="flex flex-col space-y-4">
        <h6 className="font-LotaMedium font-medium text-2xl">Design</h6>
        <ul className="list-none flex flex-col space-y-7 pt-5">
          {design?.map((i) => {
            return (
              <li key={i} className="font-SofiaRegular font-normal text-xl">
                {i}
              </li>
            );
          })}
        </ul>
      </div>

      <div className="flex flex-col space-y-4">
        <h6 className="font-LotaMedium font-medium text-2xl">Research</h6>
        <ul className="list-none flex flex-col space-y-7 pt-5">
          {research?.map((i) => {
            return (
              <li key={i} className="font-SofiaRegular font-normal text-xl">
                {i}
              </li>
            );
          })}
        </ul>
      </div>

      <div className="flex flex-col space-y-4">
        <h6 className="font-LotaMedium font-medium text-2xl">Strength</h6>
        <ul className="list-none flex flex-col space-y-7 pt-5">
          {strength?.map((i) => {
            return (
              <li key={i} className="font-SofiaRegular font-normal text-xl">
                {i}
              </li>
            );
          })}
        </ul>
      </div>

      <div className="flex flex-col space-y-4">
        <h6 className="font-LotaMedium font-medium text-2xl">Tools</h6>
        <ul className="list-none flex flex-col space-y-7 pt-5">
          {tools?.map((i) => {
            return (
              <li key={i} className="font-SofiaRegular font-normal text-xl">
                {i}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default Card;
