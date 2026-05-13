import { motion } from 'framer-motion';

function Reveal({ as: Tag = 'div', children, delay = 0, className = '' }) {
  const MotionTag = motion[Tag];
  return (
    <MotionTag
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, ease: 'easeOut', delay }}
      className={className}
    >
      {children}
    </MotionTag>
  );
}

export default Reveal;
