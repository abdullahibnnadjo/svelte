import { noop } from './utils';
import { PerfCompat, Raf } from 'svelte/compat';

export const is_client = typeof window !== 'undefined';

export let now: () => number = is_client
	? () => PerfCompat.now()
	: () => Date.now();

export let raf = is_client ? cb => Raf.requestAnimationFrame(cb) : noop;

// used internally for testing
export function set_now(fn) {
	now = fn;
}

export function set_raf(fn) {
	raf = fn;
}
