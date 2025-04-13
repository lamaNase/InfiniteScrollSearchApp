import Questions from "../questions/questions";
import Loader from "./loader/loading";
import { useEffect, useState, useRef } from "react";
import { fetchQuestions } from "../../utils/fetchData";
import useIntersectionObserver from "../../hooks/useIntersectionObserver";

function InfiniteScroll() {
  const [isLoading, setIsLoading] = useState(true);
  const [hasMoreData, setHasMoreData] = useState(true);
  const [loadedData, setLoadedData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const boxRef = useRef(null);

  useEffect(() => {
    if (!hasMoreData) return;

    setIsLoading(true);
    fetchQuestions(currentPage)
      .then(data => {
        if (data.length === 0) {
          setHasMoreData(false);
        } else {
          setLoadedData(prev => [...prev, ...data]);
        }
        setIsLoading(false);
      });
  }, [currentPage, hasMoreData]);

  useIntersectionObserver({
    targetRef: boxRef,
    onIntersect: () => {
      if (!isLoading && hasMoreData) {
        setCurrentPage(prev => prev + 1);
      }
    },
    threshold: 1.0,
    enabled: hasMoreData,
  });

  return (
    <div>
      <Questions questions={loadedData} />
      <div ref={boxRef}>
        {hasMoreData && isLoading && <Loader />}
      </div>
    </div>
  );
}

export default InfiniteScroll;