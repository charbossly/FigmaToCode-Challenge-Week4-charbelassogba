import PropTypes from "prop-types";
import Header from "@components/sections/header";
import Footer from "@components/sections/footer";
import Layout from "./Layout";
import useDarkSide from "../hooks/useDarkSide";
import LayoutDark from "./LayoutDark";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import { useState } from "react";

export default function GlobalLayout({ children }) {
  const [colorTheme, setTheme] = useDarkSide();
  const [darkSide, setDarkSide] = useState(
    colorTheme === "light" ? true : false
  );

  const toggleDarkMode = (checked) => {
    setTheme(colorTheme);
    setDarkSide(checked);
  };

  return (
    <div>
      <div className="fixed z-10 p-2 h-12 w-12 rounded-full bg-grayUi border-2  border-blackUi dark:border-white flex items-center justify-center bottom-4 right-4">
        <DarkModeSwitch
          checked={darkSide}
          onChange={toggleDarkMode}
          size={40}
        />
      </div>
      <Layout>
        <Header colorTheme={colorTheme} />
      </Layout>
      {children}
      <LayoutDark>
        <Footer colorTheme={colorTheme} />
      </LayoutDark>
    </div>
  );
}
GlobalLayout.propTypes = {
  children: PropTypes,
};
