// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}
	}
}

declare module 'svelte-icons/*' {
	import { SvelteComponentTyped } from 'svelte';
	export default class extends SvelteComponentTyped<any, any, any> {}
}

export {};
