import type { ICardProps } from "types/index";

const DashboardCard = (props: ICardProps) => {
	const { label, change, value, icon } = props;
	return (
		<div key={label} className="bg-white flex justify-center gap-2">
			<img src={icon} alt={label} />
			<div className="flex flex-col items-start mb-3">
				<p className="text-sm mb-1 text-gray-500">{label}</p>
				<h3 className="text-3xl text-[#333333] font-semibold">
					{value}
				</h3>
				{change && (
					<p
						className={`text-sm ${
							change.startsWith("+")
								? "text-success-dark"
								: "text-pink"
						}`}
					>
						{change} this month
					</p>
				)}
			</div>
		</div>
	);
};

export default DashboardCard;
