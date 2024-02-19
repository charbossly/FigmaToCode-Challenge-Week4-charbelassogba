import images from "@constants/images";

export default function index({ colorTheme }) {
  return (
    <footer
      className={`mx-4  lg:mx-0 flex flex-row items-center justify-between py-6 ${
        colorTheme === "dark" ? "mt-8" : "mt-0"
      }`}
    >
      {colorTheme !== "dark" ? (
        <img src={images.Logo} alt="logo" />
      ) : (
        <img src={images.Logo2} alt="logo" />
      )}
      <div className="text-right text-t16">
        <p>@2019-2023 Personal</p>
        <p>Made in figma</p>
      </div>
    </footer>
  );
}
