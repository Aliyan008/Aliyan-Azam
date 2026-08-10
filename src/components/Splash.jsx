import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const CROSSBAR_RATIO = 0.61; // fraction down the letter where the crossbar sits — nudge if still off

function getInkEdgeAtRow(el, rowRatio) {
  const rect = el.getBoundingClientRect();
  const style = getComputedStyle(el);
  const scale = 2;
  const canvas = document.createElement('canvas');
  canvas.width = Math.ceil(rect.width * scale);
  canvas.height = Math.ceil(rect.height * scale);
  const ctx = canvas.getContext('2d');
  ctx.scale(scale, scale);
  ctx.font = `${style.fontStyle} ${style.fontWeight} ${style.fontSize}/${style.lineHeight} ${style.fontFamily}`;
  ctx.textBaseline = 'top';
  ctx.fillStyle = '#000';
  ctx.fillText(el.textContent, 0, 0);
  const row = Math.min(canvas.height - 1, Math.round(rect.height * rowRatio * scale));
  const imgData = ctx.getImageData(0, row, canvas.width, 1).data;
  let left = null;
  let right = null;
  for (let x = 0; x < canvas.width; x += 1) {
    if (imgData[x * 4 + 3] > 10) {
      if (left === null) left = x;
      right = x;
    }
  }
  if (left === null) return null;
  return { leftPx: rect.left + left / scale, rightPx: rect.left + right / scale };
}

function Mark({ leftRef, rightRef, animate = false }) {
  const letterProps = animate
    ? {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        transition: { duration: 0.6, ease: 'easeOut' },
      }
    : {};
  return (
    <div className="flex items-center gap-2">
      <motion.span ref={leftRef} className="font-serif text-6xl md:text-8xl text-ink" {...letterProps}>A</motion.span>
      <motion.span ref={rightRef} className="font-serif text-6xl md:text-8xl text-ink" {...letterProps}>A</motion.span>
    </div>
  );
}

function CompositionLayer({ geo, showLine, viewportWidth }) {
  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <Mark animate />
      <motion.div
        className="absolute h-px sm:h-[1.5px] xl:h-[2px] bg-ink"
        style={{ top: geo.crossbarY, right: viewportWidth - geo.leftAnchor }}
        initial={{ width: 0 }}
        animate={{ width: showLine ? geo.leftAnchor : 0 }}
        transition={{ duration: 1.4, ease: [0.65, 0, 0.35, 1] }}
      />
      {geo.leftInnerEdge != null && geo.rightInnerEdge != null && (
        <motion.div
          className="absolute h-px sm:h-[1.5px] xl:h-[2px] bg-ink"
          style={{
            top: geo.crossbarY,
            left: geo.leftInnerEdge,
            width: geo.rightInnerEdge - geo.leftInnerEdge,
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: showLine ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        />
      )}
      <motion.div
        className="absolute h-px sm:h-[1.5px] xl:h-[2px] bg-ink"
        style={{ top: geo.crossbarY, left: geo.rightAnchor }}
        initial={{ width: 0 }}
        animate={{ width: showLine ? viewportWidth - geo.rightAnchor : 0 }}
        transition={{ duration: 1.4, ease: [0.65, 0, 0.35, 1] }}
      />
    </div>
  );
}

function Splash({ onComplete }) {
  const [phase, setPhase] = useState('measuring');
  const [geo, setGeo] = useState(null);
  const measureLeftRef = useRef(null);
  const measureRightRef = useRef(null);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    let cancelled = false;
    const timers = [];

    async function start() {
      if (document.fonts && document.fonts.ready) {
        await document.fonts.ready;
      }
      await new Promise((r) => requestAnimationFrame(r));
      if (cancelled || !measureLeftRef.current || !measureRightRef.current) return;

      const leftRect = measureLeftRef.current.getBoundingClientRect();
      const crossbarY = leftRect.top + leftRect.height * CROSSBAR_RATIO;
      const leftInk = getInkEdgeAtRow(measureLeftRef.current, CROSSBAR_RATIO);
      const rightInk = getInkEdgeAtRow(measureRightRef.current, CROSSBAR_RATIO);

      const BLEED_RATIO = 0.03; // fraction of letter height, scales bleed across screen sizes
      const BLEED = leftRect.height * BLEED_RATIO;
      setGeo({
        crossbarY,
        leftAnchor: leftInk ? leftInk.leftPx + BLEED : leftRect.left,
        rightAnchor: rightInk ? rightInk.rightPx - BLEED : measureRightRef.current.getBoundingClientRect().right,
        leftInnerEdge: leftInk ? leftInk.rightPx - BLEED : null,
        rightInnerEdge: rightInk ? rightInk.leftPx + BLEED : null,
      });
      setPhase('letters');

      timers.push(setTimeout(() => setPhase('line'), 800));
      timers.push(setTimeout(() => setPhase('split'), 2200));
      timers.push(
        setTimeout(() => {
          document.body.style.overflow = '';
          onComplete();
        }, 3200)
      );
    }

    start();

    return () => {
      cancelled = true;
      timers.forEach(clearTimeout);
      document.body.style.overflow = '';
    };
  }, [onComplete]);

  const showLine = phase === 'line' || phase === 'split';
  const splitting = phase === 'split';
  const viewportWidth = typeof window !== 'undefined' ? window.innerWidth : 0;
  const viewportHeight = typeof window !== 'undefined' ? window.innerHeight : 0;

  return (
    <div className="fixed inset-0 z-[100] pointer-events-none overflow-hidden">
      {!geo && <div className="fixed inset-0 bg-cream" />}
      {phase === 'measuring' && (
        <div className="fixed inset-0 flex items-center justify-center opacity-0">
          <Mark leftRef={measureLeftRef} rightRef={measureRightRef} />
        </div>
      )}

      {geo && (
        <>
          <motion.div
            className="fixed inset-x-0 top-0 overflow-hidden bg-cream"
            style={{ height: geo.crossbarY }}
            animate={{ y: splitting ? '-100%' : 0 }}
            transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
          >
            <div className="absolute inset-x-0 top-0" style={{ height: viewportHeight }}>
              <CompositionLayer geo={geo} showLine={showLine} viewportWidth={viewportWidth} />
            </div>
          </motion.div>

          <motion.div
            className="fixed inset-x-0 bottom-0 overflow-hidden bg-cream"
            style={{ height: viewportHeight - geo.crossbarY }}
            animate={{ y: splitting ? '100%' : 0 }}
            transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
          >
            <div className="absolute inset-x-0 bottom-0" style={{ height: viewportHeight }}>
              <CompositionLayer geo={geo} showLine={showLine} viewportWidth={viewportWidth} />
            </div>
          </motion.div>
        </>
      )}
    </div>
  );
}

export default Splash;
