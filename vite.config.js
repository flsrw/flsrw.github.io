import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
const path = require('path')

export default defineConfig({
    base: '/home/',
    plugins: [react()],
    root: path.resolve(__dirname, 'src'),
    build: {
        outDir: '../dist'
    }
})