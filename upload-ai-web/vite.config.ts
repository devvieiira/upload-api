import { defineConfig } from "vite";
// biome-ignore lint/style/useNodejsImportProtocol: <explanation>
import path from "path";
import react from "@vitejs/plugin-react";
import svgPlugin from "vite-svg";

export default defineConfig({
	plugins: [react(), svgPlugin()],
	optimizeDeps: {
		exclude: ["@ffmpeg/ffmpeg", "@ffmpeg/util"],
	},
	assetsInclude: ["**/*.png", "**/*.svg"],
	resolve: {
		alias: {
			"@": path.resolve(__dirname, "./src"),
		},
	},
});
