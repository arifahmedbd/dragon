import React from "react";
import { FaEye, FaStar } from "react-icons/fa";

const NewsCard = ({ news }) => {
	const {
		title,
		author,
		published_date,
		rating,
		total_view,
		thumbnail_url,
		details,
	} = news;

	return (
		<div className="bg-white rounded-lg shadow p-4 mb-6">
			{/* Author Info */}
			<div className="flex items-center justify-between text-sm text-gray-500 mb-2">
				<div className="flex items-center gap-2">
					<img
						src={author.img}
						alt={author.name}
						className="w-8 h-8 rounded-full"
					/>
					<div>
						<p className="font-semibold">{author.name}</p>
						<p>{new Date(author.published_date).toLocaleDateString()}</p>
					</div>
				</div>
				<button className="text-gray-400">🔗</button>
			</div>

			{/* Title */}
			<h2 className="text-lg font-bold mb-2">{title}</h2>

			{/* Image */}
			<img
				src={thumbnail_url}
				alt="News"
				className="w-full h-64 object-cover rounded mb-3"
			/>

			{/* Details */}
			<p className="text-gray-700 text-sm mb-3">
				{details.slice(0, 200)}...
				<span className="text-blue-500 font-medium cursor-pointer ml-1">
					Read More
				</span>
			</p>

			{/* Footer Info */}
			<div className="flex items-center justify-between text-sm text-gray-600">
				<div className="flex items-center gap-1">
					<FaStar className="text-orange-400" />
					<span>{rating.number}</span>
				</div>
				<div className="flex items-center gap-1">
					<FaEye />
					<span>{total_view}</span>
				</div>
			</div>
		</div>
	);
};

export default NewsCard;
