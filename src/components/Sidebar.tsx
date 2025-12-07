import { userNavLinks } from "@constants/static-data";
import { useState } from "react";
import { NavLink } from "react-router-dom";

import { RiSettingsLine } from "react-icons/ri";
import { GoSidebarCollapse } from "react-icons/go";
import {
	MdKeyboardArrowRight,
	MdOutlineKeyboardArrowDown,
} from "react-icons/md";

const Sidebar = () => {
	const [collapsed, setCollapsed] = useState(false);

	return (
		<div
			className={`relative h-screen bg-white shadow-lg px-7 py-8 flex flex-col transition-all duration-300 overflow-y-scroll overflow-x-hidden scrollbar-none
        ${collapsed ? "w-[102px]" : "w-[306px]"}`}
		>
			<div
				className={`flex items-center gap-2 mb-10 ${
					collapsed ? "justify-center" : ""
				}`}
			>
				<RiSettingsLine size={26} />
				{!collapsed && (
					<h1 className="text-2xl font-semibold">
						Dashboard{" "}
						<span className="text-[10px] text-muted font-medium">
							v.01
						</span>
					</h1>
				)}
				<button
					onClick={() => setCollapsed(!collapsed)}
					className="absolute right-1 text-primary-dark"
				>
					<GoSidebarCollapse size={22} />
				</button>
			</div>

			<nav className="flex flex-col gap-3">
				{userNavLinks.map((linkItem) => {
					return (
						<NavLink key={linkItem.label} to={linkItem.link} end>
							{({ isActive }) => (
								<div
									className={`group flex items-center justify-between p-3 rounded-lg hover:text-white hover:bg-primary ${
										isActive
											? "text-white bg-primary"
											: "text-[#9197B3]"
									}`}
								>
									<div className="flex items-center gap-2">
										<img
											src={linkItem.icon}
											alt={linkItem.label}
											className={`w-6 h-6 ${
												isActive
													? "invert brightness-10"
													: "brightness-50 invert-[0.9] opacity-90"
											} group-hover:invert-100 group-hover:brightness-10 group-hover:opacity-100`}
										/>

										{!collapsed && linkItem.label}
									</div>

									{!collapsed && (
										<MdKeyboardArrowRight size={18} />
									)}
								</div>
							)}
						</NavLink>
					);
				})}
			</nav>

			<div className="mt-48 [@media(min-height:960px)]:mt-auto">
				{!collapsed && (
					<div className="bg-linear-to-r from-primary-thin to-primary-dark py-6 px-8 rounded-3xl text-white text-center">
						<p className="text-sm mb-5 font-semibold">
							Upgrade to PRO to get access to all features!
						</p>
						<button className="w-full bg-white text-primary-dark px-6 py-2.5 rounded-full text-sm font-semibold">
							Get Pro Now!
						</button>
					</div>
				)}

				<div className="flex items-center justify-between mt-6">
					<div className="flex items-center gap-3">
						<img
							src="/images/user-profile.svg"
							alt="user profile"
							className="w-10 h-10 rounded-full bg-gray-300"
						/>
						{!collapsed && (
							<div>
								<p className="text-sm font-semibold">Evano</p>
								<p className="text-xs text-gray-500">
									Project Manager
								</p>
							</div>
						)}
					</div>
					<MdOutlineKeyboardArrowDown size={24} color="#757575" />
				</div>
			</div>
		</div>
	);
};

export default Sidebar;
