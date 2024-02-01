import { useEffect, useState } from 'react';

function Fetch(url) {

  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        setData(data);
      } catch (err) {
        setError(err);
      }
    };


    fetchData();
  }, [url]);
  return { data, error };
}
export default Fetch;