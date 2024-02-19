import images from "@constants/images";
import { useState } from "react";
import PropTypes from "prop-types";

export default function Header({ colorTheme }) {
  const [open, setOpen] = useState(false);

  const links = [
    { name: "About me", link: "#aboutme" },
    { name: "Skills", link: "#skills" },
    { name: "Project", link: "#project" },
    { name: "Contact me", link: "#contactme" },
  ];
  return (
    <>
      {" "}
      <nav className="mx-4 my-8 xl:mx-0 flex flex-row items-center justify-between bg-white dark:bg-transparent">
        <img src={images.Logo} alt="logo" />
        <ul className={`hidden lg:flex flex-row gap-x-12`}>
          {links.map((link, index) => {
            return (
              <li
                className={`text-t22 font-bold ${
                  colorTheme == "dark" ? "text-blackUi" : "text-blackUi"
                } capitalize cursor-pointer`}
                key={index}
              >
                <a href={link.link}>{link.name}</a>
              </li>
            );
          })}
        </ul>
        <a
          href="#"
          className="hidden lg:flex items-center primary-btn text-t22"
        >
          Resume{" "}
          {colorTheme == "dark" ? (
            <img className="mx-2" src={images.Download} alt="cv" />
          ) : (
            <img className="mx-2 h-6 w-6" src={images.Download2} alt="cv" />
          )}
        </a>
        <img
          src={images.Menu}
          alt="menu"
          className={` ${
            open ? "hidden" : "block"
          } block lg:hidden cursor-pointer`}
          onClick={() => {
            setOpen(!open);
          }}
        />
        <a
          href=""
          className={` ${
            !open ? "hidden" : "block"
          } block text-t42 lg:hidden cursor-pointer ${
            colorTheme == "dark" ? "text-blackUi" : "text-blackUi"
          }`}
          onClick={() => {
            setOpen(!open);
          }}
        >
          x
        </a>
      </nav>
      <ul
        className={` ${
          open ? "flex" : "hidden"
        } lg:hidden flex-col items-center justify-center gap-y-12`}
      >
        {links.map((link, index) => {
          return (
            <li
              className={`text-t22 font-bold ${
                colorTheme == "dark" ? "text-blackUi" : "text-blackUi"
              } capitalize cursor-pointer`}
              key={index}
            >
              <a href={link.link}>{link.name}</a>
            </li>
          );
        })}
        <li></li>
      </ul>
    </>
  );
}
Header.propTypes = {
  colorTheme: PropTypes.string,
};
