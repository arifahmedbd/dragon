import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import RightAside from "../components/home layout/RightAside";
import NewsDetailsCard from "../components/NewsDetailsCard";
import { useLoaderData, useParams } from "react-router";

const NewsDetails = () => {
	const data = useLoaderData();
	const { id } = useParams();
	// console.log(data, id);
	const [news, setNews] = useState({});
	useEffect(() => {
		const newsDetails = data.find((singleNews) => singleNews.id == id);
		setNews(newsDetails);
	},[data,id]);
	return (
		<div>
			<header className="py-3">
				<Header></Header>
			</header>
			<main className="w-11/12 mx-auto grid grid-cols-12 gap-5">
				<section className="w-9/12 col-span-9">
					<h2 className="font-bold">News Details</h2>
					<NewsDetailsCard news={news}></NewsDetailsCard>
				</section>
				<aside className="col-span-3">
					<RightAside></RightAside>
				</aside>
			</main>
		</div>
	);
};

export default NewsDetails;
