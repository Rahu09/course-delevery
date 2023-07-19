import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // server: {
  //   proxy: {
  //     // string shorthand: http://localhost:5173/foo -> http://localhost:4567/foo
  //     '/api/users/signup': 'http://localhost:3000',
  //     "/api/users/purchasedCourses": 'http://localhost:3000',
  //     "/api/users/login": 'http://localhost:3000',
  //     "/api/users/courses": 'http://localhost:3000',
  //     "/api/users/courses/:id": 'http://localhost:3000'
  //   }
  // }
})
