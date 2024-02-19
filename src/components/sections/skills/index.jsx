import images from "@constants/images";
import Title from "../../Common/title";
import Skill from "./Skill";

export default function Skills() {
  const skills = [
    {
      name: "Git",
      image: images.Git,
    },
    {
      name: "JavaScript",
      image: images.JavaScript,
    },
    {
      name: "Saas/Scss",
      image: images.Sass,
    },
    {
      name: "NestJs",
      image: images.Nest,
    },
    {
      name: "Storybook",
      image: images.Storybook,
    },
    {
      name: "NestJs",
      image: images.Nest,
    },
    {
      name: "Git",
      image: images.Git,
    },
    {
      name: "Storybook",
      image: images.Storybook,
    },

    {
      name: "Socket.io",
      image: images.Socket,
    },
    {
      name: "JavaScript",
      image: images.JavaScript,
    },
  ];

  return (
    <div id="skills">
      <Title title={"My Skills"} type={"light"} />
      <div className="grid grid-cols-2 md:grid-cols-3 mx-4 lg:mx-0 lg:grid-cols-5 grid-rows-2 gap-8 lg:gap-16 my-20">
        {skills.map((skill, index) => {
          return <Skill key={index} name={skill.name} image={skill.image} />;
        })}
      </div>
    </div>
  );
}
