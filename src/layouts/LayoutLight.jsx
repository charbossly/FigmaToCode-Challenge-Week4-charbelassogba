import PropTypes from "prop-types";
import Layout from "./Layout";

export default function LayoutLight({ children }) {
  return (
    <div className="w-full bg-white text-blackUi dark:bg-blackUi dark:text-white">
      <Layout>
        <section className="my-6"> {children}</section>
      </Layout>
    </div>
  );
}

LayoutLight.propTypes = {
  children: PropTypes.children,
};
