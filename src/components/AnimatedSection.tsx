import { useInView } from 'react-intersection-observer';
import React from 'react';

type AnimatedSectionProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number; // Optional delay
};

const AnimatedSection = ({ children, className = '', delay = 0 }: AnimatedSectionProps) => {
  const { ref, inView } = useInView({
    triggerOnce: true,    // Animate only once when it comes into view
    threshold: 0.1,       // Trigger when 10% of the element is visible
    delay: delay,         // Optional delay for staggered effects
  });

  return (
    <div
      ref={ref}
      className={`${className} transition-all duration-700 ease-out ${
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      {children}
    </div>
  );
};

export default AnimatedSection;
