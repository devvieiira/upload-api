import React from "react";
import ReactDOM from "react-dom/client";
// import { App } from "./App";
import "./index.css";

import { Home } from "@/routes/Home";
import { OpenAI } from "@/routes/OpenAI";

import { RouterProvider, createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Home />,
	},
	{
		path: "/ai/openai",
		element: <OpenAI />,
	},
]);

// biome-ignore lint/style/noNonNullAssertion: <explanation>
ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>,
);
