import PropTypes from "prop-types"



const Img = ({ className, src = "defaultNoData.png", alt= "testImg", ...restProps }) => {
    return <img src={src} alt={alt} className={className} {...restProps} loading={"lazy"} />
}

// Ajout des propTypes pour valider les props
Img.propTypes = {
    className: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired,
    alt: PropTypes.string,
  }

export { Img }