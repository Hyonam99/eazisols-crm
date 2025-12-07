import { createBrowserRouter } from "react-router-dom";
import RoutePaths from "@constants/routemap.json";
import LoginPage from "@pages/auth/LoginPage";

import AppLayout from "./layouts/AppLayout";
import PageNotFound from "@pages/PageNotFound";
import Dashboard from "@pages/users/Dashboard";
import BlankLayout from "@layouts/BlankLayout";
import PageMaintenance from "@pages/PageMaintenance";

export const routeNodes = createBrowserRouter([
	{
		path: "/",
		element: <BlankLayout />,
		errorElement: <PageNotFound />,
		children: [
			{
				index: true,
				element: <LoginPage />,
			},
		],
	},
	{
		path: RoutePaths.USER.base,
		element: <AppLayout />,
		errorElement: <PageNotFound />,
		children: [
			{
				index: true,
				element: <Dashboard />,
			},
			{
				path: RoutePaths.USER.products,
				element: <PageMaintenance />,
			},
			{
				path: RoutePaths.USER.customers,
				element: <Dashboard />,
			},
			{
				path: RoutePaths.USER.income,
				element: <PageMaintenance />,
			},
			{
				path: RoutePaths.USER.promote,
				element: <PageMaintenance />,
			},
			{
				path: RoutePaths.USER.help,
				element: <PageMaintenance />,
			},
		],
	},
]);
