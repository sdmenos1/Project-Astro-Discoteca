// auth.config.ts
import Facebook from '@auth/core/providers/facebook'
import { defineConfig } from 'auth-astro'

export default defineConfig({
	providers: [
		Facebook({
			clientId: import.meta.env.FACEBOOK_CLIENT_ID,
			clientSecret: import.meta.env.FACEBOOK_CLIENT_SECRET,
		}),
	],
})