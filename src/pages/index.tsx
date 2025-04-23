import MiddleSection from "@/libs/components/MiddleSection";
import RightSection from "@/libs/components/RightSection";
import SideMenu from "@/libs/components/SideMenu";


export default function Home() {
  return (
    <div className="w-[1440px] h-[960px] flex gap-15  mt-3 rounded-4xl bg-[#2b2b2b] shadow-xl shadow-black/50">
      <SideMenu />
      <MiddleSection />
      <RightSection />
    </div>
  );
}
