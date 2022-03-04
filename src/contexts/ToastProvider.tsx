import { createContext, useCallback, useState } from 'react';

import { ToastPortal } from '@/organisms';
import type { Toast, ToastCloseHandler, ToastHandler } from '@/types';

export const ToastContext = createContext<ToastHandler>(() => {});

const ToastProvider: React.FC = ({ children }) => {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const onClose = useCallback<ToastCloseHandler>((id) => {
    setToasts((state) => state.filter((toast) => toast.id !== id));
  }, []);

  const onToast = useCallback<ToastHandler>((text) => {
    setToasts((state) => {
      const lastToast = state[state.length - 1];
      return state.concat({ id: lastToast ? lastToast.id + 1 : 0, text });
    });
  }, []);

  return (
    <ToastContext.Provider value={onToast}>
      {children}
      <ToastPortal toasts={toasts} onClose={onClose} />
    </ToastContext.Provider>
  );
};

export default ToastProvider;
