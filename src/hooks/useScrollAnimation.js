import { useInView } from 'react-intersection-observer';

export function useScrollAnimation(threshold = 0.1, triggerOnce = true) {
  const { ref, inView } = useInView({
    threshold,
    triggerOnce,
    rootMargin: '-50px 0px',
  });

  return { elementRef: ref, isVisible: inView };
}