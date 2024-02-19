import LayoutLight from "@layouts/LayoutLight";
import images from "../constants/images";

export default function NotFound() {
  return (
    <div className="flex flex-col gap-y-4">
      <LayoutLight>
        <div className="text-center max-w-screen-lg mx-auto flex justify-center flex-col items-center">
          <h1 className="mb-4 text-6xl font-semibold text-red-500">404</h1>
          <p className="mb-4 text-lg text-gray-600">
            Oops! Looks like you{"'"}re lost.
          </p>
          <div className="animate-bounce">
            <img className="h-96 w-96" src={images.Error} alt="" />
          </div>
          <p className="mt-4 text-gray-600">
            Let{"'"}s get you back{" "}
            <a href="/" className="text-blue-500">
              home
            </a>
            .
          </p>
        </div>
      </LayoutLight>
    </div>
  );
}
