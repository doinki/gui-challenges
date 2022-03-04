import { useContext } from 'react';

import { ToastContext } from '@/contexts';

const useToast = () => useContext(ToastContext);

export default useToast;
