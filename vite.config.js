import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: { port: 4099, strictPort: true },
  preview: { port: 4098, strictPort: true },
});
