import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// Use / in dev, repo path in prod so assets load on GitHub Pages
export default defineConfig(({ mode }) => {
  const isDev = mode === "development";
  return {
    base: isDev ? "/" : "/cohby-consulting-services/",
    server: { host: "::", port: 8080 },
    plugins: [react(), isDev && componentTagger()].filter(Boolean),
    resolve: {
      alias: { "@": path.resolve(__dirname, "./src") },
    },
  };
});
