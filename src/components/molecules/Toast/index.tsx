/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
// TODO: jsx-a11y

import { memo, useEffect, useRef } from 'react';

import type { Toast as ToastType, ToastCloseHandler } from '@/types';

interface ToastProps {
  children: ToastType['text'];
  id: ToastType['id'];
  onClose: ToastCloseHandler;
}

const Toast: React.VFC<ToastProps> = ({ children, id, onClose }) => {
  const ref = useRef<HTMLOutputElement>(null);

  useEffect(() => {
    const element = ref.current;

    const onAnimationEnd = (e: AnimationEvent) => {
      if (e.animationName !== 'fade-out') {
        return;
      }

      onClose(id);
    };

    element?.addEventListener('animationend', onAnimationEnd);

    return () => {
      element?.removeEventListener('animationend', onAnimationEnd);
    };
  }, [id, onClose]);

  return (
    <output
      ref={ref}
      className="pointer-events-auto w-64 animate-slide-in cursor-pointer break-words rounded bg-zinc-700 bg-opacity-95 p-4 text-zinc-50 motion-reduce:animate-fade-in-out"
      onClick={() => {
        onClose(id);
      }}
    >
      {children}
    </output>
  );
};

export default memo(Toast);
