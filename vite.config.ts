import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import checker from 'vite-plugin-checker'

// https://vite.dev/config/
export default defineConfig({
	plugins: [
		react(),
		checker({
			eslint: {
				lintCommand: 'eslint "./src/**/*.{ts,tsx}"',
				useFlatConfig: true // Enable flat config support
			},
			typescript: {
				tsconfigPath: 'tsconfig.app.json'
			},
			overlay: {
				initialIsOpen: true,
				position: 'tr',
				panelStyle: 'height: 100%',
				badgeStyle: 'min-width: 150px'
			}
		})
	]
})
