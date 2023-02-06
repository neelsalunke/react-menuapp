import React from 'react'

const Categories = (props) => {
	const filterItems = props.filterItems

	// Call filterItems(<NAME OF CATEGORY>) when button is clicked
	// Example - <button className="filter-btn" onClick={() => filterItems('all')}>All</button>
	return (
		<div className="btn-container">
			<button className="filter-btn" onClick={() => filterItems('all')}>All</button>
			<button className="filter-btn" onClick={() => filterItems('breakfast')}>Breakfast</button>
			<button className="filter-btn" onClick={() => filterItems('shakes')}>Shakes</button>
		</div>
	)
}

export default Categories
