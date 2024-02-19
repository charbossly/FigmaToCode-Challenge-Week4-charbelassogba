import PropTypes from "prop-types";

export default function Skill({ image, name }) {
  return (
    <div className="grid-cols-1 rounded-md px-4 py-10 border-2 border-blackUi dark:border-white dark:primary-btn-other cursor-pointer flex flex-col justify-between gap-8 items-center">
      <img src={image} alt={name} />
      <h2 className="text-blackUi dark:text-white capitalize">{name}</h2>
    </div>
  );
}

Skill.propTypes = {
  image: PropTypes,
  name: PropTypes.string.isRequired,
};
