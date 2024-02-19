import images from "@constants/images";

export default function index() {
  return (
    <div
      id="aboutme"
      className="flex flex-col gap-y-10 lg:gap-0 lg:flex-row my-16"
    >
      <div className="w-full px-6 lg:px-0 lg:w-2/5 relative">
        <img
          className="w-[300px] mx-auto lg:mx-0 md:w-auto lg:ml-6 mt-6"
          src={images.Man2}
          alt="man"
        />
        <div className="absolute border-4 rounded-xl w-[350px] h-[350px] md:w-[500px] md:h-[500px] border-blackUi dark:border-white  -translate-x-[50%] lg:translate-x-0 left-[50%] lg:left-0 top-0"></div>
      </div>
      <div className="w-full lg:w-3/5 px-4 lg:pl-16 lg:pr-8">
        <h2 className="text-t42 my-4 mt-0">
          About <span className="font-extrabold">Me</span>
        </h2>
        <p className="my-4 text-grayUi text-t18">
          I{"'"}m a passionate, self proclaimed designer who specializes in full
          stack development (React.js & Node.js). I am very enthusiastic about
          bringing the technical and visual aspects of digital products to life.
          User experience, pixel perfect design, and writing clear, readable,
          highly performant code matters to me.{" "}
        </p>

        <p className="my-4 text-grayUi text-t18">
          I began my journey as a web developer in 2015, and since then, I{"'"}
          ve continued to grow and evolve as a developer, taking on new
          challenges and learning the latest technologies along the way. Now, in
          my early thirties, 7 years after starting my web development journey,
          I{"'"}m building cutting edge web applications using modern
          technologies such as Next.js, TypeScript, Nestjs, Tailwindcss,
          Supabase and much more.{" "}
        </p>
        <p className="my-4 text-grayUi text-t18">
          When I{"'"}m not in full on developer mode, you can find me hovering
          around on twitter or on indie hacker, witnessing the journey of early
          startups or enjoying some free time. You can follow me on Twitter
          where I share tech related bites and build in public, or you can
          follow me on GitHub.
        </p>
      </div>
    </div>
  );
}
