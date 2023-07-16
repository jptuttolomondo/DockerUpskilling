import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    strictPort: true,
    port: 5173,
    IP_VM:import.meta.env.IP_VM,
    watch: {
      usePolling: true
    }
  }
})