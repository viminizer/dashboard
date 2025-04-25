import Image from "next/image";
import { CustomLineChart } from "./Chart";
const MiddleSection = () => {
  return (
    <div className="w-full">
      <div
        id="mid-top"
        className="flex justify-between w-[50%] pt-5 items-center"
      >
        <div className="w-[291px] h-[53px] bg-[#323232] rounded-[30px] flex items-center gap-5 ">
          <Image
            src="img/icons/mid-search.svg"
            alt="Search"
            width={24}
            height={24}
            className="ml-3"
          />
          <p className="text-[#545454] text-[16px]">Search here...</p>
        </div>
        <p className="text-[32px]" style={{ fontFamily: "Qwigley, cursive" }}>
          Dashboard
        </p>
      </div>
      <div className="w-full mt-2 mt-[30px] flex flex-col gap-5">
        <p className="text-[32px]">Hello, Uroos</p>
        <div className="flex gap-7 flex-col">
          <div id="cards" className="flex justify-between">
            <div
              id="card"
              className='relative w-[300px] h-[160px] bg-[#0bf4c8] rounded-4xl text-black flex justify-center items-center bg-[url("/img/icons/bg-rect-repeat.svg")] bg-repeat bg-[length:150px_100px]'
            >
              <div className="w-[80%] h-[70%] flex flex-col justify-between ">
                <h3 className="text-[20px]">Weekly Balance</h3>
                <h1 className="text-[36px]">$20K</h1>
                <h4 className="text-[14px] underline cursor-pointer">
                  View entire list
                </h4>
              </div>
              <Image
                src="img/icons/wallet.svg"
                alt=""
                width={136}
                height={110}
                className="absolute right-3 bottom-3"
              />
            </div>
            <div
              id="card"
              className='relative w-[300px] h-[160px] bg-[#fad85d] rounded-4xl text-black flex justify-center items-center bg-[url("/img/icons/bg-rect-repeat.svg")] bg-repeat bg-[length:200px_100px]'
            >
              <div className="w-[80%] h-[70%] flex flex-col justify-between ">
                <h3 className="text-[20px]">Orders In Iine</h3>
                <h1 className="text-[36px]">750</h1>
                <h4 className="text-[14px] underline cursor-pointer">
                  View entire list
                </h4>
              </div>
              <Image
                src="img/icons/wallet-phone.svg"
                alt=""
                width={136}
                height={110}
                className="absolute right-3 bottom-3"
              />
            </div>
            <div
              id="card"
              className='relative w-[300px] h-[160px] bg-[#f2a0ff] rounded-4xl text-black flex justify-center items-center bg-[url("/img/icons/bg-rect-repeat.svg")] bg-repeat bg-[length:150px_80px]'
            >
              <div className="w-[80%] h-[70%] flex flex-col justify-between ">
                <h3 className="text-[20px]">New Clients</h3>
                <h1 className="text-[36px]">150</h1>
                <h4 className="text-[14px] underline cursor-pointer">
                  View entire list
                </h4>
              </div>
              <Image
                src="img/icons/woman.svg"
                alt=""
                width={136}
                height={110}
                className="absolute right-3 bottom-0"
              />
            </div>
          </div>
          <div className="flex w-full justify-between">
            <div className="w-[625px] h-[296px] bg-[#161717] rounded-3xl">
              <CustomLineChart />
            </div>
            <div>calendar</div>
          </div>
          <div>sec3</div>
        </div>
      </div>
    </div>
  );
};
export default MiddleSection;
