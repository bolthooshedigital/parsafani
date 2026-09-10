import { useEffect, useRef, useState } from 'react';

interface TiltOptions {
  max?: number;
  scale?: number;
  speed?: number;
}

export function useTilt<T extends HTMLElement = HTMLDivElement>(options: TiltOptions = {}) {
  const { max = 15, scale = 1.02, speed = 400 } = options;
  const ref = useRef<T>(null);
  const [transform, setTransform] = useState('');

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const handleMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      const y = (e.clientY - rect.top) / rect.height;
      const rotateX = (y - 0.5) * -2 * max;
      const rotateY = (x - 0.5) * 2 * max;
      setTransform(
        `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(${scale})`
      );
    };

    const handleLeave = () => {
      setTransform('perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)');
    };

    el.addEventListener('mousemove', handleMove);
    el.addEventListener('mouseleave', handleLeave);

    return () => {
      el.removeEventListener('mousemove', handleMove);
      el.removeEventListener('mouseleave', handleLeave);
    };
  }, [max, scale]);

  return { ref, transform, speed };
}
