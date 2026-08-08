'use client';

import { useRef } from 'react';

export default function TiltCard({ children, className = '' }) {
  const ref = useRef(null);

  function handleMouseMove(e) {
    const card = ref.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -8;
    const rotateY = ((x - centerX) / centerX) * 8;
    card.style.transform = 'perspective(700px) rotateX(' + rotateX + 'deg) rotateY(' + rotateY + 'deg) translateZ(12px)';
  }

  function handleMouseLeave() {
    const card = ref.current;
    if (!card) return;
    card.style.transform = 'perspective(700px) rotateX(0deg) rotateY(0deg) translateZ(0px)';
  }

  return (
    <div
      ref={ref}
      className={'tilt-card ' + className}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </div>
  );
}
