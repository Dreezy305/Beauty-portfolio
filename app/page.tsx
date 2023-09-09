import Header from "./components/Header/Header";
import Link from "next/link";
import "./globals.css";

export default function Home() {
  const Moon = () => {
    return (
      <Link
        href="/portfolio"
        className="moon bg-BeautyLightBlue flex flex-row items-center justify-center font-LotaSemiBold cursor-pointer rounded-tl-[42px] rounded-tr-[29px] rounded-br-[46px] rounded-bl-[214px]  md:rounded-tl-[42px] md:rounded-tr-[29px] md:rounded-br-[46px] md:rounded-bl-[214px] lg:rounded-tl-[42px] lg:rounded-tr-[29px] lg:rounded-br-[46px] lg:rounded-bl-[214px] w-[140px] md:w-[269px] lg:w-[269px] xl:w-[269px] h-[130px] md:h-[252px] lg:h-[252px] xl:h-[252px] absolute right-[50px] md:right-[200px] lg:right-0 xl:right-0  bottom-[-45px] md:bottom-[10px] lg:bottom-full xl:bottom-full rotate-[330deg] md:rotate-[330deg] lg:rotate-0 xl:rotate-0"
      > 
        <p className="font-LotaSemiBold font-semibold text-base md:text-xl lg:text-2xl xl:text-2xl leading-8 text-black">
          Portfolio
        </p>
      </Link>
    );
  };

  const Crescent = () => {
    return (
      <Link
        href={"/knowmore"}
        className="bg-BeautyLightYellow flex flex-row items-center justify-center font-LotaSemiBold cursor-pointer rounded-tl-[69px] rounded-tr-[69px] rounded-br-[0px] rounded-bl-[69px] md:rounded-tl-[126px] md:rounded-tr-[126px] md:rounded-br-[0px] md:rounded-bl-[126px]  lg:rounded-tl-[126px] lg:rounded-tr-[126px] lg:rounded-br-[0px] lg:rounded-bl-[126px] xl:rounded-tl-[126px] xl:rounded-tr-[126px] xl:rounded-br-[0px] xl:rounded-bl-[126px]  w-[140px] md:w-[269px] lg:w-[269px] xl:w-[269px] h-[130px] md:h-[252px] lg:h-[252px] xl:h-[252px] absolute knowmorej left-0 md:left-0 lg:left-[150px] xl:left-[185px] mt-5 md:mt-[-75px] lg:mt-[-100px] xl:mt-[-100px]"
      >
        <p className="font-LotaSemiBold font-semibold text-base md:text-xl lg:text-2xl xl:text-2xl leading-8 text-black">
          Know More
        </p>
      </Link>
    );
  };

  const Biscuit = () => {
    return (
      <Link
        href="/about"
        className="bg-BeautyLightBrown flex flex-row items-center justify-center font-LotaSemiBold cursor-pointer rounded-[32px] md:rounded-[32px] lg:rounded-[58px] xl:rounded-[58px] w-[104px] md:w-[136px] lg:w-[188px] xl:w-[188px] h-[170px] md:h-[280px] lg:h-[275px] xl:h-[275px] rotate-90 md:rotate-90 lg:rotate-0 xl:rotate-0 absolute bottom-0 right-[19px] md:right-[150px] lg:right-0 xl:right-0 top-[12px] md:top-full lg:top-full xl:top-full mt-0 md:mt-[-39px] lg:mt-12 xl:mt-12 z-50"
      >
        <p className="font-LotaSemiBold font-semibold text-base md:text-lg lg:text-2xl xl:text-2xl leading-8 text-black rotate-[270deg] md:rotate-[270deg] lg:rotate-0">
          About 
        </p>
      </Link>
    );
  };

  return (
    <main className="">
      <Header type="landing" />
      <section className="overflow-hidden pb-20 md:pb-20 lg:pb-40 xl:pb-40" id="landingpage">
        <div className="container mx-auto relative mt-8 mb-12 pb-20 md:pb-20 lg:pb-40 xl:pb-40 px-0 md:px-5 lg:px-5 xl:px-5 md:mt-12 lg:mt-36 xl:mt-36">
          <div className="flex flex-col md:flex md:flex-col lg:flex lg:flex-row lg:items-center lg:justify-between xl:flex xl:flex-row xl:justify-between">
            {/* LEFT */}
            <div className="flex flex-col w-full md:w-4/5 lg:w-1/2 xl:w-1/2 space-y-8">
              <h4 className="flex flex-col text-left space-y-1.5">
                <span className="text-xl md:text-3xl lg:text-5xl xl:text-6xl font-thin flex flex-row leading-8">
                  <span className="italic text-white">a</span>&nbsp;
                  <span className="font-LotaSemiBold font-semibold text-white">
                    product designer,
                  </span>
                </span>
               
                <span className="font-LotaSemiBold font-semibold leading-8 text-xl md:text-3xl lg:text-5xl xl:text-6xl text-white">
                  a minimalist.
                </span>
              </h4>

              <p className="font-SofiaRegular font-normal text-base md:text-lg lg:text-xl xl:text-xl leading-8 text-white">
                My name is Ohia Beauty, i'm a minimalist designer, with an adept
                in communicating design decisions effectively, and advocating
                for the user's perspective throughout the design process,
                collaborating and cross-communicating within diverse teams and
                stakeholders to ensure a smooth transition from design to
                implementation.
              </p>
            </div>
            {/* RIGHT */}
            <div className="w-full md:w-full lg:w-1/2 xl:w-1/2 mt-36 md:mt-96 lg:mt-0 xl:mt-0 relative">
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
