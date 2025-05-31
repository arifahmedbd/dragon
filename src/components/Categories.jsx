import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const Categories = () => {
	const [categories, setCategories] = useState([]);

	useEffect(() => {
		fetch("/categories.json")
			.then((res) => res.json())
			.then((data) => setCategories(data))
			.catch((error) => console.error("Error loading categories:", error));
	}, []);

	return (
		<div>
			<h2>Categories ({categories.length})</h2>
			<div className="grid grid-cols-1 mt-5 gap-3">
				{categories.map((category) => (
					<NavLink key={category.id} className={"btn bg-base-100 hover:bg-base-200 border-0 font-semibold text-accent"} to={`/category/${category.id}`}>
						{category.name}
					</NavLink>
				))}
			</div>
		</div>
	);
};

export default Categories;
