import images from "@constants/images";

export default function index({ project, index, colorTheme }) {
  return (
    <div className="flex flex-col lg:flex-row gap-5 lg:gap-x-12  mx-4 lg:mx-0 my-16">
      <div
        className={`w-full lg:w-1/2 relative rounded-2xl overflow-hidden ${
          index % 2 == 0 ? "order-1" : "order-2"
        }`}
      >
        <img
          className="h-[450px] w-full lg:h-[500px] object-cover"
          src={project.image}
          alt="man"
        />
      </div>
      <div
        className={`w-full  lg:w-1/2 flex flex-col justify-center ${
          index % 2 == 0 ? "lg:order-2" : "lg:order-1"
        }`}
      >
        <h2 className="text-t24 lg:text-t42 my-4 mt-0">
          <span className="font-extrabold">{project.position}</span>
        </h2>
        <h2 className="text-t24 lg:text-t36 my-4 mt-0">
          <span className="font-extrabold">{project.title}</span>
        </h2>
        <p className="my-4 text-grayUi text-t18">{project.description}</p>
        {colorTheme !== "dark" ? (
          <img src={images.Export} className="w-6 h-6 cursor-pointer" alt="" />
        ) : (
          <img src={images.Share} className="w-6 h-6 cursor-pointer" alt="" />
        )}
      </div>
    </div>
  );
}
