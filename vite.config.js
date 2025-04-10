import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  /*Declaramos la url base para no tener problemas al subir nuestra aplicacion a un host como GitHub Pages*/
  base: '/password_generator/',
  /*Nos aseguramos de que nuestro directorio dist para el despliegue reciba archivos js y no jsx*/
  build: { 
    rollupOptions: { 
      output: { 
        entryFileNames: '[name].js', 
        chunkFileNames: '[name].js', 
        assetFileNames: '[name][extname]', 
      }, 
    }, 
  },
})
