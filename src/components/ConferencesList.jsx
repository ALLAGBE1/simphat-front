import { useState } from 'react'
import { plantList } from '../constants/plantList'
import ConferenceItem from './ConferenceItem'
import Categories from './Categories'
import PropTypes from "prop-types"


function ConferencesList() {
	const [activeCategory, setActiveCategory] = useState('')
	const categories = plantList.reduce(
		(acc, elem) =>
			acc.includes(elem.category) ? acc : acc.concat(elem.category),
		[]
	)


	return (
		<div className='w-full'>
			<Categories
				categories={categories}
				setActiveCategory={setActiveCategory}
				activeCategory={activeCategory}
			/>

			<div className='list-none p-8 flex flex-wrap justify-center gap-5 '>
				{plantList.map(({ id, cover, title, water, light, price, category }) =>
					!activeCategory || activeCategory === category ? (
						<div key={id}>
							<ConferenceItem
								cover={cover}
								title={title}
								water={water}
								light={light}
								price={price}
							/>
						</div>
					) : null
				)}
			</div>
		</div>
	)
}

// Ajout des propTypes pour valider les props
ConferencesList.propTypes = {
    cart: PropTypes.string.isRequired,
    updateCart: PropTypes.string.isRequired,
  }

export default ConferencesList


//////////////

// import { useState } from 'react'
// import { plantList } from '../constants/plantList'
// import ConferenceItem from './ConferenceItem'
// import Categories from './Categories'
// import PropTypes from "prop-types"


// function ConferencesList() {
// 	const [activeCategory, setActiveCategory] = useState('')
// 	const categories = plantList.reduce(
// 		(acc, elem) =>
// 			acc.includes(elem.category) ? acc : acc.concat(elem.category),
// 		[]
// 	)

// 	// function addToCart(name, price) {
// 	// 	const currentPlantAdded = cart.find((plant) => plant.name === name)
// 	// 	if (currentPlantAdded) {
// 	// 		const cartFilteredCurrentPlant = cart.filter(
// 	// 			(plant) => plant.name !== name
// 	// 		)
// 	// 		updateCart([
// 	// 			...cartFilteredCurrentPlant,
// 	// 			{ name, price, amount: currentPlantAdded.amount + 1 }
// 	// 		])
// 	// 	} else {
// 	// 		updateCart([...cart, { name, price, amount: 1 }])
// 	// 	}
// 	// }

// 	return (
// 		<div className='w-full'>
// 			<Categories
// 				categories={categories}
// 				setActiveCategory={setActiveCategory}
// 				activeCategory={activeCategory}
// 			/>

// 			<div className='list-none p-8 flex flex-wrap justify-center gap-5 '>
// 				{plantList.map(({ id, cover, title, water, light, price, category }) =>
// 					!activeCategory || activeCategory === category ? (
// 						<div key={id}>
// 							<ConferenceItem
// 								cover={cover}
// 								title={title}
// 								water={water}
// 								light={light}
// 								price={price}
// 							/>
// 							{/* <button onClick={() => addToCart(name, price)}>Ajouter</button> */}
// 						</div>
// 					) : null
// 				)}
// 			</div>
// 		</div>
// 	)
// }

// // Ajout des propTypes pour valider les props
// ConferencesList.propTypes = {
//     cart: PropTypes.string.isRequired,
//     updateCart: PropTypes.string.isRequired,
//   }

// export default ConferencesList
