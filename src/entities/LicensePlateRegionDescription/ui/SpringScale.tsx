'use client';
import { useSpring, animated } from '@react-spring/web';
import { cloneElement, forwardRef } from 'react';

interface SpringScale {
  children: React.ReactElement;
  in?: boolean;
  onClick?: any;
  onEnter?: (node: HTMLElement, isAppearing: boolean) => void;
  onExited?: (node: HTMLElement, isAppearing: boolean) => void;
  ownerState?: any;
}

export const SpringScale = forwardRef<HTMLDivElement, SpringScale>(
  function SpringScale(props, ref) {
    const {
      children,
      in: open,
      onClick,
      onEnter,
      onExited,
      ownerState,
      ...other
    } = props;

    const style = useSpring({
      from: { scale: 0, opacity: 0 },

      to: { scale: open ? 1 : 0, opacity: open ? 1 : 0 },

      onStart: () => {
        if (open && onEnter) {
          onEnter(null as any, true);
        }
      },

      onRest: () => {
        if (!open && onExited) {
          onExited(null as any, true);
        }
      },

      config: {
        frequency: 0.3,
        damping: 0.8,
        precision: 0.0001,
      },
    });

    return (
      <animated.div ref={ref} style={style} {...other}>
        {cloneElement(children, { onClick })}
      </animated.div>
    );
  }
);
