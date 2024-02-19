export default function experience({ exp, index }) {
  return (
    <div
      className={`primary-btn-outlined flex flex-col justify-around border-white dark:border-blackUi gap-y-6  mx-4 lg:mx-0 p-6 lg:p-8  text-white dark:text-blackUi ${
        index % 2 == 1 ? "bg-grayUi bg-opacity-40" : ""
      }`}
    >
      <div className="flex flex-col gap-6 lg:gap-0 lg:flex-row justify-between ">
        <div className="flex items-center">
          <img src={exp.logo} alt="" />
          <h3 className="mx-4 text-t24 font-semibold">{exp.position}</h3>
        </div>
        <div>
          <p className="capitalize text-t18">{exp.duration}</p>
        </div>
      </div>
      <p className="text-t18 font-normal">{exp.description}</p>
    </div>
  );
}
