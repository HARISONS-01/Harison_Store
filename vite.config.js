import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd());

  return {
    plugins: [react()],
    server: {
      port: 3000, // Set your desired port here
    },
    define: {
      // Inject all environment variables into process.env
      'process.env': Object.entries(env).reduce((prev, [key, val]) => {
        prev[key] = JSON.stringify(val);
        return prev;
      }, {}),
    },
  };
});
