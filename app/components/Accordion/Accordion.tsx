"use client"; // This is a client component 👈🏽

import React, { useState } from "react";
import { Plus, Minus } from "tabler-icons-react";

type Props = {
  data: any;
};

function Accordion({ data }: Props): JSX.Element {
  const [show, setShow] = useState<boolean>(false);
  return (
    <div className="rounded-[30px] bg-BeautyDarkPurple h-auto px-12 py-6">
      <div className="flex flex-row items-center justify-end">
        {show === true ? (
          <Minus
            size={32}
            strokeWidth={2}
            color={"#9AA9B180"}
            className="cursor-pointer"
            onClick={() => setShow(false)}
          />
        ) : (
          <Plus
            size={32}
            strokeWidth={2}
            color={"#9AA9B180"}
            className="cursor-pointer"
            onClick={() => setShow(!show)}
          />
        )}
      </div>
      <div className="flex flex-col w-full">
        <h5 className="w-11/12 font-SofiaMedium font-medium text-3xl leading-9">
          {data?.role}
        </h5>
        <p className="font-SofiaRegular font-normal text-lg  leading-7 pt-4">
          {data?.duration}
        </p>

        {show && (
          <>
            {data?.subtitle && (
              <p className="font-SofiaRegular font-normal text-lg  leading-7 pt-4">
                {data?.subtitle}
              </p>
            )}
            <ul className="list-disc w-5/6 pt-5">
              {data?.achievements &&
                data?.achievements.map((i: string, index: any) => {
                  return (
                    <>
                      {" "}
                      <li
                        className="font-SofiaRegular font-normal text-lg leading-8 py-2"
                        key={index}
                      >
                        {i}
                      </li>
                    </>
                  );
                })}
            </ul>
          </>
        )}
      </div>
    </div>
  );
}

export default Accordion;
