import Image from 'next/image'
const MiddleSection = () => {
  return (
    <div className="w-full">
      <div id="mid-top" className="flex justify-between w-[50%] pt-5 items-center">
        <div className="w-[291px] h-[53px] bg-[#323232] rounded-[30px] flex items-center gap-5 ">
          <Image src="img/icons/mid-search.svg" alt="Search" width={24} height={24} className='ml-3' />
          <p className="">Search here...</p>
        </div>
        <h3>Dashboard</h3>
      </div>
      MiddleSection

    </div>)
}
export default MiddleSection;
