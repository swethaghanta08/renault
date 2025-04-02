import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import process from 'process';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    'process.env': process.env, // Polyfill for process.env
  },
  server: {
    host: '0.0.0.0', // Allow connections from any host
  },
});
