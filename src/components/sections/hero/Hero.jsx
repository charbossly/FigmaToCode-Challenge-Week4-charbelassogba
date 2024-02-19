import images from "../../../constants/images";
import Socials from "./socials";

export default function Hero() {
  return (
    <section className="flex  flex-col xl:flex-row min-h-screen justify-center xl:justify-start items-center xl:bg-hero bg-no-repeat bg-right-top  mt-32 mr-12 xl:mr-0  md:mt-64 xl:my-0 ">
      <div className="flex items-center justify-center m-8 w-full xl:hidden">
        <img src={images.Hero} alt="" />
      </div>
      <div className="flex gap-y-6 flex-col mx-4 lg:mx-0 xl:w-1/2 mt-12">
        <h2 className="text-t24 lg:text-t42 capitalize">
          Hello I{"'"}am{" "}
          <span className="font-extrabold">
            Evren Shah. <br /> Frontend{" "}
            <span className="font-steelfish text-t24 lg:text-t42">
              Developer
            </span>
          </span>{" "}
          <br /> Based In
          <span className="font-extrabold"> India</span>
        </h2>
        <p className="mb-16 text-16 lg:text-t18 text-grayUi leading-6 font-medium">
          I{"'"}m Evren Shah Lorem Ipsum is simply dummy text of the printing
          and typesetting industry. Lorem Ipsum has been the industry{"'"}s
          standard <br /> dummy text ever since the 1500s, when an unknown
          printer took a <br />
          galley of type and scrambled it to specimen book.
        </p>
        <div className="flex gap-4  gap-x-4 xl:gap-x-8 mb-16 xl:mb-0">
          <Socials />
        </div>
      </div>
    </section>
  );
}
