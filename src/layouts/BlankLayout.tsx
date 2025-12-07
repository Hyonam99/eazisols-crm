import { Outlet } from "react-router-dom";

const BlankLayout = () => {
	return (
		<section>
			<Outlet />
		</section>
	);
};

export default BlankLayout;
