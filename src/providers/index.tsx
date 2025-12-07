import { Toaster } from "react-hot-toast";

import { ReactQueryProvider } from "./QueryProvider";

const AppProviders = ({ children }: { children: React.ReactNode }) => {
	return (
		<ReactQueryProvider>
			<Toaster
				position="top-center"
				reverseOrder={false}
				toastOptions={{
					style: {
						color: "#FFFFFF",
					},
					success: {
						style: {
							background: "#006600",
						},
					},
					error: {
						style: {
							background: "#BE0303",
						},
					},
				}}
			/>
			{children}
		</ReactQueryProvider>
	);
};

export default AppProviders;
