import { useState, useEffect, useCallback } from 'react';
import axios from 'axios';

const useInfiniteScroll = (initialCars, pageSize) => {
  const [cars, setCars] = useState(initialCars);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  const fetchMoreCars = useCallback(async () => {
    if (!hasMore) return;

    try {
      const { data } = await axios.get(`http://localhost:5002/api/v1/product?page=${page}&size=${pageSize}`);
      setCars((prevCars) => [...prevCars, ...data.cars]);
      setPage((prevPage) => prevPage + 1);
      if (data.cars.length < pageSize) setHasMore(false);
    } catch (error) {
      console.error('Error fetching more cars:', error);
    }
  }, [hasMore, page, pageSize]);

  useEffect(() => {
    fetchMoreCars();
  }, [fetchMoreCars]);

  return { cars, fetchMoreCars };
};

export default useInfiniteScroll;
