import PropTypes from "prop-types";

export default function Layout({ children }) {
  return (
    <div className="max-w-screen-lg  xl:max-w-screen-xl  mx-auto font-sora  text-t16 font-normal">
      {children}
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes,
};
