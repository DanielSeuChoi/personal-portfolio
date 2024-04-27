
import HomePage from "@/components/HomePage";
import Intro from "@/components/Intro";
import Projects from "@/components/Projects/Projects";
import SkillExp from "@/components/SkillExp";
import Project from "@/components/Projects/Project";
import AllProject from "@/components/Projects/AllProject";
import Divider from "@/components/ui/Divider";
import Links from "@/components/Links";
import Footer from "@/components/Footer";


export default function Home() {
  return (
    <main
      className="flex flex-col h-full mx-auto justify-center items-center overflow-x-hidden ">
      <HomePage />
      <Intro />
      <SkillExp />
      <AllProject />
      <Links />
      <Footer />
    </main>
  );
}
