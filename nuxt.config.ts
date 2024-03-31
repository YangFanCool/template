export default defineNuxtConfig({
	ssr: false,
	devtools: { enabled: false },
	modules: ['@pinia/nuxt', '@nuxtjs/tailwindcss', '@nuxtjs/google-fonts'],
	components: [
		{
			path: '~/components',
			pathPrefix: false,
		},
	],
	googleFonts: {
		families: {
			Roboto: true,
			Lato: true,
			Lora: true,
		},
		display: 'swap',
	},
	imports: {
		presets: [
			{
				from: 'naive-ui',
				imports: ['useMessage', 'useLoadingBar'],
			},
			{
				from: '@vueuse/core',
				imports: ['TransitionPresets', 'useTransition'],
			},
		],
	},
});
