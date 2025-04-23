import Image from "next/image";
import { useState } from "react";
const SideMenu = () => {
  const [active, setActive] = useState("home")
  return (
    <div className="bg-[#242424] w-[100px] h-full flex flex-col gap-[40px] pt-5 items-center rounded-tl-4xl rounded-bl-4xl">
      <Image src="img/icons/menu-logo.svg" alt="menu-icon" width={47} height={47} className="" />
      {active === 'home' ? (
        <div className="flex items-center justify-center bg-[#161717] w-[85%] h-[40px] rounded-md mr-3 ml-3">
          <Image src="img/icons/menu-home.svg" alt="menu-icon" width={24} height={24} />
        </div>
      ) : (
        <div className="flex items-center justify-center bg-transparent w-[85%] h-[40px] rounded-md mr-3 ml-3">
          <Image src="img/icons/menu-home.svg" alt="menu-icon" width={24} height={24} />
        </div>
      )
      }
      <Image src="img/icons/menu-list.svg" alt="menu-icon" width={24} height={24} />
      <Image src="img/icons/menu-msg.svg" alt="menu-icon" width={24} height={24} />
      <Image src="img/icons/menu-up.svg" alt="menu-icon" width={24} height={24} />
      <Image src="img/icons/menu-person.svg" alt="menu-icon" width={24} height={24} />
      <Image src="img/icons/menu-setting.svg" alt="menu-icon" width={24} height={24} />
    </div>)
}
export default SideMenu;
