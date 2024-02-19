import Title from "@components/Common/title";
import images from "../../../constants/images";
import Project from "./project";

export default function index() {
  const projects = [
    {
      position: "01",
      title: "Crypto Screener Application",
      image: images.Project1,
      description:
        "I'm Evren Shah Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard        dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to specimen book.",
    },
    {
      position: "01",
      title: "Crypto Screener Application",
      image: images.Project2,
      description:
        "I'm Evren Shah Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard        dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to specimen book.",
    },
    {
      position: "01",
      title: "Crypto Screener Application",
      image: images.Project3,
      description:
        "I'm Evren Shah Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard        dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to specimen book.",
    },
    {
      position: "01",
      title: "Crypto Screener Application",
      image: images.Project4,
      description:
        "I'm Evren Shah Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard        dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to specimen book.",
    },
  ];
  return (
    <section id="project">
      <Title title={"My projects"} type={"dark"} />
      <div>
        {projects.map((proj, index) => {
          return <Project project={proj} key={index} index={index} />;
        })}
      </div>
    </section>
  );
}
