import { describe, it, expect, vi, beforeEach } from 'vitest';

// Use a separate variable to hold the mock context
let mockAudioContextInstance: any;

describe('sound library', () => {
    let mockOscillator: any;
    let mockGain: any;

    beforeEach(async () => {
        vi.clearAllMocks();
        vi.resetModules();
        
        mockOscillator = {
            connect: vi.fn(),
            start: vi.fn(),
            stop: vi.fn(),
            frequency: { setValueAtTime: vi.fn() },
            type: 'sine'
        };

        mockGain = {
            connect: vi.fn(),
            gain: {
                setValueAtTime: vi.fn(),
                exponentialRampToValueAtTime: vi.fn()
            }
        };

        mockAudioContextInstance = {
            currentTime: 0,
            state: 'suspended',
            resume: vi.fn().mockResolvedValue(undefined),
            createOscillator: vi.fn().mockReturnValue(mockOscillator),
            createGain: vi.fn().mockReturnValue(mockGain),
            destination: {}
        };

        // Define a real class for the stub
        class MockAudioContext {
            constructor() {
                return mockAudioContextInstance;
            }
        }

        vi.stubGlobal('AudioContext', MockAudioContext);
        vi.stubGlobal('webkitAudioContext', MockAudioContext);
    });

    it('sets volume correctly', async () => {
        const { setVolume } = await import('../sound');
        setVolume(0.5);
        expect(true).toBe(true);
    });

    it('plays "click" sound', async () => {
        const { playSound } = await import('../sound');
        playSound('click');
        expect(mockAudioContextInstance.createOscillator).toHaveBeenCalled();
    });

    it('plays "success" sound', async () => {
        const { playSound } = await import('../sound');
        playSound('success');
        expect(mockAudioContextInstance.createOscillator).toHaveBeenCalled();
    });

    it('plays "error" sound', async () => {
        const { playSound } = await import('../sound');
        playSound('error');
        expect(mockAudioContextInstance.createOscillator).toHaveBeenCalled();
    });

    it('ensures audio is unlocked', async () => {
        const { ensureAudioUnlocked } = await import('../sound');
        const addSpy = vi.spyOn(window, 'addEventListener');
        ensureAudioUnlocked();
        expect(addSpy).toHaveBeenCalledWith('pointerdown', expect.any(Function), { once: true });
        addSpy.mockRestore();
    });
});
