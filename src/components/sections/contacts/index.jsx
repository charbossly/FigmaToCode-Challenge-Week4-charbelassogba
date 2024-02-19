import Socials from "../hero/socials";

export default function index() {
  return (
    <section
      id="contactme"
      className="grid grid-cols-1 lg:grid-cols-2 items-center justify-center lg:justify-start gap-x-4 py-36"
    >
      <div className="grid-cols-1">
        <form action="" method="post" className="mx-4 lg:mx-0">
          <input
            type="text"
            placeholder="Your name"
            className="my-2 border-2 border-blackUi dark:border-white dark:text-white p-4 text-blackUi placeholder-grayUi rounded-xl w-full lg:w-[82%]"
          />
          <input
            type="text"
            placeholder="Email"
            className="my-2 border-2 border-blackUi p-4 text-blackUi dark:border-white dark:text-white placeholder-grayUi rounded-xl w-full lg:w-[82%]"
          />
          <input
            type="text"
            placeholder="Your website(If exists)"
            className="my-2 border-2 border-blackUi p-4 text-blackUi dark:border-white dark:text-white placeholder-grayUi rounded-xl w-full lg:w-[82%]"
          />
          <textarea
            className="my-2 border-2 border-blackUi p-4 text-blackUi dark:border-white dark:text-white placeholder-grayUi rounded-xl w-full lg:w-[82%]"
            name=""
            placeholder="how can i help?"
            id=""
            cols="30"
            rows="4"
          ></textarea>

          <div className="mt-2 flex flex-col items-start lg:flex-row gap-x-10">
            <a
              href=""
              className="primary-btn p-2  lg:flex text-t20 items-center"
            >
              Get In Touch
            </a>
            <div className="flex gap-4 lg:gap-0 my-4 lg:my-0">
              <Socials />
            </div>
          </div>
        </form>
      </div>
      <div className="grid-cols-1 gap-y-4 mx-6 lg:mx-0">
        <h2 className="font-extrabold text-t24 lg:text-t42 text-blackUi dark:text-white leading-16">
          Let’s{" "}
          <span className="font-steelfish text-t24 lg:text-t42">talk</span> for
          Something special
        </h2>
        <p className="text-grayUi text-t16 lg:text-t18 my-4">
          I seek to push the limits of creativity to create high - engaging,
          user-friendly, and memorable interactive experiences
        </p>
        <p className="font-bold text-t18 lg:text-t28 text-blackUi dark:text-white my-4">
          Youremail@gmail.com
        </p>
        <p className="font-bold text-t18 lg:text-t28 text-blackUi dark:text-white">
          1234567890
        </p>
      </div>
    </section>
  );
}
