import PropTypes from "prop-types";
import images from "../../../constants/images";

export default function Socials() {
  const socials = [
    { name: "facebook", image: images.Facebook },
    { name: "reddit", image: images.Reddit },
    { name: "discord", image: images.Discord },
    { name: "twitter", image: images.Twitter },
  ];
  return (
    <>
      {socials.map((soc, index) => {
        return (
          <a
            key={index}
            href=""
            className={`${
              index == 0 ? "primary-btn" : "primary-btn-outlined"
            } py-4 dark:primary-btn-other`}
          >
            <img src={soc.image} alt={soc.name} />
          </a>
        );
      })}
    </>
  );
}

Socials.propTypes = {
  socials: PropTypes,
};
