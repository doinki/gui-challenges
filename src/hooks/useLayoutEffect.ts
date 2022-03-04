import { useEffect, useLayoutEffect as useReactLayoutEffect } from 'react';

const useLayoutEffect =
  typeof window === 'undefined' ? useEffect : useReactLayoutEffect;

export default useLayoutEffect;
