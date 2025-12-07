import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import AppProviders from "./providers";
import { RouterProvider } from "react-router-dom";
import { routeNodes } from "./routes";

import "./index.css";

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<AppProviders>
			<RouterProvider router={routeNodes} />
		</AppProviders>
	</StrictMode>
);
