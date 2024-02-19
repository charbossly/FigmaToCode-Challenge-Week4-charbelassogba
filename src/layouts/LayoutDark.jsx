import PropTypes from "prop-types";
import Layout from "./Layout";

export default function LayoutDark({ children }) {
  return (
    <div className="w-full bg-blackUi text-white dark:bg-white dark:text-blackUi">
      <Layout>
        {" "}
        <section className="mt-6">{children}</section>
      </Layout>
    </div>
  );
}

LayoutDark.propTypes = {
  children: PropTypes,
};
