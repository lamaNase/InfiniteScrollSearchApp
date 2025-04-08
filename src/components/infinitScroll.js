import Questions from "./questions/questions";
import Loader from "./loader/loading";
import { useEffect, useState, useRef } from "react";

function InfiniteScroll() {
  const [isLoading, setIsLoading] = useState(true);
  const [hasMoreData, setHasMoreData] = useState(true);
  const [loadedData, setLoadedData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1); // ✅ Start from 1 (API starts from 1)
  const boxRef = useRef(null);

  useEffect(() => {
    if (!hasMoreData) return; // ✅ Stop fetching when no more data

    setIsLoading(true);
    fetch(`https://jsonplaceholder.typicode.com/posts?_page=${currentPage}&_limit=10`)
      .then(response => response.json())
      .then(data => {
        if (data.length === 0) {
          setHasMoreData(false); // ✅ If API returns no data, stop fetching
        } else {
          setLoadedData(prev => [...prev, ...data]); // ✅ Append new data
        }
        setIsLoading(false);
      });
  }, [currentPage, hasMoreData]); // ✅ Run when currentPage or hasMoreData changes

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
      <div ref={boxRef} style={{ height: "50px" }}>
      {hasMoreData && < Loader />}
      </div>
    </div>
  );
}

export default InfiniteScroll;