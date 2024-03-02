import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    // Front-end
    // axios.get('/api/v1/user')
    // Back-end
    // route.get('/api/v1/user')
    proxy: {
      '/api': {
        target: 'http://localhost:6543',
        changeOrigin: true
      }
    }
  },
  test: {
    environment: 'jsdom',
    globals: true
  }
})


/*
...
devServer: {
      port: 8082,
      historyApiFallback: true,
      static: {
        directory: path.join(__dirname, 'dist')
      },
      headers: {
        'Access-Control-Allow-Origin': '*'
      },
      proxy: {
        '/api': {
          target: 'http://localhost:6543',
        }
}
...
*/