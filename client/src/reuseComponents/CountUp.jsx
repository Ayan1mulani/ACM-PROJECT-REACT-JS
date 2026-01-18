import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

const CountUp = ({ end, duration = 1.5, suffix = '', delay = 0 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    let start = null;
    let rafId;

    const animate = (timestamp) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / (duration * 1000), 1);
      setCount(Math.floor(progress * end));

      if (progress < 1) {
        rafId = requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    const timeout = setTimeout(() => {
      rafId = requestAnimationFrame(animate);
    }, delay);

    return () => {
      cancelAnimationFrame(rafId);
      clearTimeout(timeout);
    };
  }, [isInView, end, duration, delay]);

  return (
    <span ref={ref} className="inline-block overflow-hidden h-[1.3em]">
      <motion.span
        animate={{ y: [16, 0] }}
        transition={{ duration: 0.35, ease: 'easeOut' }}
        className="inline-block will-change-transform"
      >
        {count}
        {suffix}
      </motion.span>
    </span>
  );
};

export default CountUp;