import path from 'path'
import { defineConfig } from 'vite'
import { VitePWA } from 'vite-plugin-pwa'

import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
	plugins: [
		react(),
		tailwindcss(),
		VitePWA({
			registerType: 'autoUpdate',
			includeAssets: [
				'favicon.ico',
				'apple-touch-icon.png',
				'favicon.svg',
				'favicon.png',
			],
			manifest: {
				name: 'MyGame',
				short_name: 'MyGame',
				description: 'Multi game applications',
				theme_color: '#f5f5f5',
				background_color: '#f5f5f5',
				start_url: '/',
				display: 'standalone',
				display_override: ['window-controls-overlay', 'standalone'],
				icons: [
					{
						src: 'pwa-192x192.png',
						sizes: '192x192',
						type: 'image/png',
					},
					{
						src: 'pwa-512x512.png',
						sizes: '512x512',
						type: 'image/png',
					},
				],
			},
		}),
	],
	resolve: {
		alias: {
			'@': path.resolve(import.meta.dirname, './src'),
		},
	},
})
