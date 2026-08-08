'use client';

import { useEffect, useRef, useState } from 'react';

export default function Reveal({ children, className }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const classes = ['reveal', visible ? 'reveal-visible' : '', className || ''].filter(Boolean).join(' ');

  return <div ref={ref} className={classes}>{children}</div>;
}
