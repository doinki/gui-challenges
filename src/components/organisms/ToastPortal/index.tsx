import { useRef } from 'react';
import { createPortal } from 'react-dom';

import { useLayoutEffect } from '@/hooks';
import { Toast } from '@/molecules';
import type { Toast as ToastType, ToastCloseHandler } from '@/types';

interface ToastPortalProps {
  onClose: ToastCloseHandler;
  toasts: ToastType[];
}

const ToastPortal: React.VFC<ToastPortalProps> = ({ onClose, toasts }) => {
  const { length } = toasts;

  const ref = useRef<HTMLElement>(null);
  // Using useRef to avoid re-rendering
  const counterRef = useRef(1);
  const heightRef = useRef(0);

  useLayoutEffect(() => {
    const elemnt = ref.current;
    const { matches } = window.matchMedia(
      '(prefers-reduced-motion: no-preference)'
    );

    if (!elemnt || !matches) {
      return;
    }

    const prevCounter = counterRef.current;
    counterRef.current = length;

    const prevHeight = heightRef.current;
    heightRef.current = elemnt.offsetHeight;

    if (length <= prevCounter) {
      return;
    }

    const offset = heightRef.current - prevHeight;
    const animation = elemnt.animate(
      [
        { transform: `translateY(${offset}px)` },
        { transform: 'translateY(0)' },
      ],
      {
        duration: 150,
        easing: 'ease-out',
      }
    );
    animation.startTime = document.timeline.currentTime;
  }, [length]);

  if (toasts.length === 0) {
    return null;
  }

  const portal = document.getElementById('__portal');

  if (!portal) {
    return null;
  }

  return createPortal(
    <section
      ref={ref}
      className="pointer-events-none fixed bottom-0 left-0 right-0 mb-[10vh] flex flex-col items-center justify-end gap-[1vh]"
    >
      {toasts.map((toast) => (
        <Toast key={toast.id} id={toast.id} onClose={onClose}>
          {toast.text}
        </Toast>
      ))}
    </section>,
    portal
  );
};

export default ToastPortal;
