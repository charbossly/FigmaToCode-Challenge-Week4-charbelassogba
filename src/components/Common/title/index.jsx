export default function index({ title, type }) {
  return (
    <div
      className={`my-16 text-t42 text-center capitalize ${
        type == "light"
          ? "text-blackUi dark:text-white"
          : "text-white dark:text-blackUi"
      }`}
    >
      <span className="font-sora"> {title.split(" ")[0]}</span>{" "}
      <span className="font-extrabold">{title.split(" ")[1]} </span>
    </div>
  );
}
