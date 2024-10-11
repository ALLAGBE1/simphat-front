import PropTypes from "prop-types"


const RenderCommittee = ({ imgSrc, title, subtitle, text }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg h-[345px]">
      <img className="w-full" src={imgSrc} alt="Card image cap" />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">{text}</p>
      </div>
      {subtitle && (
        <div className="px-6 pt-4 pb-2">
          <span className="text-gray-500">{subtitle}</span>
        </div>
      )}
    </div>
  );
};

// Ajout des propTypes pour valider les props
RenderCommittee.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  text: PropTypes.string.isRequired,
}

export default RenderCommittee


