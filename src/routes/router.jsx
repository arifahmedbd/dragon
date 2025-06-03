import { createBrowserRouter } from "react-router";
import HomeLayout from "../layouts/HomeLayout";
import Home from "../pages/Home";
import CategoryNews from "../pages/CategoryNews";
import Login from "../pages/Login";
import Register from "../pages/Register";
import AuthLayout from "../layouts/AuthLayout";
import NewsDetails from "../pages/NewsDetails";
import PrivateRoute from "../provider/PrivateRoute";

const router = createBrowserRouter([
	{
		path: "/",
		element: <HomeLayout />,
		children: [
			{
				path: "",
				element: <Home />,
			},
			{
				path: "category/:id",
				element: <CategoryNews />,
				loader: () => fetch("/news.json"),
			},
		],
	},
	{
		path: "/auth",
		element: <AuthLayout></AuthLayout>,
		children: [
			{
				path: "login",
				element: <Login />,
			},
			{
				path: "register",
				element: <Register />,
			},
		],
	},
	{
		path: "/news-details/:id",
		element: (
			<PrivateRoute>
				<NewsDetails></NewsDetails>
			</PrivateRoute>
		),
		loader: () => fetch("/news.json"),
	},
	{
		path: "/about",
		element: <h2>About</h2>,
	},
	{
		path: "/career",
		element: <h2>Career</h2>,
	},
	{
		path: "*",
		element: <h2>Error 404</h2>,
	},
]);

export default router;
