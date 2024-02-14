
import HomePage from "@/components/HomePage";
import Intro from "@/components/Intro";
import Projects from "@/components/Projects";
import SkillExp from "@/components/SkillExp";


export default function Home() {
  return (
    <main
      className="flex flex-col h-full mx-auto justify-center items-center overflow-x-hidden ">
      <HomePage />
      <Intro />
      <SkillExp />
      <Projects />
    </main>
  );
}
