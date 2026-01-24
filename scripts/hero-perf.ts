
import { performance } from 'perf_hooks';

// --- Mocks ---

class MockElement {
  style = { transform: '', left: '', top: '' };

  getBoundingClientRect() {
    // Simulate layout read cost (tiny CPU spin)
    const start = performance.now();
    while (performance.now() - start < 0.01) {}

    return { left: 100, top: 100, width: 1000, height: 800 };
  }
}

// --- Scenarios ---

// 1. Baseline: setState on every move + getBoundingClientRect
function runBaseline(eventCount: number) {
  const hero = new MockElement();
  let renderCount = 0;
  let layoutReadCount = 0;

  // Mock setState
  const setMousePos = () => {
    renderCount++;
  };

  const startTime = performance.now();

  for (let i = 0; i < eventCount; i++) {
    // Simulate event data
    const e = { clientX: 200 + (i % 100), clientY: 300 + (i % 100) };

    // Handler Logic
    if (hero) {
      layoutReadCount++;
      const rect = hero.getBoundingClientRect();
      setMousePos({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    }
  }

  const duration = performance.now() - startTime;

  return {
    name: 'Baseline (State + Layout Thrashing)',
    duration,
    renderCount,
    layoutReadCount,
    styleUpdates: 0 // In React, style updates happen during render, implied by renderCount
  };
}

// 2. Optimized: ref + rAF + Cached Rect
function runOptimized(eventCount: number) {
  const hero = new MockElement();
  const spotlight = new MockElement();

  const renderCount = 0;
  let layoutReadCount = 0;
  let styleUpdateCount = 0;

  // Refs
  const mousePos = { current: { x: 0, y: 0 } };
  const heroRect = { current: { left: 0, top: 0 } };
  const requestRef = { current: null as number | null };

  // Initial Setup (useEffect)
  layoutReadCount++; // Initial cache
  heroRect.current = hero.getBoundingClientRect();

  // Mock requestAnimationFrame
  // In a real browser, this runs once per frame.
  // For simulation, we'll assume the loop processes the *latest* value.
  // We can't easily simulate the async nature in a sync loop,
  // so we'll simulate the "Work" done by rAF separately or inline if the flag is set.

  // Actually, to fairly compare "Handler Time", we measure the time the handler takes.
  // The rAF callback runs later. We should measure the overhead of the handler + the callback execution.

  const animate = () => {
    if (spotlight) {
      const { x, y } = mousePos.current;
      spotlight.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      styleUpdateCount++;
      requestRef.current = null;
    }
  };

  const startTime = performance.now();

  for (let i = 0; i < eventCount; i++) {
    // Simulate event data
    const e = { clientX: 200 + (i % 100), clientY: 300 + (i % 100) };

    // Handler Logic
    const rect = heroRect.current; // Read cached
    mousePos.current.x = e.clientX - rect.left;
    mousePos.current.y = e.clientY - rect.top;

    if (requestRef.current === null) {
      // Schedule rAF
      // In simulation, we just mark it as scheduled.
      // We won't run `animate` 10,000 times instantly because rAF is capped at 60fps.
      // However, for the sake of "Work Done", let's assume worst case or best case?
      // Realistically, mouse events fire faster than rAF.
      // If we fire 100 events in 16ms, rAF runs ONCE.
      // If we fire 10k events in a tight loop, rAF runs ONCE (at the end).

      requestRef.current = 1;
    }
  }

  // Execute at least one frame of work to show cost
  animate();

  const duration = performance.now() - startTime;

  return {
    name: 'Optimized (Refs + rAF + Cached Rect)',
    duration, // This will be significantly lower because we skipped layout reads and renders
    renderCount,
    layoutReadCount,
    styleUpdates: styleUpdateCount
  };
}


// --- Main ---

console.log('⚡ Running Performance Benchmark: Hero Mouse Handler');
console.log('==================================================');

const EVENT_COUNT = 10000;

const baseline = runBaseline(EVENT_COUNT);
const optimized = runOptimized(EVENT_COUNT);

console.table([baseline, optimized]);

console.log('\nAnalysis:');
console.log(`Render Count Reduction: ${baseline.renderCount} -> ${optimized.renderCount}`);
console.log(`Layout Reads Reduction: ${baseline.layoutReadCount} -> ${optimized.layoutReadCount}`);
console.log(`Execution Time Improvement: ${(baseline.duration / optimized.duration).toFixed(2)}x faster logic`);
