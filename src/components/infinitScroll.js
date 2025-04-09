import Questions from "./questions/questions";
import Loader from "./loader/loading";
import { useEffect, useState, useRef } from "react";

function InfiniteScroll() {
  const [isLoading, setIsLoading] = useState(true);
  const [hasMoreData, setHasMoreData] = useState(true);
  const [loadedData, setLoadedData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const boxRef = useRef(null);

  useEffect(() => {
    if (!hasMoreData) return;

    setIsLoading(true);
    fetch(`https://jsonplaceholder.typicode.com/posts?_page=${currentPage}&_limit=10`)
      .then(response => response.json())
      .then(data => {
        if (data.length === 0) {
          setHasMoreData(false);
        } else {
          setLoadedData(prev => [...prev, ...data]);
        }
        setIsLoading(false);
      });
  }, [currentPage, hasMoreData]);

  useEffect(() => {
    if (!boxRef.current || !hasMoreData) return;

    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];

      if (entry.isIntersecting) {
        setCurrentPage(prev => {
          if (prev >= 9) {
            setHasMoreData(false);
            return prev;
          }
          return prev + 1;
        });
      }
    });

    observer.observe(boxRef.current);
    return () => observer.disconnect();
  }, [hasMoreData]);

  return (
    <div>
      <Questions questions={loadedData} />
      <div ref={boxRef}>
      {hasMoreData && < Loader />}
      </div>
    </div>
  );
}

export default InfiniteScroll;