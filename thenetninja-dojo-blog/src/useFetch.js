import { useState, useEffect } from 'react';

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const abortController = new AbortController();

    setTimeout(() => {
      fetch(url, { signal: abortController.signal })
        .then(res => {
          if (!res.ok) {
            throw Error('Could not fetch data from server.');
          }
          return res.json()
        })
        .then(data => {
          setData(data)
          setIsLoading(false);
          setError(null);
        })
        .catch((err) => {
          if (err.name === 'AbortError') {
            console.log('fetch aborted');
          } else {
            setIsLoading(false);
            setError(err.message);
          }
        })
    }, 1000)

    // aborts fetch associated
    // will cancel the fetch when the page goes to new route white its still fetching
    return () => abortController.abort();
  }, [url]);

  return { data, isLoading, error };
}

export default useFetch;