// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'SyncmaticaLand API Docs',
			defaultLocale: 'root',
			locales: {
				en: {
					label: 'English',
				},
				'root': {
					label: '简体中文',
					lang: 'zh-CN',
				},
			},
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/Prime-Light/SyncmaticaLand.Docs' }],
			sidebar: [
				{
					label: 'Start Here',
					translations: {
						'zh-CN': '从这里开始',
					},
					items: [
						'welcome',
					],
				},
				{
					label: 'Guides',
					items: [
						{ label: 'Example Guide', slug: 'guides/example' },
					],
				},
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},
			],
		}),
	],
});
