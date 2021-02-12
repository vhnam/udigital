import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';

import Box from './Box';
import Wrapper from './Wrapper';
import Content from './Content';
import Flex from './Flex';
import Bullet from './Bullet';

const directionOffset = 800;
const swipeConfidenceThreshold = 100;

const variants = {
  enter: (direction) => ({
    x: direction < 0 ? -directionOffset : directionOffset,
    opacity: 0,
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction) => ({
    zIndex: 0,
    x: direction < 0 ? -directionOffset : directionOffset,
    opacity: 0,
  }),
};

const swipePower = (offset, velocity) => {
  return Math.abs(offset) * velocity;
};

const Slider = ({ content, render }) => {
  const [[page, direction], setPage] = useState([0, 0]);
  const [activeBullet, setActiveBullet] = useState(0);

  const paginate = (newDirection) => {
    if (page + newDirection < content.length && page + newDirection >= 0) {
      setPage([page + newDirection, 0]);
      setActiveBullet(page + newDirection);
    } else if (page + newDirection === content.length) {
      setPage([0, 0]);
      setActiveBullet(0);
    } else if (page + newDirection === -1) {
      setPage([content.length - 1, 0]);
      setActiveBullet(content.length - 1);
    }
  };

  return (
    <Wrapper>
      <AnimatePresence initial={false} exitBeforeEnter custom={direction}>
        <Box
          position="relative"
          key={page}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: {
              type: 'spring',
              stiffness: 800,
              damping: 100,
              duration: 0.1,
            },
            opacity: { duration: 0.6 },
          }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={1}
          onDragEnd={(e, { offset, velocity }) => {
            const swipe = swipePower(offset.x, velocity.x);
            if (swipe < swipeConfidenceThreshold) {
              paginate(-1);
            } else if (swipe > -swipeConfidenceThreshold) {
              paginate(1);
            }
          }}
        >
          <Content>{render(content[page])}</Content>
        </Box>
      </AnimatePresence>
      <Flex>
        {content.map((item, index) => (
          <Bullet
            key={item.name}
            onClick={() => {
              setPage([index, 0]);
              setActiveBullet(index);
            }}
            active={activeBullet === index}
          />
        ))}
      </Flex>
    </Wrapper>
  );
};

export default Slider;