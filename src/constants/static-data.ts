import RoutePaths from "@constants/routemap.json";

const userNavLinks = [
	{
		label: "Dashboard",
		link: RoutePaths.USER.base,
		icon: "/icons/dashboard.svg",
	},
	{
		label: "Product",
		link: RoutePaths.USER.products,
		icon: "/icons/products.svg",
	},
	{
		label: "Customers",
		link: RoutePaths.USER.customers,
		icon: "/icons/users.svg",
	},
	{
		label: "Income",
		link: RoutePaths.USER.income,
		icon: "/icons/wallet.svg",
	},
	{
		label: "Promote",
		link: RoutePaths.USER.promote,
		icon: "/icons/discount.svg",
	},
	{
		label: "Help",
		link: RoutePaths.USER.help,
		icon: "/icons/question.svg",
	},
];

const dashboardHeaderMetrics = [
	{
		label: "Total Customers",
		value: "5,423",
		icon: "/icons/customers.svg",
		change: "+16%",
	},
	{
		label: "Members",
		value: "1,893",
		icon: "/icons/members.svg",
		change: "-1%",
	},
	{ label: "Active Now", value: "189", icon: "/icons/monitor.svg" },
];

export { userNavLinks, dashboardHeaderMetrics };
