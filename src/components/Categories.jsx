// import '../styles/Categories.css'
import PropTypes from "prop-types"


function Categories({ setActiveCategory, categories, activeCategory }) {
	return (
		<div className='flex flex-row justify-end '>
			<select
				value={activeCategory}
				onChange={(e) => setActiveCategory(e.target.value)}
				className='lmj-categories-select'
			>
				<option value=''>---</option>
				{categories.map((cat) => (
					<option key={cat} value={cat}>
						{cat}
					</option>
				))}
			</select>
			<button onClick={() => setActiveCategory('')}>Réinitialiser</button>
		</div>
	)
}

// Ajout des propTypes pour valider les props
Categories.propTypes = {
    setActiveCategory: PropTypes.string.isRequired,
    categories: PropTypes.string.isRequired,
    activeCategory: PropTypes.string,
  }


export default Categories