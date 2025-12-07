import DashboardCard from "@components/dashboard/DashboardCard";
import { dashboardHeaderMetrics } from "@constants/static-data";

const Dashboard = () => {
	return (
		<section>
			<div className="grid grid-cols-3 mb-8 bg-white rounded-4xl py-7">
				{dashboardHeaderMetrics.map((metric) => (
					<div
						key={metric.label}
						className="px-3 not-last:border-r border-[#F0F0F0]"
					>
						<DashboardCard {...metric} />
					</div>
				))}
			</div>
		</section>
	);
};

export default Dashboard;
