import Header from "./components/Header/Header";
import Link from "next/link";
import "./globals.css";

export default function Home() {
  const Moon = () => {
    return (
      <Link
        href="/portfolio"
        className="moon bg-BeautyLightBlue flex flex-row items-center justify-center font-LotaSemiBold cursor-pointer rounded-tl-[42px] rounded-tr-[29px] rounded-br-[46px] rounded-bl-[214px] w-[269px] h-[252px] absolute right-0 bottom-full"
      >
        <p className="font-LotaSemiBold font-semibold text-2xl leading-8 text-black">
          Portfolio
        </p>
      </Link>
    );
  };

  const Crescent = () => {
    return (
      <Link
        href={"/knowmore"}
        className="bg-BeautyLightYellow flex flex-row items-center justify-center font-LotaSemiBold cursor-pointer rounded-tl-[126px] rounded-tr-[126px] rounded-br-[0px] rounded-bl-[126px] w-[269px] h-[252px] absolute left-[25%] mt-[-125px]"
      >
        <p className="font-LotaSemiBold font-semibold text-2xl leading-8 text-black">
          Know More
        </p>
      </Link>
    );
  };

  const Biscuit = () => {
    return (
      <Link
        href="/about"
        className="bg-BeautyLightBrown flex flex-row items-center justify-center font-LotaSemiBold cursor-pointer rounded-[58px] w-[188px] h-[350px] absolute bottom-0 right-0 top-full mt-12"
      >
        <p className="font-LotaSemiBold font-semibold text-2xl leading-8 text-black">
          About
        </p>
      </Link>
    );
  };
  return (
    <main className="min-h-screen overflow-hidden">
      <Header type="landing"/>
      <section className="" id="landingpage">
        <div className="container mx-auto relative mt-36">
          <div className="flex flex-row items-center justify-between">
            {/* LEFT */}
            <div className="flex flex-col w-1/2 space-y-8">
              <h4 className="">
                <span className="italic text-7xl font-thin">a</span>&nbsp;&nbsp;
                <span className="font-LotaSemiBold text-7xl font-semibold leading-[104px">
                  product designer,
                  <br /> a minimalist.
                </span>
              </h4>
              <p className="font-SofiaRegular font-normal text-xl leading-8">
                My name is Ohia Beauty, i'm a minimalist designer, with an{" "}
                <br /> adept in communicating design decisions effectively, and{" "}
                <br /> advocating for the user's perspective throughout the
                design
                <br /> process, collaborating and cross-communicating within{" "}
                <br /> diverse teams and stakeholders to ensure a smooth
                transition <br /> from design to implementation.
              </p>
            </div>
            {/* RIGHT */}
            <div className="w-1/2 relative">
              <Moon />
              <Crescent />
              <Biscuit />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
