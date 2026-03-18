import { useState } from 'react';
import type { ReactNode } from 'react';

interface Slide {
  header: string;
  content: ReactNode;
}

interface CarouselProps {
  slides: Slide[];
  style?: React.CSSProperties;
}

export default function Carousel({ slides, style }: CarouselProps) {
  const [current, setCurrent] = useState(0);
  const prev = () => setCurrent(c => (c - 1 + slides.length) % slides.length);
  const next = () => setCurrent(c => (c + 1) % slides.length);

  const ArrowLeft = () => (
    <svg viewBox="0 0 32 32" fill="none">
      <polyline points="20,6 10,16 20,26" stroke="#D71920" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
  const ArrowRight = () => (
    <svg viewBox="0 0 32 32" fill="none">
      <polyline points="12,6 22,16 12,26" stroke="#D71920" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );

  return (
    <div className="carousel-card" style={style}>
      <div className="carousel-outer">
        <div className="carousel-arrow-side">
          <button className="arrow-btn" onClick={prev} aria-label="Previous"><ArrowLeft /></button>
        </div>

        <div className="carousel-slides-wrap">
          <div className="card-header">
            <div className="card-header-text">{slides[current].header}</div>
          </div>
          <div>{slides[current].content}</div>
          <div className="carousel-dots">
            {slides.map((_, i) => (
              <div
                key={i}
                className={`dot${i === current ? ' active' : ''}`}
                onClick={() => setCurrent(i)}
              />
            ))}
          </div>
        </div>

        <div className="carousel-arrow-side">
          <button className="arrow-btn" onClick={next} aria-label="Next"><ArrowRight /></button>
        </div>
      </div>
    </div>
  );
}
