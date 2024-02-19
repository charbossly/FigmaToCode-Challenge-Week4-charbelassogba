import LayoutLight from "@layouts/LayoutLight";
import Skills from "@components/sections/skills";
import MyExperience from "@components/sections/myExperience";
import AboutMe from "@components/sections/aboutMe";
import Hero from "@components/sections/hero/Hero";
import LayoutDark from "../layouts/LayoutDark";
import Projects from "@components/sections/projects";
import Testimonials from "@components/sections/testimonial";
import Contacts from "@components/sections/contacts";

export default function Home() {
  return (
    <div className="flex flex-col gap-y-4">
      <LayoutLight>
        <Hero />
        <Skills />
      </LayoutLight>
      <LayoutDark>
        <MyExperience />
      </LayoutDark>
      <LayoutLight>
        <AboutMe />
      </LayoutLight>
      <LayoutDark>
        <Projects />
      </LayoutDark>
      <LayoutLight>
        <Testimonials />
        <Contacts />
      </LayoutLight>
    </div>
  );
}
