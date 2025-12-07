import DashboardHeader from "@components/dashboard/DashboardHeader";
import Sidebar from "@components/Sidebar";
import { Outlet } from "react-router-dom";

const AppLayout = () => {
	return (
		<section className="flex bg-gray-50">
			<Sidebar />

			<main className="flex-1 py-10 px-16">
                <DashboardHeader />
				<Outlet />
			</main>
		</section>
	);
};

export default AppLayout;
