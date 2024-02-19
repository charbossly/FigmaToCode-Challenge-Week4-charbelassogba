import Title from "@components/Common/title";
import Experience from "./experience";
import images from "../../../constants/images";

export default function index() {
  const myExperiences = [
    {
      logo: images.Youtube,
      position: "Lead Software Engineer at Google",
      duration: "Nov 2019-Present",
      description:
        "As a Senior Software Engineer at Google, I played a pivotal role in developing innovative solutions for Google's core search  algorithms. Collaborating with a dynamic team of engineers, I contributed to the enhancement of search accuracy and efficiency, optimizing user experiences for millions of users worldwide.",
    },

    {
      logo: images.Youtube,
      position: "Lead Software Engineer at Google",
      duration: "Nov 2019-Present",
      description:
        "As a Senior Software Engineer at Google, I played a pivotal role in developing innovative solutions for Google's core search  algorithms. Collaborating with a dynamic team of engineers, I contributed to the enhancement of search accuracy and efficiency, optimizing user experiences for millions of users worldwide.",
    },
    {
      logo: images.Youtube,
      position: "Lead Software Engineer at Google",
      duration: "Nov 2019-Present",
      description:
        "As a Senior Software Engineer at Google, I played a pivotal role in developing innovative solutions for Google's core search  algorithms. Collaborating with a dynamic team of engineers, I contributed to the enhancement of search accuracy and efficiency, optimizing user experiences for millions of users worldwide.",
    },
  ];

  return (
    <div>
      <Title title={"My experience"} type={"dark"} />
      <div className="flex flex-col gap-8 text-white  dark:text-blackUi pb-16">
        {myExperiences.map((exp, index) => {
          return <Experience exp={exp} key={index} index={index} />;
        })}
      </div>
    </div>
  );
}
