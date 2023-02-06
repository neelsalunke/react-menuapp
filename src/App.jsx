import React, { useState } from 'react'
import Menu from './Menu'
import Categories from './Categories'
import items from './data'

function App() {
	const [menuItems, setMenuItems] = useState(items)

	// Implement this function
	const filterItems = (category) => {
		// Use passed category to
		// filter out items only of that
		// category and set them using
		// setMenuItems
        if (category === 'all') {
            setMenuItems(items);
        } else {
        setMenuItems(() => items.filter((item) => item.category === category))}
	}

	return (
		<main>
			<section className="menu section">
				<div className="title">
					<h2>our menu</h2>
					<div className="underline"></div>
				</div>
				<Categories filterItems={filterItems} />
				<Menu items={menuItems} />
			</section>
		</main>
	)
}

export default App
