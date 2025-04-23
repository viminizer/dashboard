import MiddleSection from "@/libs/components/MiddleSection";
import RightSection from "@/libs/components/RightSection";
import SideMenu from "@/libs/components/SideMenu";


export default function Home() {
  return (
    <div className="w-full h-screen flex gap-10">
      <SideMenu />
      <MiddleSection />
      <RightSection />
    </div>
  );
}
