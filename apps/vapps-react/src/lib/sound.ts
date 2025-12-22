let ctx: AudioContext | null = null;
let volume = 0.6;

function getCtx() {
	if (!ctx) {
		const AC = (window as any).AudioContext || (window as any).webkitAudioContext;
		if (!AC) {
			const fallback = {
				currentTime: 0,
				state: 'running',
				resume: async () => {},
				createOscillator: () => ({
					connect: () => {},
					start: () => {},
					stop: () => {},
					type: 'sine' as OscillatorType,
					frequency: { setValueAtTime: () => {} },
				}),
				createGain: () => ({
					connect: () => {},
					gain: {
						setValueAtTime: () => {},
						exponentialRampToValueAtTime: () => {},
					},
				}),
				destination: {} as AudioDestinationNode,
			} as unknown as AudioContext;
			return fallback;
		}
		ctx = new AC();
	}
	if (ctx && ctx.state === 'suspended') {
		ctx.resume().catch(() => {});
	}
	return ctx!;
}

export type SoundName = 'click' | 'success' | 'error';

export function setVolume(v: number) {
	volume = Math.max(0, Math.min(1, v));
}

export function ensureAudioUnlocked() {
	if (typeof window === 'undefined') return;
	const audio = getCtx();
	const handler = () => {
		audio.resume().catch(() => {});
		playTone(audio, 440, 0.02, 'sine');
		window.removeEventListener('pointerdown', handler);
		window.removeEventListener('keydown', handler);
		window.removeEventListener('touchstart', handler);
	};
	window.addEventListener('pointerdown', handler, { once: true });
	window.addEventListener('keydown', handler, { once: true });
	window.addEventListener('touchstart', handler, { once: true });
}

function playTone(
	audio: AudioContext,
	freq: number,
	dur: number,
	type: OscillatorType,
	start?: number,
	volScale = 1,
) {
	const osc = audio.createOscillator();
	const gain = audio.createGain();
	const t = start ?? audio.currentTime;
	osc.type = type;
	osc.frequency.setValueAtTime(freq, t);
	gain.gain.setValueAtTime(volume * volScale, t);
	gain.gain.exponentialRampToValueAtTime(0.0001, t + dur);
	osc.connect(gain);
	gain.connect(audio.destination);
	osc.start(t);
	osc.stop(t + dur);
}

export function playSound(name: SoundName) {
	const audio = getCtx();
	const now = audio.currentTime;

	if (name === 'click') {
		playTone(audio, 900, 0.06, 'triangle', now);
		return;
	}
	if (name === 'success') {
		playTone(audio, 880, 0.1, 'sine', now);
		playTone(audio, 1320, 0.12, 'sine', now + 0.12);
		return;
	}
	if (name === 'error') {
		playTone(audio, 440, 0.12, 'square', now, 1);
		playTone(audio, 220, 0.15, 'square', now + 0.12, 1);
		return;
	}
}
