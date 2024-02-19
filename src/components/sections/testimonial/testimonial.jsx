import images from "../../../constants/images";

export default function testimonial({ testimonial, index }) {
  return (
    <div
      className={`p-16 grid-cols-1 flex gap-6 text-center flex-col rounded-xl items-center justify-center shadow-lg ${
        index % 2 == 1
          ? "bg-blackUi text-white dark:bg-white dark:text-blackUi"
          : ""
      }`}
    >
      <div className="relative">
        <img src={testimonial.image} alt="" />
        <img
          className={`absolute bottom-0  right-0 rounded-full p-2 ${
            index % 2 == 0
              ? "bg-blackUi text-white dark:bg-white dark:text-blackUi"
              : "bg-white dark:bg-blackUi"
          }`}
          src={images.Quote}
          alt=""
        />
      </div>
      <p className="text-grayUi font-bold">{testimonial.description}</p>
      <hr className="w-1/2 border-2 border-blackUi dark:border-white" />
      <h4 className="text-t22 font-semibold">{testimonial.name}</h4>
      <p className="text-grayUi font-bold capitalize">{testimonial.position}</p>
    </div>
  );
}
