import { useState } from 'react';

import { useLayoutEffect } from '@/hooks';
import { Logo } from '@/icons';

const IEAlert = () => {
  const [isIE, setIsIE] = useState(false);

  useLayoutEffect(() => {
    setIsIE(!!document.documentMode);
  }, []);

  if (!isIE) {
    return null;
  }

  return (
    <aside className="flex items-center justify-center py-4">
      <Logo className="h-8 w-8" />
      <p className="ml-4 text-xl">이 브라우저는 더 이상 지원되지 않습니다.</p>
    </aside>
  );
};

export default IEAlert;
