const DashboardHeader = () => {
	return (
		<div className="flex justify-between items-center mb-10">
			<h2 className="text-2xl font-semibold">Hello Evano 👋🏼</h2>

			<input
				type="text"
				placeholder="Search"
				className="border bg-white shadow-sm px-4 py-2 rounded-lg w-64 outline-none"
			/>
		</div>
	);
};

export default DashboardHeader;
