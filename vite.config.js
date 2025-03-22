import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Create _redirects file for Netlify
const writeRedirectsFile = () => {
  const redirectsContent = "/* /index.html 200";
  const outDir = "../dist";

  return {
    name: "write-redirects-file",
    closeBundle() {
      fs.writeFileSync(
        resolve(__dirname, outDir, "_redirects"),
        redirectsContent
      );
    },
  };
};

export default defineConfig({
  plugins: [react(), writeRedirectsFile()],
  root: "src",
  build: {
    outDir: "../dist", // This ensures the dist folder is created in the project root
  },
  assetsInclude: ["**/*.PNG"],
});
