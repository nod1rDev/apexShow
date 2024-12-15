import type { ReactNode } from 'react';
import {
  useRef,
  useState,
} from 'react';

import {
  motion,
  useMotionValue,
  useTransform,
} from 'framer-motion';

interface Card3DProps {
  children: ReactNode;
  className?: string;
  depth?: number;
}

export const Card3D = ({
  children,
  className = '',
  depth = 20,
}: Card3DProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const x = useMotionValue(0.5);
  const y = useMotionValue(0.5);

  const rotateX = useTransform(y, [0, 1], [depth, -depth]);
  const rotateY = useTransform(x, [0, 1], [-depth, depth]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const newX = (e.clientX - rect.left) / rect.width;
    const newY = (e.clientY - rect.top) / rect.height;

    x.set(newX);
    y.set(newY);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        x.set(0.5);
        y.set(0.5);
      }}
      style={{
        perspective: 1000,
      }}
      className={className}
    >
      <motion.div
        style={{
          rotateX: isHovered ? rotateX : 0,
          rotateY: isHovered ? rotateY : 0,
        }}
        transition={{
          type: 'spring',
          damping: 20,
          stiffness: 300,
        }}
        className="w-full h-full"
      >
        {children}
      </motion.div>
    </motion.div>
  );
}; 