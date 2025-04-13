import { useEffect } from "react";

function useIntersectionObserver({ targetRef, onIntersect, threshold = 1.0, enabled = true }) {
  useEffect(() => {
    if (!enabled) return;
    if (!targetRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          onIntersect(); // callback when target is in view
        }
      },
      { threshold }
    );

    observer.observe(targetRef.current);

    return () => {
      observer.disconnect();
    };
  }, [targetRef, enabled, threshold, onIntersect]);
}

export default useIntersectionObserver;