import images from "../../../constants/images";
import Title from "../../Common/title";
import Testimonial from "./testimonial";

export default function index() {
  const testimonials = [
    {
      image: images.Testimonial,
      name: "Evren Shah",
      description:
        "I recently had to jump on 10  different calls across eight different countries to find the right owner.",
      position: "designer",
    },
    {
      image: images.Testimonial2,
      name: "Flora Sheen",
      description:
        "I recently had to jump on 10  different calls across eight different countries to find the right owner.",
      position: "designer",
    },
    {
      image: images.Testimonial,
      name: "Evren Shah",
      description:
        "I recently had to jump on 10  different calls across eight different countries to find the right owner.",
      position: "designer",
    },
  ];
  return (
    <section>
      <Title title={"My Skills"} type={"light"} />
      <div className="grid grid-cols-1 mx-6 lg:mx-0 lg:grid-cols-3 gap-x-8 gap-y-8 lg:gap-y-0 my-4">
        {testimonials.map((testimonial, index) => {
          return (
            <Testimonial testimonial={testimonial} key={index} index={index} />
          );
        })}
      </div>
    </section>
  );
}
