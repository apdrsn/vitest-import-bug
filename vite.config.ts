/// <reference types="vitest" />
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    include: ["src/locale.test.ts"],
    browser: {
      enabled: true,
      provider: "playwright",
      name: "chromium", // browser name is required
    },
  },
});
