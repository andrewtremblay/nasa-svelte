import Home from './pages/Home.svelte';
import PicOfTheDay from './pages/PicOfTheDay.svelte';
import { writable } from 'svelte/store';
const router = {
'/': Home,
'/home': Home,
'/potd': PicOfTheDay
}
export default router;
export const curRoute = writable('/home');
